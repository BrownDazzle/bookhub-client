import React, { useState } from 'react'

function Sort() {
    const [sort, setSort] = useState("latest");

    return (
        <div className='w-30'>
            <label>Sort by:</label>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="latest">Latest</option>
                <option value="lowest-price">Lowest Price</option>
                <option value="highest-price">Highest Price</option>
                <option value="a-z">A - Z</option>
                <option value="z-a">Z - A</option>
            </select>
        </div>

    )
}

export default Sort