const toUrlSafe = (text) => {
  const unsafeCharsRegex = /\\|\/|:|,|'|https?|(\.[^\s]+|\.+)/g
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

const calculateTotal = (prices) => {
  return prices
    .reduce((prev, curr) => {
      const num = priceToNumber(curr);
      if (num < 0) throw Error(`Cannot have negative prices: ${curr}`);
      return num + prev;
    }, 0)
    .toFixed(2) + "$";
}

export { toUrlSafe, toTitle, priceToNumber, calculateTotal };
