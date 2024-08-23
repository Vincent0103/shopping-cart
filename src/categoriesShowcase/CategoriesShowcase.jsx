import Product from "./Product";
import HeadphonesPNG from "../assets/headphones.png";
import HeadphonesWEBP from "../assets/headphones.webp";
import LaptopPNG from "../assets/laptop.png";
import LaptopWEBP from "../assets/laptop.webp";
import SpeakerPNG from "../assets/speaker.png";
import SpeakerWEBP from "../assets/speaker.webp";
import abstractWallpaper from "../assets/abstractWallpaper.jpg";

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
      className="bg-[#81A7CA]/50 text-black
    w-full h-28 max-2xl:h-20 max-lg:h-12 px-20 flex justify-center items-center
    backdrop-blur-sm shadow-lg"
    >
      <div className="max-w-screen-2xl w-full flex items-center">
        <h2 className="text-5xl max-2xl:text-3xl max-lg:text-xl font-extrabold">
          We sell bunch of...
        </h2>
      </div>
    </div>
    <div className={`flex flex-col justify-center items-center`}>
      <div className="max-w-screen-2xl w-full flex flex-col justify-center items-center">
        <Product
          imgSrcs={[HeadphonesWEBP, HeadphonesPNG]}
          text={"HEADPHONES"}
          additionalImgStyles={"absolute -top-full left-[45%] size-[40%]"}
        />
        <Product
          imgSrcs={[LaptopWEBP, LaptopPNG]}
          text={"LAPTOPS"}
          imgDirection={"left"}
          additionalImgStyles={
            "relative size-[25%] max-xl:size-52 max-md:size-36 max-sm:size-28 flex justify-center items-center"
          }
        />
        <Product
          imgSrcs={[SpeakerWEBP, SpeakerPNG]}
          text={"SPEAKERS"}
          imgDirection={"right"}
          additionalImgStyles={
            "relative size-[25%] max-xl:size-52 max-md:size-36 max-sm:size-28 flex justify-center items-center"
          }
          additionalContainerStyles={"mt-6 max-2xl:mt-0"}
        />
      </div>
    </div>
  </section>
);

export default CategoriesShowcase;
