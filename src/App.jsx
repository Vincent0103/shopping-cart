import BgWallpaperJPG from "./assets/bgHomepage.jpg";
import { ShoppingCart } from "lucide-react";

function App() {
  return (
    <div className="relative flex justify-center items-center h-screen w-screen">
      <nav className="fixed inset-0 h-16 w-full bg-[#1C1918]/60 flex justify-between items-center px-44 z-10 shadow-2xl">
        <div className="bg-black w-24 h-12 flex justify-center items-center">
          <p className="font-black text-4xl">soz.</p>
        </div>
        <ul className="flex justify-center items-center font-semibold gap-28 text-xl">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Shop</li>
          <li className="cursor-pointer">
            <ShoppingCart size={24} />
          </li>
        </ul>
      </nav>
      <div className="absolute inset-0 h-screen w-screen -z-10">
        <img className="size-full object-cover" src={BgWallpaperJPG} alt="" />
      </div>
      <div className="w-full flex items-center ml-20 text-nowrap">
        <h1 className="text-[6vw] flex flex-col leading-[1.1] font-black tracking-wide">
          <span>
            <span className="font-jost stroke-sm text-[#171a1d]">Seamless</span>{" "}
            Tech,
          </span>
          <span>
            <span className="font-harmond text-shadow-white">Pure</span>{" "}
            Experiences.
          </span>
        </h1>
        <button
          className="absolute top-[85%] left-3/4 flex justify-center items-center group"
          type="button"
        >
          <p className="text-4xl font-bold z-0 -skew-x-[25deg]
        skew-y-[5deg] w-56 h-16 bg-[#302724] border-2 border-[#261F1D] rounded-md
        flex justify-center items-center transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5">
            Shop Now
          </p>
          <div className="absolute size-full bg-[#302724]/60 top-1 left-1 rounded-md -z-[1]
          -skew-x-[25deg] skew-y-[5deg] transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"></div>
          <div className="absolute size-full bg-[#302724]/30 top-2 left-2 rounded-md -z-[1]
          -skew-x-[25deg] skew-y-[5deg]"></div>
        </button>
      </div>
    </div>
  );
}

export default App;
