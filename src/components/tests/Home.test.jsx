import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../home/Home";
import { beforeAll, it, vi } from "vitest";
import {
  createMemoryRouter,
  Link,
  Navigate,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Shop from "../shop/Shop";

vi.mock("../home/Home", () => ({
  default: () => (
    <>
      <header>
        <Link to="/shop">
          <button>
            <p>Shop Now</p>
          </button>
        </Link>
      </header>
      <section>
        <Link to="/shop/electronics">
          <button>
            <h3>ELECTRONICS</h3>
          </button>
        </Link>
        <Link to="/shop/jewelry">
          <button>
            <h3>JEWELRY</h3>
          </button>
        </Link>
        <Link to="/shop/mens-clothing">
          <button>
            <h3>CLOTHES</h3>
          </button>
        </Link>
      </section>
    </>
  ),
}));

vi.mock("../shop/Shop.jsx", () => ({
  default: () => {
    let { name } = useParams();

    const validCategories = [
      "electronics",
      "jewelry",
      "mens-clothing",
      "womens-clothing",
    ];

    name = name.split("/")[0];
    if (!validCategories.includes(name)) name = "";

    return (
      <nav aria-label="Category" className="fixed top-20 w-[430px] p-3">
        <ul className="flex flex-col items-center justify-center gap-2 p-1 py-3 text-3xl font-semibold">
          <Link to={"/shop"}>
            <li>
              <h3>{name}</h3>
            </li>
          </Link>
        </ul>
      </nav>
    );
  },
}));

describe("Home", () => {
  beforeEach(() => {
    const routes = [
      { path: "/", element: <Navigate to="home" replace /> },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "shop?/:name",
        element: <Shop />,
      },
    ];

    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);
  });

  it('directs to the shop panel on the "All" category when clicking the "Shop Now" btn', async () => {
    const user = userEvent.setup();

    const shopNowBtn = screen.getByRole("button", { name: /shop now/i });
    expect(shopNowBtn).toBeInTheDocument();

    await user.click(shopNowBtn);
    expect(screen.getByRole("heading", { name: "" })).toBeInTheDocument();
  });

  describe("directs to the shop panel on one of the categories clicking a category btn", () => {
    it("works for electronics", async () => {
      const user = userEvent.setup();

      const shopNowBtn = screen.getByRole("button", { name: /electronics/i });
      expect(shopNowBtn).toBeInTheDocument();

      await user.click(shopNowBtn);
      expect(
        screen.getByRole("heading", { name: "electronics" }),
      ).toBeInTheDocument();
    });

    it("works for mens-clothings", async () => {
      const user = userEvent.setup();

      const shopNowBtn = screen.getByRole("button", { name: /clothes/i });
      expect(shopNowBtn).toBeInTheDocument();

      await user.click(shopNowBtn);
      expect(
        screen.getByRole("heading", { name: "mens-clothing" }),
      ).toBeInTheDocument();
    });
  });
});
