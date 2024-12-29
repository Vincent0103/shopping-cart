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
        className="relative top-20 flex w-full justify-center font-extrabold text-text-50"
      >
        <section className="m-10 flex w-full max-w-screen-2xl flex-col items-center justify-center gap-10">
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
          <div className="flex size-full justify-center gap-14">
            <div className="max-w-1/2">
              <img
                className="max-h-[600px] w-full rounded-sm object-contain object-right-top"
                src={productInfos.image}
                alt={`Product: ${productInfos.title}`}
              />
            </div>
            <div className="flex h-full w-1/2 flex-col gap-6">
              <div className="flex w-full flex-col items-start gap-3">
                <h1 className="max-h-36 w-full overflow-hidden text-ellipsis font-jost text-5xl">
                  {productInfos.title}
                </h1>
                <h2 className="text-2xl font-semibold">
                  {productInfos.price}$
                </h2>
              </div>
              <hr className="bg-white" />
              <div>
                <p className="font-sans text-lg font-normal leading-normal">
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
                className="shadow-accent-btn flex h-10 items-center
                gap-4 rounded-md bg-primary-500 px-4 text-2xl
                font-medium shadow-primary-500 transition-shadow
                duration-100"
                type="submit"
              >
                <ShoppingCart size={24} />
                <p className="text-xl font-semibold">Add to Cart</p>
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default Product;
