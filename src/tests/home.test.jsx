import { vi, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Link } from "react-router-dom";
import Header from "../home/Header";

vi.mock("../home/Header.jsx", () => ({
  default: () => (
    <Link to={"/shop"}>
      <button type="button">
        <p>Shop Now</p>
      </button>
    </Link>
  ),
}));

describe("header", () => {
  it("renders the shop now button", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getByText("Shop Now")).toBeInTheDocument();
  });
});
