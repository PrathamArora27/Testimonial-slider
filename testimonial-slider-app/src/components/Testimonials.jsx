import React, { useState } from 'react'
import Card from './Card'

const Testimonials = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredCard = reviews[currentIndex];

  const handleForward = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % reviews.length); 
  };

  const handleBackward = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const handleSurprise = ()=> {
    let randomNumber = Math.floor(Math.random()*((reviews.length-1) - 0 +1)) + 0;
    setCurrentIndex(randomNumber);
  }

  
  return (
    <div>
      
        
          <Card review={filteredCard} onchange1={handleForward} onchange2={handleBackward} onSurprise={handleSurprise} />
       
      
    </div>
  )
}

export default Testimonials
