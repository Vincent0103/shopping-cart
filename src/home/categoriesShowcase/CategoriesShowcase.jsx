import Product from "./Product";
import HeadphonesPNG from "../../assets/headphones.png";
import HeadphonesWEBP from "../../assets/headphones.webp";
import LaptopPNG from "../../assets/laptop.png";
import LaptopWEBP from "../../assets/laptop.webp";
import SpeakerPNG from "../../assets/speaker.png";
import SpeakerWEBP from "../../assets/speaker.webp";
import abstractWallpaper from "../../assets/abstractWallpaper.jpg";
import { Link } from "react-router-dom";

const CategoriesShowcase = () => (
  <section className="relative w-full bg-[#161f24]">
    <div
      style={{
        backgroundImage: `url(${abstractWallpaper})`,
        backgroundSize: "cover",
      }}
      className="absolute inset-0 size-full opacity-40"
    ></div>
    <div
      className="flex h-28
    w-full items-center justify-center bg-[#81A7CA]/50 px-20 text-black shadow-lg backdrop-blur-sm
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
          text={"HEADPHONES"}
          alt={"Headphones"}
          additionalImgStyles={"absolute -top-full left-[45%] size-[40%]"}
        />
        <Product
          imgSrcs={[LaptopWEBP, LaptopPNG]}
          text={"LAPTOPS"}
          alt={"Laptop"}
          imgDirection={"left"}
          additionalImgStyles={
            "relative size-[25%] max-xl:size-52 max-md:size-36 max-sm:size-28 flex justify-center items-center"
          }
        />
        <Product
          imgSrcs={[SpeakerWEBP, SpeakerPNG]}
          text={"SPEAKERS"}
          alt={"Speakers"}
          imgDirection={"right"}
          additionalImgStyles={
            "relative size-[25%] max-xl:size-52 max-md:size-36 max-sm:size-28 flex justify-center items-center"
          }
          additionalContainerStyles={"mt-6 max-2xl:mt-0"}
        />
      </div>
    </div>
    <div
      className="flex h-28
      w-full items-center justify-center bg-[#060708]/50 px-20
      shadow-lg backdrop-blur-sm
      max-2xl:h-20"
    >
      <div className="flex w-full max-w-screen-2xl items-center justify-center">
        <Link to="/shop">
          <button
            type="button"
            className="group rounded-xl border-2 border-[#4E433C] bg-[#2D2825] px-6 py-2 shadow-md"
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
