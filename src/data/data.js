import _ from "lodash";

const products = [
  {
    title: "Hyperlastic JBL",
    price: 59.99,
    description:
      "Tempor amet proident eiusmod irure irure fugiat sit. Velit eiusmod consectetur id qui elit ullamco velit nisi. Cupidatat culpa id qui sunt nostrud. Ea cupidatat commodo elit eu anim exercitation eiusmod reprehenderit Lorem cillum exercitation. Labore do exercitation veniam non commodo sint elit nostrud excepteur sit. Culpa eiusmod nisi velit magna voluptate esse.",
    categoryId: 2,
    images: ["https://i.imgur.com/O3bPdQs.png"],
  },
  {
    title: "Bombacat JBL",
    price: 29.99,
    description:
      "Aliquip esse esse est nostrud id nostrud. Eu do non commodo tempor excepteur aliquip ex qui ad est officia. Labore tempor in nisi nulla quis dolor occaecat.",
    categoryId: 2,
    images: ["https://i.imgur.com/ZVTEj2V.png"],
  },
];

const ProductsToInitialize = _.cloneDeep(products);
export default ProductsToInitialize;
