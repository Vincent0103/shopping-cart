import { describe, expect, it } from "vitest";
import { toUrlSafe } from "../utils";

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
  })
});
