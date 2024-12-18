import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "../fetchUtils/Loader";
import ErrorShower from "../fetchUtils/ErrorShower";

const Category = ({ categoryName = "" }) => {
  const [currentData, setCurrentData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const categoriesMapper = {
    electronics: "electronics",
    jewelry: "jewelery",
    "mens-clothing": "men's clothing",
    "womens-clothing": "women's clothing",
  };

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      const url =
        categoryName === ""
          ? "https://fakestoreapi.com/products"
          : `https://fakestoreapi.com/products/category/${categoriesMapper[categoryName]}`;

      try {
        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`HTTP error: status ${response.status}`);
        }

        const result = await response.json();
        setCurrentData(result);
        setErrorMsg(null);
      } catch (error) {
        if (error.name === "AbortError") return;
        setErrorMsg(error.message);
        setCurrentData(null);
      } finally {
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    fetchData();

    return () => controller.abort();
  }, [categoryName]);

  if (isLoading) return <Loader />;
  else if (errorMsg) return <ErrorShower errorMsg={errorMsg} />;
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
