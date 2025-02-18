import { useContext, useEffect } from "react";
import { AppContext } from "../../AppContext";
import { calculateTotal, priceToNumber } from "../../utils";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductItem = ({ imgSrc, title, price, productAmount }) => {
  return (
    <div
      className="flex h-12 w-full items-center justify-center rounded-md
    border-2 border-secondary-950/20 bg-secondary-950/40"
    >
      <div
        className="flex size-5/6 items-center gap-3 border-r-2
      border-secondary-950/20 p-3"
      >
        <div className="flex size-9 items-center justify-center">
          <img
            className="size-full object-contain"
            src={imgSrc}
            alt={`Product: ${title}`}
          />
        </div>
        <div className="flex w-full flex-col justify-center overflow-hidden">
          <h3 className="overflow-hidden text-ellipsis text-nowrap text-sm">
            {title}
          </h3>
          <p className=" overflow-hidden text-ellipsis text-nowrap text-[10px] text-primary-200">
            {price}$
          </p>
        </div>
      </div>
      <div className="flex size-1/6 items-center justify-center">
        <h3 className="text-sm font-semibold">x{productAmount}</h3>
      </div>
    </div>
  );
};

const CartPopup = () => {
  const { cart, popupCartState, setPopupCartState } = useContext(AppContext);

  const products = cart.map(({ price, productAmount }) => [
    priceToNumber(price),
    productAmount,
  ]);

  useEffect(() => {
    const handleNotCartPopupClick = (e) => {
      const hasParentWithId = e.target.closest(
        "#cart-popup, #add-to-cart-btn, #main-navbar",
      );

      if (
        (popupCartState && !hasParentWithId) ||
        e.target.closest("#checkout-link")
      )
        setPopupCartState(false);
    };

    window.addEventListener("click", handleNotCartPopupClick);

    return () => window.removeEventListener("click", handleNotCartPopupClick);
  }, [popupCartState]);

  const total = calculateTotal(products);

  const transitioningClasses = popupCartState
    ? "translate-z-idle opacity-100 pointer-events-auto"
    : "translate-z-back opacity-0 pointer-events-none";

  return (
    <section
      id="cart-popup"
      className={`bg-gradient-radial shadow-extraxl-black transition-slide max-md:top-18 fixed right-0 top-20
    z-10 m-5 w-[350px] rounded-xl border-2 border-indigo-800 max-md:w-64 max-sm:top-14 ${transitioningClasses}`}
    >
      <div className="-mb-10 flex flex-col items-center justify-end gap-5 p-4 max-md:mb-2 max-md:gap-2 max-md:p-3">
        <h2 className="text-2xl font-bold">{cart.length} Products</h2>
        <div className="z-[1] flex h-44 w-full flex-col gap-3 overflow-y-auto max-md:h-28 max-md:gap-1.5">
          {cart.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </div>
      </div>
      <div
        className="relative z-0 flex h-40 w-full flex-col justify-end rounded-xl
        bg-gradient-to-t from-secondary-200/50 to-transparent max-md:h-20"
      >
        <div className="border-y-2 border-secondary-700 p-3 font-medium max-md:p-2">
          <p>Total: {total}$</p>
        </div>
        <Link
          to={"/checkout"}
          state={{ total }}
          id="checkout-link"
          className="text-text-900 hover:underline"
        >
          <h4 className="mx-3 mb-3 pt-3 text-lg font-extrabold max-md:mx-2 max-md:mb-2 max-md:pt-2">
            CHECKOUT
          </h4>
        </Link>
      </div>
    </section>
  );
};

ProductItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  productAmount: PropTypes.number.isRequired,
};

export default CartPopup;
