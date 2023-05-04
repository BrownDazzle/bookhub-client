import React from 'react'
import Searchbar from './Searchbar'

function Search({ setOpenSearchToggle }) {
    return (
        <div className={`fixed pt-10 flex justify-center bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250] visible translate-x-0"
           `}>
            <div className={`rounded-xl blur-effect-theme duration-500 h-screen max-w-xl w-full absolute opacity-130 visible translate-x-0"
           `}>
                <Searchbar setOpenSearchToggle={setOpenSearchToggle} />
            </div>
        </div>
    )
}

export default Search