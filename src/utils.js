const toUrlSafe = (text) => {
  const unsafeCharsRegex = /\\|\/|:|,|'|https?|(\.[^\s]+|\.+)/g
  const spaceRegex = /\s+/g;
  return text.trim().toLowerCase().replaceAll(unsafeCharsRegex, "").replaceAll(spaceRegex, "-");
}

const toTitle = (text) => text.trim().split(/-|\s/g)
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

const calculateTotal = (prices) => {
  return prices
    .reduce((prev, curr) => {
      let num = curr;
      if (typeof num === "string") {
        if (num.includes("$")) num = curr.replace("$", "");
        num = parseFloat(num);
      }
      if (num < 0) throw Error(`Cannot have negative prices: ${curr}`);
      return num + prev;
    }, 0)
    .toFixed(2) + "$";
}

export { toUrlSafe, toTitle, calculateTotal };
