import { afterEach, beforeEach, describe, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Category from "../shop/Category";
import Shop from "../shop/Shop";
import {
  createMemoryRouter,
  Link,
  Navigate,
  RouterProvider,
  useParams,
} from "react-router-dom";

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
            <Link to={"/shop"}>
              <li>
                <h3>All</h3>
              </li>
            </Link>
            <Link to={"/shop/electronics"}>
              <li>
                <h3>Electronics</h3>
              </li>
            </Link>
            <Link to={"/shop/mens-clothing"}>
              <li>
                <h3>Men's Clothing</h3>
              </li>
            </Link>
          </ul>
        </nav>
        <section>
          <Category categoryName={name} />
        </section>
      </>
    );
  },
}));

describe("Shop", () => {
  describe("Category navbar", () => {
    beforeEach(() => {
      const routes = [
        {
          path: "/",
          element: <Navigate to={"/shop"} replace />,
        },
        {
          path: "/shop?/:name",
          element: <Shop />,
        },
      ];

      const router = createMemoryRouter(routes);
      render(<RouterProvider router={router} />);
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it("should display the products from the selected category", async () => {
      fetch = vi.fn();
      fetch.mockResolvedValue({
        json: vi.fn().mockResolvedValue([
          {
            id: 1,
            title: "Product 1",
            imgSrc: "https://example.com/product1.jpg",
            price: 29.99,
          },
          {
            id: 2,
            title: "Product 2",
            imgSrc: "https://example.com/product2.jpg",
            price: 49.99,
          },
          {
            id: 3,
            title: "Product 3",
            imgSrc: "https://example.com/product3.jpg",
            price: 19.99,
          },
        ]),
        ok: true,
      });

      const user = userEvent.setup();
      const electronicsBtn = screen.getByRole("heading", {
        name: /electronics/i,
      });
      expect(electronicsBtn).toBeInTheDocument();

      await user.click(electronicsBtn);
      expect(screen.getByAltText("Product: Product 1")).toBeInTheDocument();
      expect(screen.getByAltText("Product: Product 2")).toBeInTheDocument();
      expect(screen.getByAltText("Product: Product 3")).toBeInTheDocument();
    });
  });
});
