import { ShoppingCart } from "lucide-react";

const Card = ({ imgSrc, alt, title, price, imgSize = "size-full" }) => {
  return (
    <div className="flex h-96 w-72 flex-col items-center justify-center rounded-lg border-2 border-background-200 bg-background-900/80">
      <div className="size-full rounded-t-md bg-gradient-to-b from-background-400 to-background-800">
        <img
          className={`${imgSize} object-cover object-center`}
          src={imgSrc}
          alt={alt}
        />
      </div>
      <div className="grid h-24 w-full grid-cols-2 grid-rows-2 border-t-2 border-t-background-200 px-5 pt-3">
        <h5 className="col-start-1 col-end-3 self-end text-xl">{title}</h5>
        <p className="h-min">{price}</p>
        <div className="size-full flex justify-end items-start">
          <button
            type="button"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
