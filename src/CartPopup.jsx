import CarharttPNG from "./assets/carhartt.png";
import RingsPNG from "./assets/rings.png";
import HeadphonesPNG from "./assets/headphones.png";

const ProductItem = ({ imgSrc, alt, title, productAmount }) => {
  return (
    <div className="flex h-12 w-full items-center justify-center rounded-md border-2 border-secondary-950/20 bg-secondary-950/40">
      <div className="flex size-full items-center gap-3 border-r-2 border-secondary-950/20">
        <img className="h-full" src={imgSrc} alt={alt} />
        <h3 className="text-sm">{title}</h3>
      </div>
      <div className="flex size-14 items-center justify-center">
        <h3 className="font-semibold text-sm">x{productAmount}</h3>
      </div>
    </div>
  );
};

const CartPopup = () => {
  return (
    <section
      className="bg-gradient-radial fixed right-0 top-20 z-10 m-5 w-[350px]
    rounded-xl shadow-extraxl-still border-indigo-800 border-2"
    >
      <div className="-mb-10 flex flex-col items-center justify-end gap-5 p-4">
        <h2 className="text-2xl font-bold">3 Products</h2>
        <div className="flex w-full flex-col gap-3 z-[1] h-44 overflow-y-auto">
          <ProductItem title={"Carhartt Shirt"} productAmount={3} imgSrc={CarharttPNG} />
          <ProductItem title={"Lovely Rings"} productAmount={1} imgSrc={RingsPNG} />
          <ProductItem title={"Bombastic JBL"} productAmount={5} imgSrc={HeadphonesPNG} />
        </div>
      </div>
      <div
        className="relative flex h-28 w-full items-end justify-center rounded-xl
      bg-gradient-to-t from-secondary-200/50 to-transparent p-3 z-0"
      >
        <h4 className="text-lg font-extrabold text-text-900 hover:underline cursor-pointer">CHECKOUT</h4>
      </div>
    </section>
  );
};

export default CartPopup;
