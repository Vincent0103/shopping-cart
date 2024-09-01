import BgPurpleNoise from "../assets/purpleNoise.jpg";
import { Link, useParams } from "react-router-dom";
import Category from "./Category";
import PropTypes from "prop-types";

const Li = ({ text, linkTo, isSelected = false }) => (
  <Link className="flex size-full items-center justify-center" to={linkTo}>
    <li
      className={`flex size-full items-center justify-end rounded-md px-8 py-3 transition-colors duration-100
          ${isSelected ? "bg-gradient-to-r from-accent-200 to-accent-400 text-text-950 shadow-lg" : "hover:bg-accent-200/50 hover:text-text-950"}`}
    >
      <h3>{text}</h3>
    </li>
  </Link>
);

const Shop = () => {
  let { name } = useParams();

  const validCategories = [
    "electronics",
    "jewelry",
    "mens-clothing",
    "womens-clothing",
  ];

  name = name.split("/")[0];
  if (!validCategories.includes(name)) name = "";

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
              <Li text={"All"} linkTo={"/shop"} isSelected={name === ""} />
              <Li
                text={"Electronics"}
                linkTo={"/shop/electronics"}
                isSelected={name === "electronics"}
              />
              <Li
                text={"Jewelry"}
                linkTo={"/shop/jewelry"}
                isSelected={name === "jewelry"}
              />
              <Li
                text={"Men's Clothing"}
                linkTo={"/shop/mens-clothing"}
                isSelected={name === "mens-clothing"}
              />
              <Li
                text={"Women's Clothing"}
                linkTo={"/shop/womens-clothing"}
                isSelected={name === "womens-clothing"}
              />
            </ul>
          </div>
        </nav>
        <section className="flex w-full flex-wrap gap-8 p-3 size-min">
          <Category categoryName={name} />
        </section>
      </section>
    </div>
  );
};

Li.propTypes = {
  text: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
};

export default Shop;
