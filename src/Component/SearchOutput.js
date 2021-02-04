import React from 'react';
import QueryResultItem from './QueryResultItem';

const SearchOutput = props => {

  let searchItems;
  
  // Render query results
  if(props.queryResults && props.queryResults.length > 0) {
    searchItems = props.queryResults.map(result => { 
      return (
        <QueryResultItem key={result.title} title={result.title} link={result.href} ingredients={result.ingredients}/>
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