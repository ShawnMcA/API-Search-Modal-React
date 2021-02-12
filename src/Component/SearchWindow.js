import React, { useEffect, useState, useRef } from 'react';
import SearchBar from './SearchBar';
import SearchOutput from './SearchOutput';

const MainApp = () => {
  const [queryValue, setQueryValue] = useState('');
  const [queryResults, setQueryResults] = useState();
  const loaded = useRef(false);

  const URL = 'https://api.spoonacular.com/recipes/complexSearch';

  const queryAPI = (url, queryValue) => {
    fetch(url + '?query=' + queryValue + '&addRecipeInformation=true&instructionsRequired=true&apiKey=' + process.env.REACT_APP_API_KEY) // TODO: Prepend actual url. Remove proxy from package.json
    .then(res => res.json())
    .then(result => {
        setQueryResults(result.results);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  // if user sends blank form, returns no results...
  useEffect(() => {
    if(!queryValue) {
      setQueryResults('');
    }
  }, [queryValue]);

  // Query API
  useEffect(() => {
    if(loaded.current && queryValue) {
      queryAPI(URL, queryValue);
    } else {
      loaded.current = true;
    } 
  }, [queryValue]);

  // Display Results
  useEffect(() => {
    console.log(queryResults);
  }, [queryResults]);

  return (
    <div className='flex flex-col w-main-app-width max-w-screen-sm h-main-app-height max-h-screen-md shadow-lg rounded-lg bg-gray-200 py-10 px-9'>
      <SearchBar inputData={setQueryValue} />
      <SearchOutput queryResults={queryResults}/>
    </div>
  );
}

export default MainApp;