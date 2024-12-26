import PropTypes from "prop-types";
import Card from "./Card";
import Loader from "../fetchUtils/Loader";
import ErrorShower from "../fetchUtils/ErrorShower";
import useData from "../fetchUtils/Fetch";

const Category = ({ categoryName = "" }) => {
  const categoriesMapper = {
    electronics: "electronics",
    jewelry: "jewelery",
    "mens-clothing": "men's clothing",
    "womens-clothing": "women's clothing",
  };

  const url =
    categoryName === ""
      ? "https://fakestoreapi.com/products"
      : `https://fakestoreapi.com/products/category/${categoriesMapper[categoryName]}`;

  const {
    data: currentData,
    errorMessage,
    isLoading,
  } = useData(url, [categoryName]);

  if (isLoading) return <Loader />;
  else if (errorMessage) return <ErrorShower errorMsg={errorMessage} />;
  else if (currentData) {
    return currentData.map(({ id, image, title, price }) => (
      <Card key={id} id={id} imgSrc={image} title={title} price={`${price}$`} />
    ));
  }

  return null;
};

Category.propTypes = {
  categoryName: PropTypes.string,
};

export default Category;
