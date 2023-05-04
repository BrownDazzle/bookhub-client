import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { setAddItemToCart, setOpenCart, setDecreaseItemQTY, setIncreaseItemQTY, } from "../app/CartSlice";
import { highlight, toprateslaes } from "../data/data";
import axios from "axios"
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import {
    selectCartItems,
    selectCartState,
    selectTotalAmount,
    selectTotalQTY,
    setClearCartItems,
    setCloseCart,
    setGetTotals
} from "../app/CartSlice.js";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import CartCount from "../components/cart/CartCount";
import CartItem from "../components/cart/CartItem";
import { DetailCarousel, FlexContent, PopularCategory, SlideCard } from "../components";
import CatItem from "../components/utils/CatItem";
import Title from "../components/utils/Title";
import { getBook } from "../actions/BookAction";

//Temp Images
import product1 from "../assets/storybookcover.png";
import product2 from "../assets/novelcover.png";
import product3 from "../assets/physicsadv.png"
import product4 from "../assets/thriller-novel.png";
import product5 from "../assets/textbookcover.png";
import product6 from "../assets/physicsbook.png";
import product7 from "../assets/storybookcover.png";
import product8 from "../assets/textbookcover.png";
import product9 from "../assets/novelcover.png";


export default function BookDetails({ ifExists }) {
    const ifCartState = useSelector(selectCartState);
    const cartItems = useSelector(selectCartItems);
    const totalAmount = useSelector(selectTotalAmount);
    const totalQTY = useSelector(selectTotalQTY);

    const singleBook = useSelector((state) => state.bookReducer.singleBook)

    const [book, setBook] = useState({});

    const [index, setIndex] = useState(0);
    const qNum = 1
    const [qty, setQty] = useState(qNum);

    const dispatch = useDispatch();
    const { id } = useParams();
    const bookId = id
    //console.log("ID", bookId)
    const { items } = toprateslaes

    //const bookObj = items.filter((o) => o.id === bookId)

    // const item = bookObj[0]
    const { _id, cover, title, subtitle, desc, price, color, shadow, cartQuantity } = singleBook

    useEffect(() => {
        dispatch(getBook(bookId))
    }, [bookId])

    const onAddToCart = () => {

        const item = { _id, title, desc, cover, color, shadow, price, cartQuantity };

        dispatch(setAddItemToCart(item));
    };
    const onCartToggle = () => {
        dispatch(setOpenCart({
            cartState: true
        }))
    }

    const onQuantityValue = () => {
        setQty(qty + 1)
    }

    const onQuantityDec = () => {
        setQty(qty - 1)
    }

    const onIncreaseItemQTY = () => {
        dispatch(setIncreaseItemQTY({ _id, title, desc, cover, color, shadow, price, cartQuantity }))
    }
    const onDecreaseItemQTY = () => {
        dispatch(setDecreaseItemQTY({ _id, title, desc, cover, color, shadow, price, cartQuantity }))
    }

    const images = [product1, product2, product4, product5, product6, product7, product8, product9]

    return (
        <>
            <div className="nike-container">
                <div className={`flex items-center justify-between lg:flex-col lg:justify-center px-[10%] mt-20 mb-9 nike-container gap-[40px] ${ifExists ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className='max-w-lg lg:max-w-none w-full md:text-center grid items-center lg:justify-items-center md:mt-4'>
                        <div className="flex flex-col items-center justify-around w-full  ">
                            <img src={images[index]} className='w-[400px] h-[400px] object-contain cursor-pointer bg-[#ebebeb] rounded-xl ' />
                        </div>
                        <div className="gap-4 mt-[40px] flex flex-rows">
                            {images?.map((item, i) => (
                                <img
                                    key={i}
                                    src={item}
                                    className={i === index ? 'w-[90px] h-[90px] object-cover cursor-pointer rounded-xl transition-all duration-700 ease-in-out w-full hover:scale-105' : 'w-[70px] h-70px] cursor-pointer rounded-xl bg-[#ebebeb]'}
                                    onMouseEnter={() => setIndex(i)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="">
                        <h1 className="mt-5 text-2xl font-bold">{title}</h1>
                        <div className="flex flex-row items-center">
                            <div className="flex flex-row">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiOutlineStar />
                            </div>
                            <p className="text-[#324d67]">
                                (20)
                            </p>
                        </div>
                        <h4 className="text-2xl font-semibold">Details: </h4>
                        <p>{desc}</p>
                        <p className="text-2xl font-bold mt-[30px] text-[#f02d34]">ZMW{price}</p>
                        <div className="flex items-center mt-[10px] gap-[20px]">
                            <h4 className="text-2xl font-semibold">Quantity:</h4>
                            <div className="flex items-center justify-around w-[100px]">
                                <button type="button" onClick={() => { onDecreaseItemQTY(); onQuantityDec(); }} className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90">
                                    <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
                                </button>
                                <div className="bg-theme-cart rounded text-white font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 flex items-center justify-center">{qty}</div>
                                <button type="button" onClick={() => { onIncreaseItemQTY(); onQuantityValue(); }} className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90">
                                    <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between my-2 sm:px-5 gap-3 w-full">
                            <button
                                type="button"
                                className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
                                onClick={() => onAddToCart()}
                            >
                                <ShoppingBagIcon className="icon-style text-slate-900 w-10 h-10 lg:w-8 lg:h-8" />
                            </button>
                            <button
                                type="button"
                                className="bg-black/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-lg sm:text-md text-white"
                                onClick={() => { onAddToCart(); onCartToggle(); }}
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className='nike-container '>
                    <Title title="Related Books" />
                    <div className={`grid items-center justify-center mb-10 gap-7 lg:gap-5 mt-7 ${ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}>
                        {items?.map((item, i) => (
                            <CatItem {...item} key={i} ifExists={ifExists} />
                        ))}
                    </div>
                </div>
                <FlexContent endpoint={highlight} />
            </div>
        </>
    )

};



