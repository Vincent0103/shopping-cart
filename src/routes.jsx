import App from "./App";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import Product from "./components/product/Product";
import Checkout from "./components/checkout/Checkout";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <App hasError />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/shop?/:name", element: <Shop /> },
      { path: "/product/:id", element: <Product /> },
      { path: "/checkout", element: <Checkout /> },
    ],
  },
];

export default routes;
