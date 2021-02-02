import React from 'react';
import SearchBar from './SearchBar';
import SearchOutput from './SearchOutput';

const MainApp = () => {
  return (
    <div className='w-main-app-width max-w-screen-sm h-main-app-height max-h-screen-md shadow-lg rounded-lg bg-gray-200 py-10 px-9'>
      <SearchBar />
      <SearchOutput />
    </div>
  );
}

export default MainApp;