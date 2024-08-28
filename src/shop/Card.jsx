import { ShoppingCart } from "lucide-react";

const Card = ({ imgSrc, alt, title, price, imgSize = "h-full" }) => {
  return (
    <div className="flex h-96 w-72 flex-col items-center justify-center overflow-hidden rounded-lg border-2 border-background-200 bg-background-900/80">
      <div className="flex h-72 max-h-72 w-full items-center justify-center rounded-t-md bg-gradient-to-b from-background-400 to-background-800">
        <div className="h-72">
          <img
            className={`${imgSize} rounded-t-md object-cover`}
            src={imgSrc}
            alt={alt}
          />
        </div>
      </div>
      <div className="grid size-full grid-cols-2 grid-rows-2 gap-3 overflow-hidden border-t-2 border-t-background-200 px-4 py-2">
        <h5 className="col-start-1 col-end-3 self-end overflow-hidden text-ellipsis text-nowrap text-lg">
          {title}
        </h5>
        <p className="h-min text-sm">{price}</p>
        <div className="flex size-full items-start justify-end">
          <button type="button">
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
