const Error = ({ error }) => (
  <div className="size-full bg-transparent backdrop-blur-xl">
    <div className="w-full h-[80vh] flex items-center justify-center">
      <h1 className="text-7xl font-semibold text-red-400">error: {error.message}</h1>
    </div>
  </div>
);

export default Error;
