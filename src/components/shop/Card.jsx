import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ShoppingCart } from "lucide-react";

const Card = ({ id, imgSrc, title, price }) => (
  <Link to={`/product/${id}`}>
    <div
      className="group relative flex h-96 w-72 cursor-pointer flex-col items-center justify-center
      overflow-hidden rounded-lg border-2 border-background-200 bg-background-900/80
      max-lg:h-60 max-lg:w-48 max-sm:h-32 max-sm:w-24 max-sm:border-none"
    >
      <div
        className="flex h-72 max-h-72 w-full items-center justify-center rounded-t-md bg-gradient-to-b
        from-background-400 to-background-800 max-lg:h-48 max-lg:max-h-48
        max-sm:h-24 max-sm:max-h-24"
      >
        <div className="h-72 max-lg:h-48 max-sm:h-20">
          <img
            className="h-full rounded-t-md object-cover"
            src={imgSrc}
            alt={`Product: ${title}`}
          />
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-0 h-72 
        max-h-72 w-full bg-black opacity-0 group-hover:opacity-50
        max-lg:h-48 max-lg:max-h-48 max-sm:h-20 max-sm:max-h-20"
      ></div>
      <div
        className="grid size-full grid-cols-2 grid-rows-2 gap-3
        overflow-hidden border-t-2 border-t-background-200 px-4
        py-2 max-lg:gap-1.5 max-sm:gap-0.5"
      >
        <h5
          className="col-start-1 col-end-3 self-end overflow-hidden 
          text-ellipsis text-nowrap text-lg max-lg:text-sm"
        >
          {title}
        </h5>
        <p className="h-min text-sm">{price}</p>
        <div className="flex size-full items-start justify-end max-sm:hidden">
          <button type="button">
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  </Link>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Card;
