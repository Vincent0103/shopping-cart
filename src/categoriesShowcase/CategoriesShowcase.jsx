import Product from "./Product";
import HeadphonesPNG from "../assets/headphones.png";
import HeadphonesWEBP from "../assets/headphones.webp";
import LaptopPNG from "../assets/laptop.png";
import LaptopWEBP from "../assets/laptop.webp";
import SpeakerPNG from "../assets/speaker.png";
import SpeakerWEBP from "../assets/speaker.webp";

const CategoriesShowcase = () => (
  <section className="w-full">
    <div className="bg-gradient-to-r from-[#140E0E] to-[#231717] w-full h-32 px-20 flex justify-center items-center">
      <div className="max-w-screen-2xl w-full flex items-center">
        <h2 className="text-5xl max-2xl:text-3xl max-lg:text-xl font-bold">We sell bunch of...</h2>
      </div>
    </div>
    <div className="bg-[#0F0D0D] flex flex-col justify-center items-center">
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
          additionalImgStyles={"relative size-[25%] max-xl:size-52 max-md:size-36 max-sm:size-28 flex justify-center items-center"}
        />
        <Product
          imgSrcs={[SpeakerWEBP, SpeakerPNG]}
          text={"SPEAKERS"}
          imgDirection={"right"}
          additionalImgStyles={"relative size-[25%] max-xl:size-52 max-md:size-36 max-sm:size-28 flex justify-center items-center"}
          additionalContainerStyles={"mt-6 max-2xl:mt-0"}
        />
      </div>
    </div>
  </section>
);

export default CategoriesShowcase;
