import React, { useEffect, useState, useRef } from 'react';
import SearchBar from './SearchBar';
import SearchOutput from './SearchOutput';

const MainApp = () => {
  const [queryValue, setQueryValue] = useState('');
  const loaded = useRef(false);

  useEffect(() => {
    if(loaded.current) {
      queryRecipePuppy();
    } else {
      loaded.current = true;
    } 
  }, [queryValue]);

  return (
    <div className='flex flex-col w-main-app-width max-w-screen-sm h-main-app-height max-h-screen-md shadow-lg rounded-lg bg-gray-200 py-10 px-9'>
      <SearchBar inputData={setQueryValue} />
      <SearchOutput />
    </div>
  );
}

export default MainApp;