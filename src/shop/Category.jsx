import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Card from "./Card";

const Category = ({ categoryName = "" }) => {
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    const categoriesMapper = {
      electronics: "electronics",
      jewelry: "jewelery",
      "mens-clothing": "men's clothing",
      "womens-clothing": "women's clothing",
    };

    const fetchData = async () => {
      const url = categoryName === ""
      ? "https://fakestoreapi.com/products"
      : `https://fakestoreapi.com/products/category/${categoriesMapper[categoryName]}`;
      const response = await fetch(url);
      const result = await response.json();
      setCurrentData(result);
    };

    fetchData();
  }, [categoryName]);

  if (currentData) {
    return currentData.map((data) => (
      <Card
        key={data.id}
        imgSrc={data.image}
        alt={data.title}
        title={data.title}
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
