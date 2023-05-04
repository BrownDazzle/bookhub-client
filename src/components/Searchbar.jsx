import React, { useState } from 'react';
import { } from 'react-router-dom';
import { ChevronDoubleLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { FiSearch } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { searchBook } from '../actions/BookAction';

const Searchbar = ({ setOpenSearchToggle }) => {
  const searchRes = useSelector((state) => state.bookReducer.searchRes)
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(searchBook(searchTerm))
  };

  return (
    <>
      <div className='grid items-center justify-end cursor-pointer w-full pt-4 pr-5' onClick={() => setOpenSearchToggle(false)}>
        <XMarkIcon className='w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]' />
      </div>
      <form onSubmit={handleSubmit} autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">
        <div className="flex flex-row justify-start items-center">
          <FiSearch aria-hidden="true" className="w-5 h-5 ml-4" />
          <input
            name="search-field"
            autoComplete="on"
            id="search-field"
            className="flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-slate-900 p-4"
            placeholder="Search for books"
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='py-[5px] px-[4px] mr-5 rounded-[5px] border-none text-[10px] uppercase bg-[#f02d34] text-[#fff] cursor-pointer scale-[1.2] transition-transform duration-[0.5s] ease-in-out' type='submit'>Search</button>
        </div>
      </form>
      <hr />
      <div className="flex flex-col px-20">
        <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
          {searchRes?.map((book, i) => (
            <a href={`/book/${book._id}`} key={i}>
              <p className='font-medium text-xl'>{book.title}</p>
              <p>{book.publisher}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Searchbar;
