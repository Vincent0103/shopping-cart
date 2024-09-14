import CarharttPNG from "./assets/carhartt.png";
import RingsPNG from "./assets/rings.png";
import HeadphonesPNG from "./assets/headphones.png";
import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [popupCartState, setPopupCartState] = useState(false);
  const [cart, setCart] = useState([
    {
      imgSrc: CarharttPNG,
      alt: "Carhartt",
      title: "Carhartt Shirt",
      productAmount: 3,
    },
    {
      imgSrc: RingsPNG,
      alt: "Rings",
      title: "Lovely Rings",
      productAmount: 1,
    },
    {
      imgSrc: HeadphonesPNG,
      alt: "Headphones",
      title: "Bombocat JBL",
      productAmount: 5,
    },
  ]);

  return (
    <AppContext.Provider
      value={{ popupCartState, setPopupCartState, cart, setCart }}
    >
      {children}
    </AppContext.Provider>
  );
};
