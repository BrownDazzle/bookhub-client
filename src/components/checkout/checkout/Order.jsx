import React from 'react'
import { useSelector } from 'react-redux';
import {
    selectCartItems,
    selectCartState,
    selectTotalAmount,
    selectTotalQTY,
    setClearCartItems,
    setCloseCart,
    setGetTotals
} from "../../../app/CartSlice";


function Order() {
    const cartItems = useSelector(selectCartItems);
    const totalAmount = useSelector(selectTotalAmount);
    const totalQTY = useSelector(selectTotalQTY);

    const items = localStorage.getItem("cart")
    console.log(items)
    return (
        <div >
            <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                {cartItems?.map((item, i) => (
                    <div className="w-full flex items-center" key={i}>
                        <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                            <img src={item.cover} alt="" />
                        </div>
                        <div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-semibold uppercase text-gray-600">{item.title}</h6>
                            </div>
                            <div className='flex flex-col items-center justify-between'>
                                <p className="text-gray-400">Quantity: x {item.cartQuantity}</p>
                                <span className="font-semibold text-gray-600 text-md">ZMW{item.price}.00</span>
                            </div>
                        </div>

                    </div>
                ))}

            </div>
            <div className="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                <div className="w-full flex mb-3 items-center">
                    <div className="flex-grow">
                        <span className="text-gray-600">Subtotal</span>
                    </div>
                    <div className="pl-3">
                        <span className="font-semibold">ZMW{totalAmount}</span>
                    </div>
                </div>
                <div className="w-full flex items-center">
                    <div className="flex-grow">
                        <span className="text-gray-600">Shipping fee (LOCAL)</span>
                    </div>
                    <div className="pl-3">
                        <span className="font-semibold">ZMW19.09</span>
                    </div>
                </div>
            </div>
            <div className="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                <div className="w-full flex items-center">
                    <div className="flex-grow">
                        <span className="text-gray-600">Total</span>
                    </div>
                    <div className="pl-3">
                        <span className="font-semibold text-gray-400 text-sm">ZMW</span> <span className="font-semibold">ZMW{totalAmount}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order