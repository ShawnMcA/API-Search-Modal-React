import React from 'react';

const SearchOutput = props => {

  let searchItems;
  
  if(props.queryResults && props.queryResults.length > 0) {
    searchItems = props.queryResults.map(result => { 
      return (
        <>
          <button key={result.title} className='flex items-center w-full p-5 focus:outline-none'>
            { result.title }
          </button>
          <div key={result.title} className='flex column items-center bg-gray-100 w-full p-5'>Hello, this is the link</div>
        </>
      );
    });
  } else {
    searchItems = (
      <div className='flex items-center w-full p-5'>
        No results...
      </div>
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