import { useEffect, useState } from "react";
import { AppProvider } from "./AppContext";
import { Navigate, Outlet, useLocation, useOutlet } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import PropTypes from "prop-types";
import ErrorPage from "./components/ErrorPage";

function App({ hasError = false }) {
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
          {hasError ? (
            <ErrorPage />
          ) : outlet ? (
            <Outlet />
          ) : (
            <Navigate to={"/home"} replace />
          )}
        </main>
      </>
    </AppProvider>
  );
}

App.propTypes = {
  hasError: PropTypes.bool,
};

export default App;
