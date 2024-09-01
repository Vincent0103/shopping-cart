import { Link, useLocation } from "react-router-dom";
import BgPurpleNoise from "../assets/purpleNoise.jpg";

const Product = () => {
  const location = useLocation();
  const { imgSrc, alt, title, desc, price, productCategory } = location.state;

  return (
    <div
      style={{ backgroundImage: `url(${BgPurpleNoise})` }}
      className="min-h-screen w-full text-center text-9xl font-extrabold text-text-50"
    >
      <section className="h-full max-w-screen-2xl flex flex-col items-center">
        <nav aria-label="Previous links">
          <ul>
            <Link to={`/shop/${productCategory}`}>
              <li></li>
            </Link>
          </ul>
        </nav>
      </section>
    </div>
  );
};

// Product.propTypes = {
//   imgSrc: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
// };

export default Product;
