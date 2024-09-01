import { useLocation } from "react-router-dom";
import BgPurpleNoise from "../assets/purpleNoise.jpg";

const Product = () => {
  const location = useLocation();
  const { imgSrc, alt, title, desc, price } = location.state;

  return (
    <div
      style={{ backgroundImage: `url(${BgPurpleNoise})` }}
      className="flex flex-col h-screen w-screen items-center justify-center
      text-center text-9xl font-extrabold text-text-50"
    >
      
    </div>
  );
};

// Product.propTypes = {
//   imgSrc: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
// };

export default Product;
