import { useState } from 'react';

//Temp Images
import product1 from "../../assets/storybookcover.png";
import product2 from "../../assets/novelcover.png";
import product3 from "../../assets/physicsadv.png"
import product4 from "../../assets/thriller-novel.png";
import product5 from "../../assets/textbookcover.png";
import product6 from "../../assets/physicsbook.png";
import product7 from "../../assets/storybookcover.png";
import product8 from "../../assets/textbookcover.png";
import product9 from "../../assets/novelcover.png";


const images = [
    product1,
    product2,
    product3,
    product4,
];

function CarouselSlider() {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const nextImage = () => {
        setActiveImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setActiveImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full h-[300px]">
            {images.map((imageUrl, index) => (
                <img
                    key={index}
                    src={imageUrl}
                    alt={`Image ${index + 1}`}
                    className={`absolute top-0 left-0 w-full h-full ${index === activeImageIndex ? 'opacity-100' : 'opacity-0'
                        } transition-opacity duration-500`}
                />
            ))}
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 focus:outline-none"
                onClick={prevImage}
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
                className="absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none"
                onClick={nextImage}
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
}

export default CarouselSlider