import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
import { HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import Title from "./utils/Title";
import { truncate } from "lodash";

import { bookCategories } from '../data/data.js';

const Stories = ({ category }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    category?.map((catObj) => {
      const data = bookCategories.filter((cat) => cat.category === catObj.category)
      setCategories(data)
    })

  }, [])

  const splideOptions = {
    perPage: 6,
    perMove: 1,
    type: 'loop',
    rewind: true,
    keyboard: 'global',
    gap: '1rem',
    pagination: false,
    padding: '2rem',
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };
  return (
    <>
      <div className="nike-container mb-6">
        <div className="mt-7">
          <Splide options={splideOptions}>
            {bookCategories?.map((val, i) => (
              <SplideSlide key={i} className="mb-0.5">
                <div className="relative  grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200">
                  <div className="flex-1 m-[3px] h-[40vh] relative">
                    <a href={`/books/${val.category}`}>
                      <img src={val.cover} className="w-[100%] object-contain h-[25vh]" />
                      <div className="absolute flex top-[70%] left-0 w-[100%] h-[100%] flex-col items-center justify-items-center">
                        <h4 className='capitalise text-1xl font-bold text-[#f02d34] filter drop-shadow-lg'>{val.category}</h4>
                        <button
                          type="button"
                          className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-red-200 text-sm text-black"
                        >
                          SHOP NOW
                        </button>
                      </div>
                    </a>
                  </div >
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default Stories;
