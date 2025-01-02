import { useEffect, useState } from "react";
import { AppProvider } from "./AppContext";
import { Navigate, Outlet, useLocation, useOutlet } from "react-router-dom";
import Navbar from "./components/nav/Navbar";

function App() {
  const [displayedPageName, setDisplayedPageName] = useState("/home");
  const outlet = useOutlet();
  const location = useLocation();

  useEffect(() => {
    setDisplayedPageName(location.pathname);
  }, [location.pathname]);

  return (
    <AppProvider>
      <>
        <Navbar displayedPageName={displayedPageName} />
        <main className="flex flex-col items-center justify-center">
          {outlet ? <Outlet /> : <Navigate to={"/home"} replace />}
        </main>
      </>
    </AppProvider>
  );
}

export default App;
