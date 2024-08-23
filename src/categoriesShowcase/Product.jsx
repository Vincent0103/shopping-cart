const Product = ({
  imgSrcs,
  alt,
  text,
  additionalImgStyles,
  additionalContainerStyles,
  imgDirection,
}) => {
  const Picture = () => (
    <picture className={`${additionalImgStyles} pointer-events-none`}>
      <source srcSet={imgSrcs[0]} type="image/webp" />
      <img className="object-cover" src={imgSrcs[1]} alt="" />
    </picture>
  );

  const H3 = () => (
    <h3
      className={
        "text-9xl max-xl:text-7xl max-md:text-5xl max-sm:text-3xl font-black font-jost tracking-wide"
      }
    >
      {text}
    </h3>
  );

  return (
    <div
      className={`relative flex justify-center items-center max-lg:gap-2 ${
        imgDirection ? "w-full" : ""
      } ${
        additionalContainerStyles
          ? `${additionalContainerStyles} mb-32 max-xl:mb-16 max-md:mb-10 max-sm:mb-8`
          : "my-32 max-xl:my-16 max-md:my-10 max-sm:my-8"
      }
      `}
    >
      {imgDirection === "right" ? (
        <>
          <H3 />
          <Picture />
        </>
      ) : (
        <>
          <Picture />
          <H3 />
        </>
      )}
    </div>
  );
};

export default Product;
