import { Link, useParams } from "react-router-dom";
import Category from "./Category";
import PropTypes from "prop-types";
import ErrorPage from "../ErrorPage";

const Li = ({ text, linkTo, deviceType, isSelected = false }) =>
  deviceType === "desktop" ? (
    <Link className="flex size-full items-center justify-center" to={linkTo}>
      <li
        className={`flex size-full items-center justify-end rounded-md px-4 py-2 transition-colors duration-100 max-md:px-2 max-md:py-1
          ${isSelected ? "bg-gradient-to-r from-accent-200 to-accent-400 text-text-950 shadow-lg" : "hover:bg-accent-200/50 hover:text-text-950"}`}
      >
        <h3>{text}</h3>
      </li>
    </Link>
  ) : (
    <Link className="flex size-full items-center justify-center" to={linkTo}>
      <li
        className={`flex size-full items-center justify-center rounded-md px-4 py-2 text-sm 
        transition-colors duration-100 max-md:px-2 max-md:py-1 ${isSelected ? "bg-accent-500 font-semibold" : ""}`}
      >
        <h3>{text}</h3>
      </li>
    </Link>
  );

const Ul = ({ name, containerStyle, deviceType }) => (
  <ul
    className={`${containerStyle} ${
      deviceType === "desktop" ? "max-sm:hidden" : "overflow-x-auto sm:hidden"
    }`}
  >
    <Li
      deviceType={deviceType}
      text={"All"}
      linkTo={"/shop"}
      isSelected={name === "shop"}
    />
    <Li
      deviceType={deviceType}
      text={"Electronics"}
      linkTo={"/shop/electronics"}
      isSelected={name === "electronics"}
    />
    <Li
      deviceType={deviceType}
      text={"Jewelry"}
      linkTo={"/shop/jewelry"}
      isSelected={name === "jewelry"}
    />
    <Li
      deviceType={deviceType}
      text={"Men's Clothing"}
      linkTo={"/shop/mens-clothing"}
      isSelected={name === "mens-clothing"}
    />
    <Li
      deviceType={deviceType}
      text={"Women's Clothing"}
      linkTo={"/shop/womens-clothing"}
      isSelected={name === "womens-clothing"}
    />
  </ul>
);

const Shop = () => {
  let { name } = useParams() || null;
  const validCategories = [
    "shop",
    "electronics",
    "jewelry",
    "mens-clothing",
    "womens-clothing",
  ];

  name = name.split("/")[0];
  if (!validCategories.includes(name)) return <ErrorPage />;

  return (
    <div className="size-full">
      <div className="relative top-20 size-full max-sm:top-16">
        <nav
          aria-label="Category"
          className="fixed top-20 w-[430px] p-3 max-xl:w-[350px] max-md:w-[200px] max-md:p-1.5
          max-sm:hidden"
        >
          <div className="min-h-calc-100vh-96px w-full rounded-xl bg-accent-900 shadow-xl">
            <div className="flex justify-end rounded-xl bg-accent-500 py-4 pr-6 shadow-xl max-md:rounded-md max-md:py-2 max-md:pr-3">
              <h3 className="text-2xl font-bold max-md:text-lg">Category</h3>
            </div>
            <Ul
              name={name}
              containerStyle={
                "flex flex-col items-center justify-center gap-2 p-1 py-3 text-2xl font-semibold max-md:py-1 max-md:text-base max-md:font-medium"
              }
              deviceType={"desktop"}
            />
          </div>
        </nav>
        <nav
          aria-label="Category"
          className="m-1 mb-3 box-content flex h-12 w-full items-center
          rounded-lg bg-accent-600 px-1 sm:hidden"
        >
          <h3
            className="rounded-md border-r-2 border-r-white bg-black/70 px-4 py-1.5 text-xl
            font-bold"
          >
            Category
          </h3>
          <Ul
            name={name}
            containerStyle={
              "flex items-center w-full bg-black/30 h-9 rounded-r-md"
            }
            deviceType={"mobile"}
          />
        </nav>
        <section
          className="relative left-[430px] flex w-full-minus-left-430px flex-wrap justify-center gap-8 p-3 max-xl:left-[350px]
          max-xl:w-full-minus-left-350px max-md:left-[200px] max-md:w-full-minus-left-200px max-md:gap-4
          max-sm:left-0 max-sm:w-full max-sm:p-1"
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
  deviceType: PropTypes.oneOf(["desktop", "mobile"]).isRequired,
  isSelected: PropTypes.bool,
};

Ul.propTypes = {
  name: PropTypes.string.isRequired,
  deviceType: PropTypes.oneOf(["desktop", "mobile"]).isRequired,
  containerStyle: PropTypes.string,
};

export default Shop;
