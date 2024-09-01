import { Link, useLocation } from "react-router-dom";
import BgPurpleNoise from "../assets/purpleNoise.jpg";
import { toTitle } from "../utils.js";
import { Minus, Plus, ShoppingCart } from "lucide-react";

const Product = () => {
  const location = useLocation();
  const { imgSrc, alt, title, desc, price, productCategory } = location.state;

  console.log(productCategory);
  return (
    <div
      style={{ backgroundImage: `url(${BgPurpleNoise})` }}
      className="flex h-screen min-h-screen w-full items-center justify-center font-extrabold text-text-50"
    >
      <section className="flex h-3/5 w-full max-w-screen-2xl flex-col items-center justify-center gap-10">
        <nav className="self-start" aria-label="Previous links">
          <ul className="flex text-lg font-light text-zinc-500">
            <Link to={`/shop/${productCategory}`}>
              <li className="underline">{toTitle(productCategory) || "All"}</li>
            </Link>
            <p>&nbsp;&gt;&nbsp;</p>
            <li className="max-w-60 overflow-hidden text-ellipsis text-nowrap">
              {title}
            </li>
          </ul>
        </nav>
        <div className="flex size-full gap-20">
          <div className="flex h-full w-1/2 justify-end">
            <img className="h-full object-cover rounded-sm" src={imgSrc} alt={alt} />
          </div>
          <div className="flex w-1/2 flex-col gap-6">
            <div className="flex flex-col items-start gap-3">
              <h1 className="w-full h-[66px] overflow-hidden text-ellipsis text-nowrap text-6xl">
                {title}
              </h1>
              <h2 className="text-3xl font-semibold">{price}</h2>
            </div>
            <hr className="bg-white" />
            <div>
              <p className="text-2xl font-normal leading-normal">{desc}</p>
            </div>
            <div className="flex items-center gap-2">
              <Plus size={40} color="#ececf8" />
              <input
                className="flex size-12 items-center justify-center
              rounded-full border-2 border-accent-500 bg-background-100
              text-center text-2xl text-background-900"
                type="text"
                name=""
                id=""
                value={1}
              />
              <Minus size={40} color="#ececf8" />
            </div>
            <button
              className="h-14 rounded-md bg-primary-500 px-4
              flex items-center gap-4 text-2xl font-medium
              shadow-accent-btn shadow-primary-500 transition-shadow
              duration-100"
              type="submit"
            >
              <ShoppingCart size={32} />
              <p>Add to Cart</p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Product.propTypes = {
//   imgSrc: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
// };

export default Product;
