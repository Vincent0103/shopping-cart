import BgPurpleNoise from "../../assets/purpleNoise.jpg";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { produce } from "immer";
import { AppContext } from "../../AppContext.jsx";
import { toTitle } from "../../utils.js";
import Loader from "../fetchUtils/Loader.jsx";
import ErrorShower from "../fetchUtils/ErrorShower.jsx";
import useData from "../fetchUtils/Fetch.jsx";

const Product = () => {
  const { setPopupCartState, setCart } = useContext(AppContext);

  const { id } = useParams();
  const [productAmount, setProductAmount] = useState(1);
  const {
    data: productInfos,
    errorMessage,
    isLoading,
  } = useData(`https://fakestoreapi.com/products/${id}`, [id]);

  const handlePlusOrMinusClick = (action) => {
    if (action === "add") setProductAmount((prev) => prev + 1);
    else if (productAmount - 1 > 0) setProductAmount((prev) => prev - 1);
  };

  const handleAddToCartClick = () => {
    setPopupCartState(true);
    setCart(
      produce((draft) => {
        const itemIndex = draft.findIndex(({ id: draftId }) => draftId === id);
        if (itemIndex !== -1) draft[itemIndex].productAmount += productAmount;
        else {
          const { image, title, description, price, category } = productInfos;
          draft.unshift({
            imgSrc: image,
            desc: description,
            productCategory: category,
            id,
            title,
            price: Math.round(price * 100) / 100,
            productAmount,
          });
        }
      }),
    );
  };

  if (isLoading) return <Loader />;
  else if (errorMessage) return <ErrorShower errorMsg={errorMessage} />;
  else if (productInfos) {
    return (
      <div
        style={{ backgroundImage: `url(${BgPurpleNoise})` }}
        className="flex h-screen min-h-screen w-full items-center justify-center font-extrabold text-text-50"
      >
        <section className="flex h-3/5 w-full max-w-screen-2xl flex-col items-center justify-center gap-10">
          <nav className="self-start" aria-label="Previous links">
            <ul className="flex text-lg font-light text-zinc-500">
              <Link to={`/shop/${productInfos.category}`}>
                <li className="underline">
                  {toTitle(productInfos.category) || "All"}
                </li>
              </Link>
              <p>&nbsp;&gt;&nbsp;</p>
              <li className="max-w-60 overflow-hidden text-ellipsis text-nowrap">
                {productInfos.title}
              </li>
            </ul>
          </nav>
          <div className="flex size-full gap-20">
            <div className="flex h-full w-1/2 justify-end">
              <img
                className="h-full rounded-sm object-cover"
                src={productInfos.image}
                alt={`Product: ${productInfos.title}`}
              />
            </div>
            <div className="flex w-1/2 flex-col gap-6">
              <div className="flex flex-col items-start gap-3">
                <h1 className="h-[66px] w-full overflow-hidden text-ellipsis text-nowrap font-jost text-6xl">
                  {productInfos.title}
                </h1>
                <h2 className="text-2xl font-semibold">
                  {productInfos.price}$
                </h2>
              </div>
              <hr className="bg-white" />
              <div>
                <p className="text-2xl font-normal leading-normal">
                  {productInfos.description}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Plus
                  className="cursor-pointer"
                  size={40}
                  color="#ececf8"
                  onClick={() => handlePlusOrMinusClick("add")}
                />
                <input
                  className="flex size-12 items-center justify-center
                rounded-full border-2 border-accent-500 bg-background-100
                text-center text-2xl text-background-900"
                  type="text"
                  name=""
                  id=""
                  readOnly
                  value={productAmount}
                />
                <Minus
                  className="cursor-pointer"
                  size={40}
                  color="#ececf8"
                  onClick={() => handlePlusOrMinusClick("remove")}
                />
              </div>
              <button
                id="add-to-cart-btn"
                onClick={handleAddToCartClick}
                className="shadow-accent-btn flex h-14 items-center
                gap-4 rounded-md bg-primary-500 px-4 text-2xl
                font-medium shadow-primary-500 transition-shadow
                duration-100"
                type="submit"
              >
                <ShoppingCart size={32} />
                <p className="font-semibold">Add to Cart</p>
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default Product;
