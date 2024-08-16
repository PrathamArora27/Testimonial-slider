import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import reviews from './data'
import Testimonials from './components/Testimonials'


function App() {
  

  return (
    <div className='flex - flex-col  justify-center items-center bg-gray-200'>
     <h2 className='font-bold text-[30px]'>Our Testimonials</h2>

     <div className='mt-2 h-2 bg-blue-500 w-[240px] mx-auto'></div>

     <Testimonials reviews={reviews} />
     


    </div>
  );
}

export default App
