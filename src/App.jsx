import { useEffect, useState } from "react";
import { AppProvider } from "./AppContext";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  const [displayedPageName, setDisplayedPageName] = useState("/home");
  const location = useLocation();

  useEffect(() => {
    setDisplayedPageName(location.pathname);
  }, [location.pathname]);

  return (
    <AppProvider>
      <>
        <Navbar displayedPageName={displayedPageName} />
        <main className="flex flex-col items-center justify-center">
          <Outlet />
        </main>
      </>
    </AppProvider>
  );
}

export default App;
