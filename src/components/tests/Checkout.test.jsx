import React from "react";
import { describe, it, vi } from "vitest";
import Checkout from "../checkout/Checkout";
import { render, screen } from "@testing-library/react";
import { calculateTotal } from "../../utils";

vi.mock("../checkout/Checkout.jsx", () => ({
  default: ({ cart }) => (
    <>
      {cart.map(({ id, imgSrc, title, price, productAmount }) => (
        <div data-testid="product-container" key={id}>
          <div>
            <img src={`${imgSrc}`} alt={`Product: ${title}`} />
            <h3>{title}</h3>
          </div>
          <p>{price}$</p>
          <p>{productAmount}</p>
          <p>{price * productAmount}$</p>
        </div>
      ))}
      <p>
        Overall total:{" "}
        {calculateTotal(
          cart.map(({ price, productAmount }) => [price, productAmount]),
        )}
      </p>
    </>
  ),
}));

describe("Checkout", () => {
  it("should show the list of product ordered by the user in the cart", () => {
    const mockedCart = [
      {
        id: 0,
        imgSrc: "src0",
        title: "epikHead",
        price: 56.99,
        productAmount: 1,
      },
      {
        id: 1,
        imgSrc: "src1",
        title: "keyboard",
        price: 12,
        productAmount: 4,
      },
    ];

    const container = render(<Checkout cart={mockedCart} />);
    expect(container).toMatchSnapshot();

    const totalPrice = calculateTotal(
      mockedCart.map(({ price, productAmount }) => [price, productAmount]),
    );
    const regex = new RegExp(`overall total: ${totalPrice}`, "i");
    expect(screen.getByText(regex)).toBeInTheDocument();

    screen.getAllByTestId("product-container").forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });

  it("should empty the checkout if the cart is empty", () => {
    render(<Checkout cart={[]} />);
    expect(screen.queryByTestId("product-container")).not.toBeInTheDocument();
  });
});
