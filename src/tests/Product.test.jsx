import { useState, useEffect } from "react";
import Loader from "../fetchUtils/Loader";
import ErrorShower from "../fetchUtils/ErrorShower";
import { render, screen, act } from "@testing-library/react";
import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";
import Product from "../product/Product";
import { useParams } from "react-router-dom";

vi.mock("../product/Product.jsx", () => ({
  default: () => {
    const { id } = useParams();
    const [productInfos, setProductInfos] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const controller = new AbortController();

      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://fakestoreapi.com/products/${id}`,
            { signal: controller.signal },
          );

          if (!response.ok) {
            throw new Error(`HTTP error: status ${response.status}`);
          }

          const result = await response.json();
          setProductInfos(result);
          setErrorMsg(null);
        } catch (error) {
          if (error.name === "AbortError") return;
          setProductInfos(null);
          setErrorMsg(error.message);
        } finally {
          setIsLoading(false);
        }
      };

      setIsLoading(true);
      fetchData();

      return () => controller.abort();
    }, [id]);

    if (isLoading) return <Loader />;
    else if (errorMsg) return <ErrorShower errorMsg={errorMsg} />;
    else if (productInfos) {
      return (
        <>
          <p>Rendered id: {productInfos.id}</p>
          <p>{productInfos.title}</p>
          <p>{productInfos.category}</p>
          <p>{productInfos.price}</p>
          <p>{productInfos.description}</p>
        </>
      );
    }
  },
}));

describe("Shop Product", () => {
  describe("fetch", () => {
    beforeEach(() => {
      fetch = vi.fn();
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it("fetches the correct product when given a valid url with a valid id", async () => {
      fetch.mockResolvedValue({
        json: vi.fn().mockResolvedValue({
          id: 1,
          title: "gucci airpods",
          price: 85,
          category: "electronics",
          description: "airpods for luxury peoples",
          image: "...",
        }),
        ok: true,
      });

      let container;
      await act(async () => {
        container = render(<Product />).container;
      });
      expect(fetch).toHaveBeenCalled();

      const productTitle = screen.getByText(/gucci airpods/i);
      const productId = screen.getByText(/rendered id: 1/i);

      expect(productTitle).toBeInTheDocument();
      expect(productId).toBeInTheDocument();

      expect(container).toMatchSnapshot();
    });

    it("shows an error message if the given id doesn't exist as a product", async () => {
      fetch.mockRejectedValue(new Error("Fetch failed"));

      await act(async () => {
        render(<Product />);
      });

      expect(screen.getByText(/error: fetch failed/i)).toBeInTheDocument();
    });
  });
});
