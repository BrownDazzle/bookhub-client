import React, { useState } from 'react'
import BookCard from './utils/BookCard'
import Item from './utils/Item'
import Title from './utils/Title'

const Sales = ({ ifExists, endpoint, displayCount, handleShowMore }) => {

  return (
    <>
      <div className='nike-container' id='topsales'>
        <Title title='Top Rated Sales' />
        <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}>
          {endpoint?.slice(0, displayCount).map((item, i) => (
            <Item {...item} key={i} ifExists={ifExists} />
          ))}
          {displayCount < endpoint.length && (
            <button onClick={handleShowMore}>Show More</button>
          )}
        </div>
      </div>
    </>
  )
}

export default Sales