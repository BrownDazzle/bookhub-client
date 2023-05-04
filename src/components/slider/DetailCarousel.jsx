import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import product1 from "../../assets/storybookcover.png";
import product2 from "../../assets/novelcover.png";
import product3 from "../../assets/physicsadv.png"
import product4 from "../../assets/thriller-novel.png";
import product5 from "../../assets/textbookcover.png";


const DetailCarousel = ({ images, index, setIndex }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    //const images = [product1, product2, product4, product5]
    return (
        <>
            <Slider {...settings}>
                {images?.map((item, i) => (
                    <img
                        key={i}
                        src={item}
                        className={i === index ? 'w-[90px] h-[90px] object-cover cursor-pointer rounded-xl transition-all duration-700 ease-in-out w-full hover:scale-105' : 'w-[70px] h-70px] cursor-pointer rounded-xl bg-[#ebebeb]'}
                        onMouseEnter={() => setIndex(i)}
                    />
                ))}
            </Slider>
        </>
    )
}

export default DetailCarousel
