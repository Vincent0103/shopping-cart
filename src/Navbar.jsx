import { ShoppingCart } from "lucide-react";
import BrandLogo from "./assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav
    className="fixed inset-0 z-10 flex h-20 w-full items-center justify-between
  border-b-2 border-b-slate-600/40 bg-black/60 px-44 shadow-2xl backdrop-blur-2xl"
  >
    <div className="flex h-12 w-24 items-center justify-center bg-[#DFB095] p-2">
      <img src={BrandLogo} alt="Logo of soz." />
    </div>
    <ul className="flex items-center justify-center gap-28 text-xl font-semibold">
      <Link to={"/home"}>
        <li className="cursor-pointer">Home</li>
      </Link>
      <Link to="/shop">
        <li className="cursor-pointer">Shop</li>
      </Link>
      <li className="cursor-pointer">
        <ShoppingCart size={24} />
      </li>
    </ul>
  </nav>
);

export default Navbar;
