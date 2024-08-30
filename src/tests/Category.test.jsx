import { describe, it, vi } from "vitest";

vi.mock("../shop/Card.jsx", () => ({
  default: ({ categoryName = "" }) => {

  },
}));

describe("Shop Category", () => {
  it.skip("fetches the correct products when in a particular url", () => {

  })
});
