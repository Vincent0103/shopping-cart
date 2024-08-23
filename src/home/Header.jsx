import BgWallpaperJPG from "../assets/bgHomepage.jpg";
import BgWallpaperWEBP from "../assets/bgHomepage.webp";
import AbstractWallpaper from "../assets/abstractWallpaper.jpg";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="relative flex h-screen w-screen items-center justify-center">
    <div className="absolute inset-0 -z-10 h-screen w-screen">
      <picture>
        <source srcSet={BgWallpaperWEBP} type="image/webp" />
        <img className="size-full object-cover" src={BgWallpaperJPG} alt="" />
      </picture>
    </div>
    <div className="mx-20 flex w-full items-center text-nowrap">
      <h1 className="flex flex-col text-[6vw] font-black leading-[1.1] tracking-wide">
        <span>
          <span className="stroke-sm font-jost text-[#171a1d]">Seamless</span>{" "}
          Tech,
        </span>
        <span>
          <span className="text-shadow-white font-harmond">Pure</span>{" "}
          Experiences.
        </span>
      </h1>
      <Link to={"/shop"}>
        <button
          className="group absolute left-3/4 top-[85%]
                flex items-center justify-center max-lg:left-2/3"
          type="button"
        >
          <p
            style={{
              backgroundImage: `url("${AbstractWallpaper}")`,
            }}
            className="z-0 flex h-16 w-56 -skew-x-[25deg] skew-y-[5deg]
              items-center justify-center rounded-md border-2 border-[#192228] bg-[#2b3a43] text-4xl font-bold
              transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5 max-lg:h-10 max-lg:w-36 max-lg:text-2xl
              max-sm:h-6 max-sm:w-24 max-sm:text-base
              max-sm:group-hover:translate-x-1 max-sm:group-hover:translate-y-1"
          >
            Shop Now
          </p>
          <div
            className="absolute left-1 top-1 -z-[1] size-full -skew-x-[25deg] skew-y-[5deg]
                  rounded-md bg-[#0f1010]/60 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 max-sm:left-0.5
                  max-sm:top-0.5"
          ></div>
          <div
            className="absolute left-2 top-2 -z-[1] size-full -skew-x-[25deg] skew-y-[5deg]
                  rounded-md bg-[#0f1010]/30 max-sm:left-1 max-sm:top-1"
          ></div>
        </button>
      </Link>
    </div>
  </header>
);

export default Header;
