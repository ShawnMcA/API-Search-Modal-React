import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs'

const QueryResultItem = props => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div>
      <button className='flex justify-center justify-between p-5 w-full focus:outline-none' onClick={() => setIsDrawerOpen(isDrawerOpen => !isDrawerOpen)}>
      <p>{ props.title }</p>
        
      <div className={`${isDrawerOpen ? 'transform rotate-180' : 'transform rotate-0'} transition`}>
        <BsChevronDown />
      </div>
      </button>
      <div className={`${isDrawerOpen ? 'flex' : 'hidden'} flex-col justify-center p-4 overflow-hidden bg-gray-100 w-full`}>
        <p className='mt-4 mb-4'>Recipe link:</p>
        <a className='mb-8 text-gray-500 text-sm' href={props.link} rel="noopener noreferrer" target='_blank'>{ props.link }</a>
        <p className='mt-4 mb-4'>Ingredients:</p>
        { props.ingredients.map(step => {
          return step.ingredients.map(ingredient => {
            return(
              <p key={ingredient.name} className='mb-4 text-gray-500 text-sm'>
                {ingredient.name}
              </p>
            )
          });
        })}
        
      </div>
    </div>
  );
}

export default QueryResultItem;