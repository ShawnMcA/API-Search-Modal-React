import React from 'react';
import { BiSearch } from 'react-icons/bi';

const SearchBar = () => {
  return(
    <div className='flex w-full h-12 bg-white rounded-md'>
      <input className='w-full h-full bg-white rounded-l-md shadow-inner p-2 focus:outline-none'>
      </input>
      <button className='flex justify-center items-center w-20 bg-green-400 rounded-r-md text-white text-xl hover:bg-green-500 shadow-inner focus:outline-none'>
        <BiSearch />
      </button>
    </div>
  );
}

export default SearchBar;