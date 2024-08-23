import { ShoppingCart } from "lucide-react";
import BrandLogo from "./assets/logo.png";
import CategoriesShowcase from "./categoriesShowcase/CategoriesShowcase";
import Header from "./Header";

function App() {
  return (
    <>
      <nav className="fixed inset-0 z-10 flex h-16 w-full items-center justify-between bg-[#1C1918]/60 px-44 shadow-2xl">
        <div className="flex h-12 w-24 items-center justify-center bg-[#DFB095] p-2">
          <img src={BrandLogo} alt="Logo of soz." />
        </div>
        <ul className="flex items-center justify-center gap-28 text-xl font-semibold">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Shop</li>
          <li className="cursor-pointer">
            <ShoppingCart size={24} />
          </li>
        </ul>
      </nav>
      <main className="flex flex-col items-center justify-center">
        <Header />
        <CategoriesShowcase />
      </main>
    </>
  );
}

export default App;
