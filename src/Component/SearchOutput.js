import React from 'react';

const SearchOutput = props => {

  let searchItems;
  
  if(props.queryResults && props.queryResults.length > 0) {
    searchItems = props.queryResults.map(result => { 
      return (
        <button key={result.title} className='flex items-center w-full p-5 hover:bg-gray-100'>
          { result.title }
        </button>
      );
    });
  } else {
    searchItems = (
      <button className='flex items-center w-full p-5 hover:bg-gray-100 focus:outline-none'>
        No results...
      </button>
    );
  }

  return(
    <div className='w-full h-auto mt-10 bg-white flex-grow rounded-md shadow-inner overflow-y-auto focus:outline-none'>
      <ul>
        { searchItems }
      </ul>
    </div>
  );
}

export default SearchOutput;