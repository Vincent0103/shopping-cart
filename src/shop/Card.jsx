import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ShoppingCart } from "lucide-react";
import { toUrlSafe } from "../utils";

const Card = ({ imgSrc, alt, title, desc, price }) => {
  return (
    <Link
      to={`/product/${toUrlSafe(title)}`}
      state={{ imgSrc, alt, title, desc, price }}
    >
      <div
        className="group relative flex h-96 w-72 cursor-pointer flex-col
      items-center justify-center overflow-hidden rounded-lg border-2
      border-background-200 bg-background-900/80"
      >
        <div
          className="flex h-72 max-h-72 w-full items-center justify-center
        rounded-t-md bg-gradient-to-b from-background-400 to-background-800"
        >
          <div className="h-72">
            <img
              className="h-full rounded-t-md object-cover"
              src={imgSrc}
              alt={alt}
            />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 h-72 max-h-72 w-full bg-black opacity-0 group-hover:opacity-50"></div>
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
    </Link>
  );
};

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Card;
