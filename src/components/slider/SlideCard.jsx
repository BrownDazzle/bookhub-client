import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import CatItem from "../utils/CatItem"

import flyer1 from '../../assets/flyers/flyer1.png'
import flyer2 from '../../assets/flyers/flyer2.png'
import flyer3 from '../../assets/flyers/flyer3.png'
import flyer4 from '../../assets/flyers/flyer4.png'

const imgArr = [flyer1, flyer2, flyer3, flyer4]

const SlideCard = ({ items }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
  return (
    <>
      <Slider {...settings}>
        <img src={flyer1} className="transition-opacity duration-500 w-full max-h-[400px] object-contain left-0 right-0" />
        <img src={flyer2} className="transition-opacity duration-500 w-full max-h-[400px] object-contain left-0 right-0" />
        <img src={flyer3} className="transition-opacity duration-500 w-full max-h-[400px] object-contain left-0 right-0" />
        <img src={flyer4} className="transition-opacity duration-500 w-full max-h-[400px] object-contain left-0 right-0" />
      </Slider>
    </>
  )
}

export default SlideCard
