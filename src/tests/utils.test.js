import { describe, expect, it } from "vitest";
import { calculateTotal, priceToNumber, toTitle, toUrlSafe } from "../utils";

describe("toUrlSafe", () => {
  it("converts a string to a url safe text", () => {
    let strings = [
      "Electronics",
      "mens clothing",
      "SanDisk SSD PLUS"
    ];
    strings = strings.map((text) => toUrlSafe(text));
    expect(strings).toEqual([
      "electronics",
      "mens-clothing",
      "sandisk-ssd-plus",
    ]);
  });

  it("handles characters that are url dangerous", () => {
    let strings = [
      "men's clothing",
      "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    ];
    strings = strings.map((text) => toUrlSafe(text));
    expect(strings).toEqual([
      "mens-clothing",
      "sandisk-ssd-plus-1tb-internal-ssd---sata-iii-6-gbs",
    ]);
  });

  it("handles a text that is itself an url", () => {
    expect(toUrlSafe("https://google.com/")).toBe("google");
    expect(toUrlSafe("http://localhost:5173/product/fjallraven---foldsack-no-1-"))
      .toBe("localhost5173productfjallraven---foldsack-no-1-");
  })
});

describe("toTitle", () => {
  it("converts a valid text to a titled version", () => {
    let strings = ["hello", "john wick", "lorem ips\\um is good", "big    space"];
    strings = strings.map((text) => toTitle(text));
    expect(strings).toEqual(["Hello", "John Wick", "Lorem Ips\\um Is Good", "Big    Space"]);
  });

  it("converts a url safe text to a titled version", () => {
    let urlSafeStrings = ["mens-clothing", "sandisk-ssd-plus-1tb-internal-ssd---sata-iii-6-gbs"];
    urlSafeStrings = urlSafeStrings.map((url) => toTitle(url));
    expect(urlSafeStrings).toEqual(["Mens Clothing", "Sandisk Ssd Plus 1tb Internal Ssd   Sata Iii 6 Gbs"]);
  })
});

describe("pricesToNumber", () => {
  it("converts a price to a valid number datatype", () => {
    let prices = ["44.99$", "356.75$", "89.99$"];
    prices = prices.map((price) => priceToNumber(price));
    expect(prices).toEqual([44.99, 356.75, 89.99]);
  });

  it("converts a price no matter the small inconsistencies", () => {
    let prices = ["44.99  $", "356.75", 89.99];
    prices = prices.map((price) => priceToNumber(price));
    expect(prices).toEqual([44.99, 356.75, 89.99]);
  })
})

describe("calculateTotal", () => {
  it("calculates the total based on an array of prices", () => {
    let prices = ["44.99$", "356.75$", "89.99$"];
    prices = prices.map((price) => priceToNumber(price));

    let bigPrices = ["236723.63$", "9$", "0.9237$"];
    bigPrices = bigPrices.map((price) => priceToNumber(price));

    expect(calculateTotal(prices)).toBe("491.73$");
    expect(calculateTotal(bigPrices)).toBe("236733.55$");
  });

  it("throws an error if the prices contains negative values", () => {
    let badPrices = ["44.99$", "1736.001$", "-2.05$", "89.99$"];
    badPrices = badPrices.map((price) => priceToNumber(price));
    expect(() => calculateTotal(badPrices)).toThrow("Cannot have negative prices: -2.05");
  });

  it("throws an error if the prices contain a badly formatted price", () => {
    let badPrices = ["44.99$", 1736.001, "-2.05$", "89.99"];
    expect(() => calculateTotal(badPrices)).toThrow("Make sure 44.99$ is correctly formatted in a float/int type (e.g. 49.99)");
  })
})
