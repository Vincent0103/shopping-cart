import CarharttPNG from "./assets/carhartt.png";
import RingsPNG from "./assets/rings.png";
import HeadphonesPNG from "./assets/headphones.png";
import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [popupCartState, setPopupCartState] = useState(false);
  const [cart, setCart] = useState([
    {
      id: uuid(),
      imgSrc: CarharttPNG,
      alt: "Carhartt",
      title: "Carhartt Shirt",
      productAmount: 3,
    },
    {
      id: uuid(),
      imgSrc: RingsPNG,
      alt: "Rings",
      title: "Lovely Rings",
      productAmount: 1,
    },
    {
      id: uuid(),
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
