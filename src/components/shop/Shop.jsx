import { Link, useParams } from "react-router-dom";
import Category from "./Category";
import PropTypes from "prop-types";

const Li = ({ text, linkTo, isSelected = false }) => (
  <Link className="flex size-full items-center justify-center" to={linkTo}>
    <li
      className={`flex size-full items-center justify-end rounded-md px-4 py-2 transition-colors duration-100 max-md:px-2 max-md:py-1
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
    <div className="size-full">
      <div className="relative top-20 size-full">
        <nav
          aria-label="Category"
          className="fixed top-20 w-[430px] p-3 max-xl:w-[350px] max-md:w-[200px] max-md:p-1.5"
        >
          <div className="min-h-calc-100vh-96px w-full rounded-xl bg-accent-900 shadow-xl">
            <div className="flex justify-end rounded-xl bg-accent-500 py-4 pr-6 shadow-xl max-md:rounded-md max-md:py-2 max-md:pr-3">
              <h3 className="text-2xl font-bold max-md:text-lg">Category</h3>
            </div>
            <ul
              className="flex flex-col items-center justify-center gap-2 p-1 py-3 text-2xl font-semibold max-md:py-1 
              max-md:text-base max-md:font-medium"
            >
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
        <section
          className="relative left-[430px] flex w-full-minus-left-430px flex-wrap justify-center gap-8 p-3 max-xl:left-[350px]
          max-xl:w-full-minus-left-350px max-md:left-[200px] max-md:w-full-minus-left-200px"
        >
          <Category categoryName={name} />
        </section>
      </div>
    </div>
  );
};

Li.propTypes = {
  text: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
};

export default Shop;
