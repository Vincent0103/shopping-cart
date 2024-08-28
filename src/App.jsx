import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

function App() {
  const [displayedPageName, setDisplayedPageName] = useState("/home");
  const location = useLocation();

  useEffect(() => {
    setDisplayedPageName(location.pathname);
  }, [location.pathname]);

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
