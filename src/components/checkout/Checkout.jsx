import React, { useContext } from "react";
import { calculateTotal } from "../../utils";
import { AppContext } from "../../AppContext";
import PropTypes from "prop-types";

const ProductItem = ({ imgSrc, title, price, quantity, deviceType }) => {
  const P = ({ text }) => <p className="text-xl font-medium">{text}</p>;

  return deviceType === "desktop" ? (
    <>
      <div className="flex size-full items-center justify-center gap-10 justify-self-start">
        <img
          className="max-h-36 w-1/4 object-contain"
          src={imgSrc}
          alt={`Product: ${title}`}
        />
        <h3 className="w-3/4 text-xl font-medium">{title}</h3>
      </div>
      <P text={`${price}$`} />
      <P text={quantity} />
      <P text={`${price * quantity}$`} />
    </>
  ) : (
    <div className="flex items-center gap-4">
      <img
        className="max-h-28 w-2/5 object-contain"
        src={imgSrc}
        alt={`Product: ${title}`}
      />
      <div className="font-regular flex w-3/5 flex-col gap-0.5">
        <h3 className="text-xl leading-[1.15]">{title}</h3>
        <p className="text-sm text-zinc-500">
          {price}$ x {quantity}
        </p>
        <p className="text-xl font-medium text-amber-400">
          <span className="text-lg font-light text-white">Total: </span>
          {price * quantity}$
        </p>
      </div>
    </div>
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

  return (
    <section className="relative top-20 flex size-full flex-col items-center justify-center gap-10 font-jost">
      <h1 className="mt-16 text-8xl font-extrabold max-md:text-5xl">
        Your Cart
      </h1>
      <div
        className="shadow-extraxl-purple h-full w-11/12 rounded-[60px]
      border-[28px] border-accent-400 max-lg:hidden"
      >
        <div className="flex flex-col items-center justify-center p-10 text-3xl font-bold">
          <GridContainer customStyling={"mb-8"}>
            <h2 className="justify-self-start">Products</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Total</h2>
          </GridContainer>
          <hr className="col-span-4 w-full border-2 border-secondary-200" />
          {cart.map(({ id, imgSrc, title, price, productAmount }) => (
            <React.Fragment key={id}>
              <GridContainer key={id} customStyling={"my-6"}>
                <ProductItem
                  imgSrc={imgSrc}
                  title={title}
                  price={price}
                  quantity={productAmount}
                  deviceType={"desktop"}
                />
              </GridContainer>
              <hr className="col-span-4 w-full border-secondary-400" />
            </React.Fragment>
          ))}
          <p className="mt-20 text-4xl text-accent-200">
            Overall total:{" "}
            {calculateTotal(
              cart.map(({ price, productAmount }) => [price, productAmount]),
            )}
            $
          </p>
        </div>
      </div>
      <div
        className="shadow-extraxl-purple mx-3 flex h-full flex-col
      items-center justify-center rounded-[40px] border-[10px] border-accent-400 lg:hidden"
      >
        <div>
          {cart.map(({ id, imgSrc, title, price, productAmount }) => (
            <div className="m-4 flex flex-col gap-4" key={id}>
              <ProductItem
                imgSrc={imgSrc}
                title={title}
                price={price}
                quantity={productAmount}
                deviceType={"mobile"}
              />
              <hr className="col-span-4 w-full border-secondary-400" />
            </div>
          ))}
        </div>
        <p className="mb-4 text-2xl font-bold">
          Overall total:{" "}
          <span className="text-amber-400">
            {calculateTotal(
              cart.map(({ price, productAmount }) => [price, productAmount]),
            )}
            $
          </span>
        </p>
      </div>
      <button
        type="button"
        className="mb-10 rounded-md bg-accent-500 px-3 py-1 text-xl font-bold"
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
};

export default Checkout;
