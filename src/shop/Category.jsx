import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "../fetchUtils/Loader";
import Error from "../fetchUtils/Error";

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

  const handleCart = (data) => {
    setCart(
      produce((draft) => {
        const itemIndex = draft.findIndex(({ id: draftId }) => draftId === id);
        if (itemIndex !== -1) draft[itemIndex].productAmount += productAmount;
        else draft.unshift({ ...data });
      }),
    );
  };

  if (isLoading) return <Loader />;
  else if (errorMsg) return <Error errorMsg={errorMsg} />;
  else if (currentData) {
    return currentData.map(({ id, image, title, price }) => (
      <Card
        key={id}
        id={id}
        imgSrc={image}
        title={title}
        price={`${price}$`}
      />
    ));
  }

  return null;
};

Category.propTypes = {
  categoryName: PropTypes.string,
};

export default Category;
