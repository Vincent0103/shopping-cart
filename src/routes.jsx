import { Navigate } from "react-router-dom";
import App from "./App";
import Home from "./home/Home";
import Shop from "./shop/Shop";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: "",
    children: [
      { path: "/", element: <Navigate to="home" replace /> },
      { path: "home", element: <Home /> },
      { path: "shop", element: <Shop /> },
    ],
  },
];

export default routes;
