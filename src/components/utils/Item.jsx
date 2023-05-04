import React from "react";
import { useDispatch } from "react-redux";

import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { setAddItemToCart, setOpenCart } from "../../app/CartSlice";

const Item = ({
  ifExists,
  _id,
  color,
  shadow,
  title,
  desc,
  publisher,
  cover,
  btn,
  rating,
  price,
}) => {
  //   console.log(id)
  const dispatch = useDispatch();

  const onAddToCart = () => {
    const item = { _id, title, desc, cover, color, shadow, price, publisher };

    dispatch(setAddItemToCart(item));
  };

  const onCartToggle = () => {
    dispatch(setOpenCart({
      cartState: true
    }))
  }

  return (
    <>
      <div
        className={`relative bg-gradient-to-b shadow-lg grid items-center ${ifExists ? "justify-items-start" : "justify-items-center"
          } rounded-xl transition-all duration-700 ease-in-out w-full hover:scale-105`}
      >
        <div
          className={`flex items-center py-5 ${ifExists ? "absolute top-5 right-1" : "justify-center"
            }`}
        >
          <a href={`/book/${_id}`} >
            <img
              src={cover}
              alt={title}
              className={`transitions-theme object-contain hover:-rotate-12 ${ifExists
                ? "h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]"
                : "h-36 w-64"
                }`}
            />
          </a>
        </div>
        <div
          className={`grid items-center w-full py-4 px-5 rounded-xl ${ifExists ? "justify-items-start" : "justify-items-start"
            }`}
        >
          <h1 className="text-slate-900 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
            {title}
          </h1>
          <p className="text-slate-900 filter drop-shadow text-base md:text-sm font-normal">
            { }
          </p>

          <div className="flex items-center justify-between w-full my-2 pr-4">
            <div className="flex flex-row items-center justify-between w-full">
              <p className="text-slate-900 filter drop-shadow text-base md:text-sm font-normal">
                {publisher}
              </p>
              <h1 className="md:text-sm font-normal text-slate-900 text-xl">
                K{price}
              </h1>
            </div>
          </div>

          <div className="flex items-center justify-between w-full">
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
              onClick={() => onAddToCart()}
            >
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black"
              onClick={() => { onAddToCart(); onCartToggle(); }}
            >
              Buy Now
            </button>
          </div>
        </div>

      </div>
    </>
  );
};

export default Item;
