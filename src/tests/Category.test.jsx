import { render, screen, act } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Category from "../shop/Category";

vi.mock("../shop/Card.jsx", () => ({
  default: ({ title }) => <h1>{title}</h1>,
}));

describe("Shop Category", () => {
  describe("Fetch", () => {
    beforeEach(() => {
      fetch = vi.fn();
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it("fetches the correct products when in a particular url", async () => {
      const mockResponse = {
        json: vi.fn().mockResolvedValue([
          { id: 1, title: "Product 1" },
          { id: 2, title: "Product 2" } ,
        ]),
        ok: true,
      };
      fetch.mockResolvedValue(mockResponse);

      await act(async () => {
        render(<Category categoryName="electronics" />);
      });
      expect(fetch).toHaveBeenCalled();

      const product1 = screen.getByText(/product 1/i);
      const product2 = screen.getByText(/product 2/i);

      expect(product1).toBeInTheDocument();
      expect(product2).toBeInTheDocument();

    });

    it("handles fetch error properly", async () => {
      fetch.mockRejectedValue(new Error("Fetch failed"));

      await act(async () => {
        render(<Category categoryName="jewelry" />);
      });
      expect(fetch).toHaveBeenCalled();

      const errorMessage = screen.getByText(/error: .*/i);
      expect(errorMessage).toBeInTheDocument();
    });

    it("shows an error if the fetching url is incorrect", async () => {
      await act(async () => {
        render(<Category categoryName="strings" />);
      });

      const errorMessage = screen.getByText(/error: .*/i);
      expect(errorMessage).toBeInTheDocument();
    });

    it("shows the loading state when data isn't set yet", async () => {
      let resolveFetch;
      const fetchPromise = new Promise((resolve) => {
        resolveFetch = resolve;
      });
      fetch.mockResolvedValue(fetchPromise);

      await act(async () => {
        render(<Category categoryName="mens-clothing" />);
      });
      expect(fetch).toHaveBeenCalled();

      const loadingMessage = screen.getByText(/loading.../i);
      expect(loadingMessage).toBeInTheDocument();

      resolveFetch({
        json: vi.fn().mockResolvedValue([
          { id: 1, title: "Product 1" },
          { id: 2, title: "Product 2" },
        ]),
        ok: true,
      });

      await act(async () => {}); // Wait for the component to load all the remaining renders;

      const product = screen.getByText(/product 1/i);
      expect(product).toBeInTheDocument();
    });
  });
});
