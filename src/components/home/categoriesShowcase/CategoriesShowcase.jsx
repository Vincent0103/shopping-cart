import Product from "./Product";
import HeadphonesPNG from "../../../assets/headphones.png";
import HeadphonesWEBP from "../../../assets/headphones.webp";
import RingsPNG from "../../../assets/rings.png";
import RingsWEBP from "../../../assets/rings.webp";
import CarharttPNG from "../../../assets/carhartt.png";
import CarharttWEBP from "../../../assets/carhartt.webp";
import abstractWallpaper from "../../../assets/abstractWallpaper.jpg";
import { Link } from "react-router-dom";

const CategoriesShowcase = () => (
  <section className="relative w-full bg-background-900">
    <div
      style={{
        backgroundImage: `url(${abstractWallpaper})`,
        backgroundSize: "cover",
      }}
      className="absolute inset-0 size-full opacity-40"
    ></div>
    <div
      className="flex h-28
      w-full items-center justify-center bg-primary-200/50 px-20 text-text-900 shadow-lg backdrop-blur-sm
      max-2xl:h-20 max-lg:h-12"
    >
      <div className="flex w-full max-w-screen-2xl items-center">
        <h2 className="text-5xl font-extrabold max-2xl:text-3xl max-lg:text-xl">
          We sell bunch of...
        </h2>
      </div>
    </div>
    <div className={`flex flex-col items-center justify-center`}>
      <div className="flex w-full max-w-screen-2xl flex-col items-center justify-center">
        <Product
          imgSrcs={[HeadphonesWEBP, HeadphonesPNG]}
          text={"ELECTRONICS"}
          alt={"Electronics"}
          url={"/shop/electronics"}
          additionalImgStyles={"absolute -top-full left-[38%] size-[40%]"}
        />
        <Product
          imgSrcs={[RingsWEBP, RingsPNG]}
          text={"JEWELRY"}
          alt={"Jewelry"}
          url={"/shop/jewelry"}
          imgDirection={"left"}
          additionalImgStyles={
            "relative size-[25%] -left-16 max-xl:size-52 max-xl:-left-10 max-md:size-36 max-md:-left-6 max-sm:size-28 max-sm:-left-2 flex justify-center items-center"
          }
        />
        <Product
          imgSrcs={[CarharttWEBP, CarharttPNG]}
          text={"CLOTHES"}
          alt={"Clothes"}
          url={"/shop/mens-clothing"}
          imgDirection={"right"}
          additionalImgStyles={
            "relative size-[25%] -right-10 max-xl:size-52 max-md:size-36 max-md:-right-2 max-sm:size-28 flex justify-center items-center"
          }
          additionalContainerStyles={"mt-0"}
        />
      </div>
    </div>
    <div
      className="flex h-28
        w-full items-center justify-center bg-background-950/50 px-20
        shadow-lg backdrop-blur-sm
        max-2xl:h-20"
    >
      <div className="flex w-full max-w-screen-2xl items-center justify-center">
        <Link to="/shop">
          <button
            type="button"
            className="group rounded-xl border-2 border-accent-600 bg-accent-400 px-6 py-2 shadow-md"
          >
            <h2 className="text-3xl font-semibold text-white transition-transform group-hover:scale-[102%] max-2xl:text-xl max-lg:text-lg">
              Shop Now
            </h2>
          </button>
        </Link>
      </div>
    </div>
  </section>
);

export default CategoriesShowcase;
