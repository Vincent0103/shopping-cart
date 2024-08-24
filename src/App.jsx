import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

function App() {
  const [displayedPageName, setDisplayedPageName] = useState("/home");
  const location = useLocation();

  useEffect(() => {
    setDisplayedPageName(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify()
      }
    )
  }, []);

  return (
    <>
      <Navbar displayedPageName={displayedPageName} />
      <main className="flex flex-col items-center justify-center">
        <Outlet />
      </main>
    </>
  );
}

export default App;
