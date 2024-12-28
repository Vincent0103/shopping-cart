import { ShoppingCart, Menu } from "lucide-react";
import BrandLogo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import CartPopup from "./CartPopup";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import PropTypes from "prop-types";

const Navbar = ({ displayedPageName }) => {
  const { setPopupCartState } = useContext(AppContext);

  const getTextColorClasses = (stringTest) =>
    displayedPageName.includes(stringTest)
      ? "text-white"
      : "text-gray-500 hover:text-white";

  return (
    <>
      <nav
        id="main-navbar"
        aria-label="Main"
        className="fixed inset-0 z-10 flex h-20 w-full items-center justify-between
      border-b-2 border-b-background-700/40 bg-background-950/60 px-44 shadow-2xl backdrop-blur-2xl max-lg:px-20
        max-sm:hidden"
      >
        <Link to={"/home"}>
          <div className="flex h-12 w-24 items-center justify-center bg-accent-400 p-2">
            <img src={BrandLogo} alt="Logo of soz." />
          </div>
        </Link>
        <ul className="flex items-center justify-center gap-28 text-xl font-semibold max-lg:gap-20">
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
          <li
            onClick={() => setPopupCartState((prev) => !prev)}
            className="cursor-pointer"
          >
            <ShoppingCart size={24} />
          </li>
        </ul>
      </nav>
      <nav className="fixed inset-0 z-10 flex h-12 w-full items-center px-3 sm:hidden">
        <div className="mt-3 cursor-pointer rounded-xl bg-black/80 p-1.5 backdrop-blur-lg">
          <Menu size={28} />
        </div>
      </nav>
      <CartPopup />
    </>
  );
};

Navbar.propTypes = {
  displayedPageName: PropTypes.string.isRequired,
};

export default Navbar;
