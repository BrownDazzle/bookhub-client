import React, { useEffect, useState } from "react";

function Filter() {
    const [category, setCategory] = useState("All");
    const [brand, setBrand] = useState("All");
    const [price, setPrice] = useState(3000);

    const allBrands = [
        "All",
        "Pamphlet",
        "Novel"
    ]

    return (
        <div className='w-30 '>
            <select value={brand} onChange={(e) => setBrand(e.target.value)} className='outline-none'>
                {allBrands.map((brand, index) => {
                    return (
                        <option key={index} value={brand}>
                            {brand}
                        </option>
                    );
                })}
            </select>
        </div>
    )
}

export default Filter