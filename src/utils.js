const toUrlSafe = (text) => {
  const unsafeCharsRegex = /\\|\/|:|,|'|https?|(\.[^\s]+|\.+)/g;
  const spaceRegex = /\s+/g;
  return text.trim().toLowerCase().replaceAll(unsafeCharsRegex, "").replaceAll(spaceRegex, "-");
}

const toTitle = (text) => text.trim().split(/-|\s/g)
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

const priceToNumber = (price) => {
  if (typeof price === "string") {
    const regex = /\s*\$/g;
    if (regex.test(price)) price = price.replace(regex, "");
    price = parseFloat(price);
  }
  return price;
}

const calculateTotal = (products) => {
  // products param data should be like this: [[price, amount], [price, amount], ...]
  return products
    .reduce((prev, curr) => {
      if (curr.length !== 2) throw Error(`products contains a sub-array with invalid amount of data: [${curr}]`);
      if (typeof curr[0] === "string") throw Error(`Make sure ${curr[0]} is correctly formatted in a float/int type (e.g. 49.99)`);
      else if (curr[0] < 0) throw Error(`Cannot have negative prices: ${curr[0]}`);
      return curr[0] * curr[1] + prev;
    }, 0)
    .toFixed(2) + "$";
}

export { toUrlSafe, toTitle, priceToNumber, calculateTotal };
