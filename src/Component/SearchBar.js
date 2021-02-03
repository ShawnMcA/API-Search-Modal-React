import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const SearchBar = props => {
  const [inputData, setInputData] = useState('');

  const handleInputChange = event => {
    setInputData(event.target.value);
  }

  const handleSubmit = event => {
    const input = sanitizeInput(inputData);

    props.inputData(input);
    event.preventDefault();
  }

  const sanitizeInput = input => {
    let newInput = '';
    input = input.toLowerCase();

    for(let char of input) {
      if(char === ' ') {
        newInput += '%20';
      } else if (/^[a-z]*$/g.test(char)) {
        newInput += char;
      }
    } 
    return newInput;
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