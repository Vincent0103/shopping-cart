import PropTypes from "prop-types";

const Product = ({
  imgSrcs,
  alt,
  text,
  imgDirection,
  additionalImgStyles = "",
  additionalContainerStyles = "",
}) => {
  const Picture = () => (
    <picture
      className={`${additionalImgStyles} pointer-events-none z-[1] select-none transition-transform group-hover:scale-105`}
    >
      <source srcSet={imgSrcs[0]} type="image/webp" />
      <img className="object-cover" src={imgSrcs[1]} alt={alt} />
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
          : "my-24 max-xl:my-12 max-md:my-8 max-sm:my-4"
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

Product.propTypes = {
  imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imgDirection: PropTypes.string,
  additionalImgStyles: PropTypes.string,
  additionalContainerStyles: PropTypes.string,
};

export default Product;
