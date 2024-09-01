import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "./Loader";
import Error from "./Error";

const Category = ({ categoryName = "" }) => {
  const [currentData, setCurrentData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const categoriesMapper = {
    electronics: "electronics",
    jewelry: "jewelery",
    "mens-clothing": "men's clothing",
    "womens-clothing": "women's clothing",
  };

  useEffect(() => {
    const fetchData = async () => {
      const url =
        categoryName === ""
          ? "https://fakestoreapi.com/products"
          : `https://fakestoreapi.com/products/category/${categoriesMapper[categoryName]}`;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error: status ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
        setCurrentData(result);
        setError(null);
      } catch (error) {
        setError(error);
        setCurrentData(null);
      } finally {
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    fetchData();
  }, [categoryName]);

  if (error) {
    return <Error error={error} />;
  } else if (isLoading) {
    return <Loader />;
  } else if (currentData) {
    return currentData.map((data) => (
      <Card
        key={data.id}
        imgSrc={data.image}
        alt={`Product: ${data.title}`}
        title={data.title}
        desc={data.description}
        price={`${data.price}$`}
      />
    ));
  }

  return null;
};

Category.propTypes = {
  categoryName: PropTypes.string,
};

export default Category;
