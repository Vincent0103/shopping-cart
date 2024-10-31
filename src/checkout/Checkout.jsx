import React, { useContext } from "react";
import { calculateTotal } from "../utils";
import { AppContext } from "../AppContext";
import PropTypes from "prop-types";

const ProductItem = ({ imgSrc, title, price, quantity }) => {
  const P = ({ text }) => <p className="text-xl font-medium">{text}</p>;

  return (
    <>
      <div className="flex h-full items-center justify-center gap-10 justify-self-start">
        <img className="max-h-36" src={imgSrc} alt={`Product: ${title}`} />
        <h3 className="font-medium">{title}</h3>
      </div>
      <P text={`${price}$`} />
      <P text={quantity} />
      <P text={`${price * quantity}$`} />
    </>
  );
};

const GridContainer = ({ customStyling, children }) => (
  <div
    className={`${customStyling} grid w-full grid-cols-[4fr_1fr_1fr_1fr] items-center justify-items-center`}
  >
    {children}
  </div>
);

const Checkout = () => {
  const { cart } = useContext(AppContext);
  console.log(cart);

  return (
    <section className="relative top-20 flex size-full flex-col items-center justify-center gap-20 font-jost">
      <h1 className="mt-20 text-8xl font-extrabold">Your Cart</h1>
      <div
        className="shadow-extraxl-purple h-full w-11/12 rounded-[60px]
      border-[28px] border-accent-400"
      >
        <div className="flex flex-col items-center justify-center p-14 text-3xl font-bold">
          <GridContainer customStyling={"mb-8"}>
            <h2 className="justify-self-start">Products</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Total</h2>
          </GridContainer>
          <hr className="col-span-4 w-full border-2 border-secondary-200" />
          {cart.map(({ id, imgSrc, title, price, productAmount }) => (
            <React.Fragment key={id}>
              <GridContainer customStyling={"my-6"}>
                <ProductItem
                  imgSrc={imgSrc}
                  title={title}
                  price={price}
                  quantity={productAmount}
                />
              </GridContainer>
              <hr className="col-span-4 w-full border-secondary-400" />
            </React.Fragment>
          ))}
          <p className="mt-20 text-5xl text-accent-200">
            Overall total:{" "}
            {calculateTotal(
              cart.map(({ price, productAmount }) => [price, productAmount]),
            )}
            $
          </p>
        </div>
      </div>
      <button
        type="button"
        className="mb-20 rounded-md bg-accent-500 px-6 py-2 text-4xl font-bold"
      >
        Confirm and Pay
      </button>
    </section>
  );
};

ProductItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

GridContainer.propTypes = {
  customStyling: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Checkout;
