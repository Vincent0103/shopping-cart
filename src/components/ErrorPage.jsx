import { Link } from "react-router-dom";

const ErrorPage = () => (
  <section className="flex size-full h-[100vh] flex-col items-center justify-center gap-4">
    <h1 className="text-center text-5xl font-bold text-red-400 max-md:text-3xl">
      Oh no, this route doesn't exist!
    </h1>
    <Link
      className="text-center text-blue-100 hover:text-blue-400 
      hover:underline active:text-blue-400"
      to="/"
    >
      You can go back to the home page by clicking here, though!
    </Link>
  </section>
);

export default ErrorPage;
