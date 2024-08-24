import BgPurpleNoise from "../assets/purpleNoise.jpg";
import Headphones1PNG from "../assets/headphones1.png";
import Headphones2PNG from "../assets/headphones2.png";
import Card from "./Card";
import { Link } from "react-router-dom";

const Shop = () => {
  const Li = ({ text, isSelected = false }) => (
    <li
      className={`flex size-full flex-col items-center justify-center rounded-md px-8 py-3 transition-colors duration-100
          ${isSelected ? "bg-gradient-to-r from-accent-200 to-accent-400 text-text-950 shadow-lg" : "hover:bg-accent-200/50 hover:text-text-950"}`}
    >
      <Link className="flex size-full items-center justify-end" to={"#"}>
        <h3>{text}</h3>
      </Link>
    </li>
  );

  return (
    <div
      style={{ backgroundImage: `url(${BgPurpleNoise})` }}
      className="size-full"
    >
      <section
        style={{ backgroundImage: `url(${BgPurpleNoise})` }}
        className="relative top-20 grid size-full grid-cols-[1fr_3fr]"
      >
        <nav aria-label="Category" className="w-full p-3">
          <div className="min-h-calc-100vh-96px w-full rounded-xl bg-accent-900 shadow-xl">
            <div className="flex justify-end rounded-xl bg-accent-500 py-6 pr-10 shadow-xl">
              <h3 className="text-4xl font-black">Category</h3>
            </div>
            <ul className="flex flex-col items-center justify-center gap-4 p-2 py-6 text-4xl font-semibold">
              <Li text={"All"} />
              <Li text={"Laptops"} />
              <Li text={"Smartphones"} />
              <Li text={"Speakers"} />
              <Li text={"Headphones"} isSelected />
              <Li text={"Earbuds"} />
            </ul>
          </div>
        </nav>
        <section className="flex w-full flex-wrap gap-8 p-3">
          <Card
            imgSrc={Headphones1PNG}
            alt={"Hyperlastic JBL Product"}
            title={"Hyperlastic JBL"}
            price={"69.99€"}
          />
          <Card
            imgSrc={Headphones2PNG}
            imgSize="size-[110%]"
            alt={"Bombocat JBL Product"}
            title={"Bombocat JBL"}
            price={"39.99€"}
          />
        </section>
      </section>
    </div>
  );
};

export default Shop;
