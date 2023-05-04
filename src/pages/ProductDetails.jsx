import React, { useEffect, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";

import ReactMarkdown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { setAddItemToCart, setOpenCart, setDecreaseItemQTY, setIncreaseItemQTY, } from "../app/CartSlice";
import { ImgArray, highlight, toprateslaes } from "../data/data";

import { getBook } from "../actions/BookAction";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductDetailsCarousel, Wrapper } from "../components";
import RelatedProducts from "../components/RelatedProducts";

const ProductDetails = ({ product, products }) => {
    const [selectedSize, setSelectedSize] = useState();
    const [showError, setShowError] = useState(false);
    const dispatch = useDispatch();
    const p = product?.data?.[0]?.attributes;
    const singleBook = useSelector((state) => state.bookReducer.singleBook)

    const [book, setBook] = useState({});

    const [index, setIndex] = useState(0);

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

    const onIncreaseItemQTY = () => {
        dispatch(setIncreaseItemQTY({ _id, title, desc, cover, color, shadow, price, cartQuantity }))
    }
    const onDecreaseItemQTY = () => {
        dispatch(setDecreaseItemQTY({ _id, title, desc, cover, color, shadow, price, cartQuantity }))
    }

    const getDiscountedPricePercentage = (
        originalPrice,
        discountedPrice
    ) => {
        const discount = originalPrice - discountedPrice;

        const discountPercentage = (discount / originalPrice) * 100;

        return discountPercentage.toFixed(2);
    };


    const notify = () => {
        toast.success("Success. Check your cart!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    return (
        <div className="w-full md:py-20">
            <ToastContainer />
            <Wrapper>
                <div className="flex flex-row md:flex-col md:px-10 gap-[50px] lg:gap-[100px]">
                    {/* left column start */}
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <ProductDetailsCarousel images={ImgArray} />
                    </div>
                    {/* left column end */}

                    {/* right column start */}
                    <div className="flex-[1] py-3">
                        {/* PRODUCT TITLE */}
                        <div className="text-[34px] font-semibold mb-2 leading-tight">
                            {title}
                        </div>

                        {/* PRODUCT SUBTITLE */}
                        <div className="text-lg font-semibold mb-5">
                            {subtitle}
                        </div>

                        {/* PRODUCT PRICE 
                        <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">
                                MRP : &#8377;{price}
                            </p>
                            {original_price && (
                                <>
                                    <p className="text-base  font-medium line-through">
                                        &#8377;{original_price}
                                    </p>
                                    <p className="ml-auto text-base font-medium text-green-500">
                                        {getDiscountedPricePercentage(
                                            original_price,
                                            price
                                        )}
                                        % off
                                    </p>
                                </>
                            )}
                        </div>

                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
                        </div>
*/}
                        {/* PRODUCT SIZE RANGE START */}
                        <div className="mb-10">
                            {/* HEADING START */}
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Select Size
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </div>
                            </div>
                            {/* HEADING END */}

                            {/* SIZE START 
                            <div
                                id="sizesGrid"
                                className="grid grid-cols-3 gap-2"
                            >
                                {size.data.map((item, i) => (
                                    <div
                                        key={i}
                                        className={`border rounded-md text-center py-3 font-medium ${item.enabled
                                                ? "hover:border-black cursor-pointer"
                                                : "cursor-not-allowed bg-black/[0.1] opacity-50"
                                            } ${selectedSize === item.size
                                                ? "border-black"
                                                : ""
                                            }`}
                                        onClick={() => {
                                            setSelectedSize(item.size);
                                            setShowError(false);
                                        }}
                                    >
                                        {item.size}
                                    </div>
                                ))}
                            </div>
                            */}
                            {/* SIZE END */}

                            {/* SHOW ERROR START */}
                            {showError && (
                                <div className="text-red-600 mt-1">
                                    Size selection is required
                                </div>
                            )}
                            {/* SHOW ERROR END */}
                        </div>
                        {/* PRODUCT SIZE RANGE END */}

                        {/* ADD TO CART BUTTON START */}
                        <button
                            className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                            onClick={() => {
                                if (!selectedSize) {
                                    setShowError(true);
                                    document
                                        .getElementById("sizesGrid")
                                        .scrollIntoView({
                                            block: "center",
                                            behavior: "smooth",
                                        });
                                } else {
                                    onAddToCart();
                                    notify();
                                }
                            }}
                        >
                            Add to Cart
                        </button>
                        {/* ADD TO CART BUTTON END */}

                        {/* WHISHLIST BUTTON START */}
                        <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                            <IoMdHeartEmpty size={20} />
                        </button>
                        {/* WHISHLIST BUTTON END */}

                        <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="markdown text-md mb-5">
                                <ReactMarkdown>{desc}</ReactMarkdown>
                            </div>
                        </div>
                    </div>
                    {/* right column end */}
                </div>

                <RelatedProducts products={items} />
            </Wrapper>
        </div>
    );
};

export default ProductDetails;

/*export async function getStaticPaths() {
    const products = await fetchDataFromApi("/api/products?populate=*");
    const paths = products?.data?.map((p) => ({
        params: {
            slug: p.attributes.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const product = await fetchDataFromApi(
        `/api/products?populate=*&filters[slug][$eq]=${slug}`
    );
    const products = await fetchDataFromApi(
        `/api/products?populate=*&[filters][slug][$ne]=${slug}`
    );

    return {
        props: {
            product,
            products,
        },
    };
}*/
