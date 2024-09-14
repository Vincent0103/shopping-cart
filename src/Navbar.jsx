import { ShoppingCart } from "lucide-react";
import BrandLogo from "./assets/logo.png";
import { Link } from "react-router-dom";
import CartPopup from "./CartPopup";
import { useState } from "react";

const Navbar = ({ displayedPageName }) => {
  const [doPopupCart, setDoPopupCart] = useState(false);

  const handleDoPopupCart = () => {
    setDoPopupCart((prev) => !prev);
  };

  const getTextColorClasses = (stringTest) =>
    displayedPageName.includes(stringTest)
      ? "text-white"
      : "text-gray-500 hover:text-white";

  return (
    <>
      <nav
        aria-label="Main"
        className="fixed inset-0 z-10 flex h-20 w-full items-center justify-between
      border-b-2 border-b-background-700/40 bg-background-950/60 px-44 shadow-2xl backdrop-blur-2xl"
      >
        <Link to={"/home"}>
          <div className="flex h-12 w-24 items-center justify-center bg-accent-400 p-2">
            <img src={BrandLogo} alt="Logo of soz." />
          </div>
        </Link>
        <ul className="flex items-center justify-center gap-28 text-xl font-semibold">
          <Link to={"/home"}>
            <li
              className={`cursor-pointer transition-colors ${getTextColorClasses("home")}`}
            >
              Home
            </li>
          </Link>
          <Link to="/shop">
            <li
              className={`cursor-pointer transition-colors ${getTextColorClasses("shop")}`}
            >
              Shop
            </li>
          </Link>
          <li onClick={handleDoPopupCart} className="cursor-pointer">
            <ShoppingCart size={24} />
          </li>
        </ul>
      </nav>
      {doPopupCart && <CartPopup />}
    </>
  );
};

export default Navbar;
