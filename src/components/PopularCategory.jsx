import React from 'react'
import CatItem from './utils/CatItem'
import Title from './utils/Title'
import ProductDetailsCarousel from './ProductDetailsCarousel';

const PopularCategory = ({ ifExists, endpoint: { title, items } }) => {
    // console.log(endpoint)
    return (
        <>
            <div className='flex items-center justify-center w-full h-600'>
                <ProductDetailsCarousel items={items} ifExists={ifExists} />
            </div>
        </>
    )
}

export default PopularCategory  