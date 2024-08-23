import { Outlet } from "react-router-dom";
import Home from "./home/Home";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center">
        <Outlet />
      </main>
    </>
  );
}

export default App;
