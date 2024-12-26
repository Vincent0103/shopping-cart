import PropTypes from "prop-types";

const ErrorShower = ({ errorMsg }) => (
  <div className="size-full bg-transparent backdrop-blur-xl">
    <div className="flex h-[80vh] w-full items-center justify-center">
      <h1 className="text-7xl font-semibold text-red-400">Error: {errorMsg}</h1>
    </div>
  </div>
);

ErrorShower.propTypes = {
  errorMsg: PropTypes.string.isRequired,
};

export default ErrorShower;
