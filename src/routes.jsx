import { Navigate } from "react-router-dom";
import App from "./App";
import Home from "./home/Home";
import Shop from "./shop/Shop";
import Product from "./product/Product";
import Checkout from "./checkout/Checkout";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: "",
    children: [
      { path: "/", element: <Navigate to="home" replace /> },
      { path: "home", element: <Home /> },
      { path: "shop?/:name", element: <Shop /> },
      { path: "product/:name", element: <Product /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
];

export default routes;
