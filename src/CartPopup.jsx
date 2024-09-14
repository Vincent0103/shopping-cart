import { useContext } from "react";
import { AppContext } from "./AppContext";

const ProductItem = ({ imgSrc, alt, title, productAmount }) => {
  return (
    <div className="flex h-12 w-full items-center justify-center rounded-md border-2 border-secondary-950/20 bg-secondary-950/40">
      <div className="flex size-full items-center gap-3 border-r-2 border-secondary-950/20">
        <img className="h-full" src={imgSrc} alt={alt} />
        <h3 className="text-sm">{title}</h3>
      </div>
      <div className="flex size-14 items-center justify-center">
        <h3 className="text-sm font-semibold">x{productAmount}</h3>
      </div>
    </div>
  );
};

const CartPopup = () => {
  const { cart } = useContext(AppContext);
  console.log(cart);

  return (
    <section
      className="bg-gradient-radial shadow-extraxl-still fixed right-0 top-20 z-10 m-5
    w-[350px] rounded-xl border-2 border-indigo-800"
    >
      <div className="-mb-10 flex flex-col items-center justify-end gap-5 p-4">
        <h2 className="text-2xl font-bold">{cart.length} Products</h2>
        <div className="z-[1] flex h-44 w-full flex-col gap-3 overflow-y-auto">
          {cart.map((product, index) => (
            <ProductItem key={index} {...product} />
          ))}
        </div>
      </div>
      <div
        className="relative z-0 flex h-28 w-full items-end justify-center
      rounded-xl bg-gradient-to-t from-secondary-200/50 to-transparent p-3"
      >
        <h4 className="cursor-pointer text-lg font-extrabold text-text-900 hover:underline">
          CHECKOUT
        </h4>
      </div>
    </section>
  );
};

export default CartPopup;
