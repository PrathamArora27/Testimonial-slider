import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';



const Card = ({ review, onchange1, onchange2, onSurprise}) => {
  



  return (
    <div className='relative flex flex-col items-center bg-white p-4 rounded-lg shadow-md'>
    
      <div className='relative'>
  
        <div className='absolute w-[140px] h-[140px] bg-violet-500 rounded-full -top-12 left-1/2 transform -translate-x-1/2 -z-10'></div>
      
        <img 
          className='w-[140px] h-[140px] rounded-full border-4 border-white z-10 relative'
          src={review.image} 
          alt={review.name} 
        />
      </div>
      
      <h3 className='text-2xl font-semibold text-center mt-4'>{review.name}</h3>
      <h6 className='text-sm text-gray-600 text-center text-blue-300'>{review.job}</h6>
      <div className='text-gray-500 my-2'>
        <FaQuoteLeft />
      </div>
      <p className='text-gray-700 text-center'>{review.text}</p>
      <div className='text-gray-500 my-2'>
        <FaQuoteRight />
      </div>
      <div className='flex space-x-2 mt-4'>
        <button onClick={()=>{onchange2()}} className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>{'<'}</button>
        <button onClick={()=>{onchange1()}} className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>{'>'}</button>
        <button onClick={()=>{onSurprise()}}  className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'>Surprise</button>
      </div>
    </div>
  );
};

export default Card;
