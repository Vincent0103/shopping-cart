import { Navigate } from "react-router-dom";
import App from "./App";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import Product from "./components/product/Product";
import Checkout from "./components/checkout/Checkout";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: "",
    children: [
      { path: "/", element: <Navigate to="home" replace /> },
      { path: "home", element: <Home /> },
      { path: "shop?/:name", element: <Shop /> },
      { path: "product/:id", element: <Product /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
];

export default routes;
