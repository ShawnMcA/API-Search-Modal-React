import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const SearchBar = props => {
  const [inputData, setInputData] = useState('');

  const handleInputChange = event => {
    setInputData(event.target.value);
  }

  const handleSubmit = event => {
    props.inputData(inputData);
    setInputData('');
    event.preventDefault();
  }

  return(
    <form className='flex w-full h-12 bg-white rounded-md' onSubmit={handleSubmit}>
      <input className='w-full h-full bg-white rounded-l-md shadow-inner py-2 px-3 focus:outline-none' value={inputData} onChange={handleInputChange}>
      </input>
      <button className='flex justify-center items-center w-20 bg-green-400 rounded-r-md text-white text-xl hover:bg-green-500 shadow-inner focus:outline-none'>
        <BiSearch />
      </button>
    </form>
  );
}

export default SearchBar;