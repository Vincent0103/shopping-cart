import Loader from "../fetchUtils/Loader";
import ErrorShower from "../fetchUtils/ErrorShower";
import { render, screen, act } from "@testing-library/react";
import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";
import Product from "../product/Product";
import Shop from "../shop/Shop";
import useData from "../fetchUtils/Fetch";
import {
  useParams,
  Link,
  createMemoryRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import userEvent from "@testing-library/user-event";

vi.mock("../product/Product.jsx", () => ({
  default: ({ mockedId, categoryName = "" }) => {
    const {
      data: productInfos,
      errorMessage,
      isLoading,
    } = useData(`https://fakestoreapi.com/products/${mockedId}`, [mockedId]);

    if (isLoading) return <Loader />;
    else if (errorMessage) return <ErrorShower errorMsg={errorMessage} />;
    else if (productInfos) {
      return (
        <>
          <Link to={`/shop/${categoryName}`}>
            <li>{categoryName}</li>
          </Link>
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

vi.mock("../shop/Shop.jsx", () => ({
  default: () => {
    let { name } = useParams();

    const validCategories = ["electronics", "mens-clothing"];

    name = name.split("/")[0];
    if (!validCategories.includes(name)) name = "";

    return (
      <>
        <nav>
          <ul>
            <Link>
              <li>
                <h3>{name}</h3>
              </li>
            </Link>
          </ul>
        </nav>
      </>
    );
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

      const routes = [
        {
          path: "/",
          element: <Navigate to={"/products/:id"} replace />,
        },
        {
          path: "/products/:id",
          element: <Product mockedId={1} />,
        },
      ];
      const router = createMemoryRouter(routes);

      await act(async () => {
        render(<RouterProvider router={router} />);
      });
      expect(fetch).toHaveBeenCalled();

      const productTitle = screen.getByText(/gucci airpods/i);
      const productId = screen.getByText(/rendered id: 1/i);

      expect(productTitle).toBeInTheDocument();
      expect(productId).toBeInTheDocument();

      expect(screen).toMatchSnapshot();
    });

    it("shows an error message if the given id doesn't exist as a product", async () => {
      fetch.mockRejectedValue(new Error("Fetch failed"));

      await act(async () => {
        render(<Product />);
      });

      expect(screen.getByText(/error: fetch failed/i)).toBeInTheDocument();
    });
  });

  describe("history nav", () => {
    it("should link back to the original category when clicking the category link", async () => {
      fetch = vi.fn().mockResolvedValue({
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

      const routes = [
        {
          path: "/",
          element: <Navigate to={"product/:id"} replace />,
        },
        {
          path: "/product/:id",
          element: <Product categoryName={"electronics"} />,
        },
        {
          path: "/shop?/:name",
          element: <Shop />,
        },
      ];

      const router = createMemoryRouter(routes);
      await act(async () => {
        render(<RouterProvider router={router} />);
      });

      const user = userEvent.setup();

      const categoryLink = screen.getByRole("link", { name: "electronics" });
      await user.click(categoryLink);

      // the mocked shop only displays a link with the given parameter from the history link name
      expect(
        screen.getByRole("heading", { name: "electronics" }),
      ).toBeInTheDocument();
    });
  });
});
