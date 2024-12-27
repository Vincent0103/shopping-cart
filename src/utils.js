const toUrlSafe = (text) => {
  const unsafeCharsRegex = /\\|\/|:|,|'|https?|(\.[^\s]+|\.+)/g;
  const spaceRegex = /\s+/g;
  return text
    .trim()
    .toLowerCase()
    .replaceAll(unsafeCharsRegex, "")
    .replaceAll(spaceRegex, "-");
};

const toTitle = (text) =>
  text
    .trim()
    .split(/-|\s/g)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const priceToNumber = (price) => {
  if (typeof price === "string") {
    const regex = /\s*\$/g;
    if (regex.test(price)) price = price.replace(regex, "");
    price = parseFloat(price);
  }
  return price;
};

const verifyDataTypeOfProduct = (productArray) => {
  if (productArray.length !== 2) {
    throw Error(
      `param: ${productArray} contains invalid amount of expected data, expected: [float, float]`,
    );
  }

  const containsNegatives = productArray.some((item) => item < 0);
  if (typeof productArray[0] === "string") {
    throw Error(
      `Make sure ${productArray[0]} is correctly formatted in a float/int type (e.g. 49.99)`,
    );
  } else if (containsNegatives) {
    throw Error(`${productArray} cannot have negative numbers`);
  }
};
const calculateTotal = (products) => {
  // products param data should be like this: [[price, amount], [price, amount], ...]
  products.forEach((product) => {
    verifyDataTypeOfProduct(product);
  });

  return (
    Math.round(
      products.reduce((prev, curr) => curr[0] * curr[1] + prev, 0) * 100,
    ) / 100
  );
};

export { toUrlSafe, toTitle, priceToNumber, calculateTotal };
