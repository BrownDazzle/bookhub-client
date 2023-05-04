import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBooks } from '../actions/BookAction';
import { CarouselSlider, SlideCard, Cart, FlexContent, Footer, Hero, Navbar, PopularCategory, Sales, Stories } from '../components';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, footerAPI } from '../data/data.js';
import axios from "axios";




function Home({ displayCount, handleShowMore }) {
    let { books, loading } = useSelector((state) => state.bookReducer);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllBooks())
    }, []);
    if (!books) return 'No Books';

    return (
        <main className='flex flex-col gap-16 relative w-full'>
            <Hero heroapi={heroapi} />
            <Stories category={books} />
            <SlideCard ifExists items={books} />
            <FlexContent endpoint={highlight} ifExists />
            <Sales endpoint={books} displayCount={displayCount} handleShowMore={handleShowMore} />
            <FlexContent endpoint={sneaker} />

        </main>
    )
}

export default Home