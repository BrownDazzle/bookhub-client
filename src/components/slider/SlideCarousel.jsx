// src/ItemList.jsx

import React, { useRef, useState } from 'react';

const SlideCarousel = ({ items, handleButtonClick, activeCategory }) => {
    const scrollContainer = useRef(null);

    const scrollLeft = () => {
        scrollContainer.current.scrollBy({
            top: 0,
            left: -200,
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        scrollContainer.current.scrollBy({
            top: 0,
            left: 200,
            behavior: 'smooth',
        });
    };

    return (
        <div className="relative w-full">
            <div ref={scrollContainer} className="flex flex-row space-x-4 overflow-x-scroll scroll-hidden px-20 md:px-10">
                {items?.map((item, i) => (
                    <button
                        key={item}
                        className={`flex-shrink-0 text-md font-medium py-2 px-4 mx-2 rounded-md focus:outline-none ${i === activeCategory ? 'text-gray-800 bg-gray-100' : 'text-gray-500'
                            }`}
                        onClick={() => handleButtonClick(item, i)}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg px-3 py-2"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>
            <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg px-3 py-2"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>
        </div>
    );
};

export default SlideCarousel;
