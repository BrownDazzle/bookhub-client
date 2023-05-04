import React, { useState, useEffect } from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { FlexContent } from '../components'
import Filter from '../components/utils/Filter'
import Item from '../components/utils/Item'
import Sort from '../components/utils/Sort'
import Title from '../components/utils/Title'
import { bookCategories, highlight, sneaker, toprateslaes } from '../data/data'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { categoryBooks } from '../app/CategorySlice';
import SlideCarousel from '../components/slider/SlideCarousel';


function ProductList({ ifExists }) {
    const { categories, loading, error } = useSelector((state) => state.CategorySlice || {});
    // const { categories, loading } = useSelector((state) => state.bookReducer)
    //const { categories, loading } = useSelector((state) => state.categoryReducer);
    const dispatch = useDispatch()
    const [selected, setSelected] = useState(false);
    const [filters, setFilters] = useState({});
    const [subState, setSubState] = useState("");
    const [subObj, setSubObj] = useState({});
    const [data, setData] = useState([]);
    const [sort, setSort] = useState("newest");
    const { items } = toprateslaes
    const { category } = useParams()

    const [displayCount, setDisplayCount] = useState(3);
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeCategory, setActiveCategory] = useState(0);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const handleButtonClick = (category, i) => {
        setActiveIndex(i);
        const filterObj = categories.filter(({ subCategory }) => category === subCategory)
        category === "All" ? setData(categories) : setData(filterObj)
        setActiveCategory(i)
        setSelected(true)
    };
    // console.log(endpoint)
    function handleShowMore() {
        setDisplayCount(displayCount + 3);
    }

    useEffect(() => {
        dispatch(categoryBooks(category))
    }, [dispatch, category])


    useEffect(() => {
        const subCat = bookCategories?.filter((cat) => {
            return cat.category === category
        })
        let arr = subCat[0]
        setSubObj(arr)
    }, [])

    const handleSorts = (e) => {
        const value = e.target.value;

        if (value === "asc") {
            const ascData = data?.sort((a, b) => a.price - b.price)

            setData(ascData)
        } else if (value === "desc") {
            const desData = data?.sort((a, b) => b.price - a.price)
            console.log("CAT", desData)
            setData(desData)
        }

        setSort({
            ...sort,
            [e.target.name]: value,
        });
    }



    const handleFilters = (e) => {
        const value = e.target.value;
        const filterObj = categories.filter(({ publisher }) => value === publisher)

        value === "all" ? setData(categories) : setData(filterObj)

        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

    const handleNextClick = () => {
        setActiveCategory(activeCategory === subObj?.subCategory?.length - 1 ? 0 : activeCategory + 1);
        setActiveImageIndex((prevIndex) =>
            prevIndex === subObj?.subCategory?.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevClick = () => {
        setActiveCategory(activeCategory === 0 ? subObj?.subCategory?.length - 1 : activeCategory - 1);
        setActiveImageIndex((prevIndex) =>
            prevIndex === 0 ? subObj?.subCategory?.length - 1 : prevIndex - 1
        );
    };

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScrollLeft = () => {
        setScrollPosition((prevPosition) => prevPosition - 100);
    };

    const handleScrollRight = () => {
        setScrollPosition((prevPosition) => prevPosition + 100);
    };


    return (
        <div className='nike-container'>
            <div className='flex mb-5 mt-20 items-center justify-between w-full'>
                <div className='flex  flex-col w-full'>
                    <h1 className='text-2xl mb-5 md:text-1xl font-bold text-slate-900 filter
                    drop-shadow-lg justify-items-start left-0'>
                        {category}</h1>
                    <SlideCarousel items={subObj.subCategory} handleButtonClick={handleButtonClick} activeCategory={activeCategory} handlePrevClick={handlePrevClick} handleNextClick={handleNextClick} />
                </div>
            </div>
            <div className='flex flex-row md:flex-col w-full'>
                <div className='basis-3/4'>
                    <div className='flex mb-5 items-center justify-between'>

                        <div className='flex justify-between align-center w-full'>
                            <div className='m-[20px]'>
                                <span className='mr-[20px] text-sm font-semibold'>Filter Publishers:</span>
                                <select className='p-[10px] mr-[20px] outline-none text-md' name="color" onChange={handleFilters}>
                                    <option default disabled>Publisher</option>
                                    {data?.map(({ publisher }, i) => (
                                        <option key={i}>{publisher}</option>
                                    ))}
                                </select >
                            </div>
                            <div className='m-[20px]'>
                                <span className='mr-[20px] text-sm font-semibold'>Sort Price:</span>
                                <select className='p-[10px] outline-none text-md' onChange={(e) => handleSorts(e)}>
                                    <option value="asc">Price (asc)</option>
                                    <option value="desc">Price (desc)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mb-10 mt-7 ${ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-2' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2'}`}>
                        {data?.length === 1 ? (data.slice(0, displayCount).map((item, i) => (
                            <Item {...item} key={i} ifExists={ifExists} />
                        ))) : (categories?.slice(0, displayCount).map((item, i) => (
                            <Item {...item} key={i} ifExists={ifExists} />
                        )))}
                        {data?.length === 0 && (
                            <>
                                <h4>We currently have stock for this category.
                                    Keep shopping..!
                                </h4>
                            </>
                        )}
                        {displayCount < categories?.length && (
                            <button onClick={handleShowMore}>Show More</button>
                        )}
                    </div>
                </div>
                <div id='ads' className='basis-1/4'>
                    <FlexContent endpoint={highlight} />
                </div>
            </div>
            <FlexContent endpoint={sneaker} />
            <div className='flex mb-5 mt-10 items-center'>
                <Title title={"Recycle Bin"} />
            </div>
            <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mb-10 mt-7 ${ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-2' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2'}`}>
                {items?.slice(0, displayCount).map((item, i) => (
                    <Item {...item} key={i} ifExists={ifExists} />
                ))}
                {displayCount < items.length && (
                    <button onClick={handleShowMore}>Show More</button>
                )}
            </div>
            <FlexContent endpoint={highlight} />
        </div>
    )
}

export default ProductList