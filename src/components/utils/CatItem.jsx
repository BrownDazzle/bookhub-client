import React from "react";
import { useDispatch } from "react-redux";

import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { setAddItemToCart, setOpenCart } from "../../app/CartSlice";

const CatItem = ({
    ifExists,
    id,
    color,
    shadow,
    title,
    text,
    cover,
    btn,
    rating,
    price,
}) => {
    //   console.log(id)
    const dispatch = useDispatch();

    const onAddToCart = () => {
        const item = { id, title, text, cover, color, shadow, price };

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
                className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${ifExists ? "justify-items-start" : "justify-items-center"
                    } rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
            >
                <div
                    className={`grid items-center ${ifExists ? "justify-items-start" : "justify-items-center"
                        }`}
                >
                    <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
                        {title}
                    </h1>
                    <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
                        {text}
                    </p>
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black"
                            onClick={() => { onAddToCart(); onCartToggle(); }}
                        >
                            {btn}
                        </button>
                    </div>
                </div>
                <div
                    className={`flex items-center ${ifExists ? "absolute top-5 right-1" : "justify-center"
                        }`}
                >
                    <a href={`/book/${id}`} >
                        <img
                            src={cover}
                            alt={`img/item-img/${id}`}
                            className={`transitions-theme hover:-rotate-12 ${ifExists
                                ? "h-36 w-54 lg:w-56 md:w-48 -rotate-[35deg]"
                                : "h-36 w-54"
                                }`}
                        />
                    </a>
                </div>
            </div>
        </>
    );
};

export default CatItem;
