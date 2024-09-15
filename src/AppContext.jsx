import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [popupCartState, setPopupCartState] = useState(false);
  const [cart, setCart] = useState([]);

  return (
    <AppContext.Provider
      value={{ popupCartState, setPopupCartState, cart, setCart }}
    >
      {children}
    </AppContext.Provider>
  );
};
