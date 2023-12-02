/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import ruppee from "../assets/rupee.svg";
import {
  addToCart,
  DecreaseQuantity,
  RemoveFromCart,
} from "../features/cart/ItemsSlice";

function Item({ id, name, price, quantity, imageLink }) {
  const dispatch = useDispatch();
  return (
    <>
      <article
        key={id}
        className=" w-full flex flex-col items-center font-cormorant gap-2 p-2 border-transparent shadow-2xl shadow-gray-500"
      >
        <img
          src={imageLink}
          alt="image"
          className="h-full w-full p-4 sm:p-0 object-contain"
        />
        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className="text-lg ">{name}</h1>
          <h2 className="flex gap-2 text-lg">
            <img src={ruppee} alt="Ruppe sign" /> {price.toLocaleString()}
          </h2>
          <div className="flex gap-4 items-center">
            <button
              className="w-24 h-12 bg-green-800 rounded-2xl text-white hover:scale-110 duration-200"
              onClick={() => dispatch(addToCart({ id }))}
            >
              Buy
            </button>
            <h2>{quantity}</h2>
            <button
              className="w-24 h-12 bg-red-700 rounded-2xl text-white hover:scale-110 duration-200"
              onClick={() => {
                if (quantity > 1) {
                  dispatch(DecreaseQuantity({ id }));
                } else {
                  dispatch(RemoveFromCart({ id }));
                }
              }}
            >
              Sell
            </button>
          </div>
        </div>
      </article>
    </>
  );
}

export default Item;
