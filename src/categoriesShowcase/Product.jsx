const Product = ({
  imgSrcs,
  alt,
  text,
  additionalImgStyles,
  additionalContainerStyles,
  imgDirection,
}) => {
  const Picture = () => (
    <picture
      className={`${additionalImgStyles} pointer-events-none select-none z-[1] transition-transform group-hover:scale-105`}
    >
      <source srcSet={imgSrcs[0]} type="image/webp" />
      <img className="object-cover" src={imgSrcs[1]} alt="" />
    </picture>
  );

  const H3 = () => (
    <h3
      className={
        "font-jost text-9xl font-black tracking-wide max-xl:text-7xl max-md:text-5xl max-sm:text-3xl"
      }
    >
      {text}
    </h3>
  );

  return (
    <button
      type="button"
      className={`relative flex items-center justify-center max-lg:gap-2 ${
        imgDirection ? "w-full" : ""
      } ${
        additionalContainerStyles
          ? `${additionalContainerStyles} mb-32 max-xl:mb-16 max-md:mb-10 max-sm:mb-8`
          : "my-32 max-xl:my-16 max-md:my-10 max-sm:my-8"
      }
      group`}
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
    </button>
  );
};

export default Product;
