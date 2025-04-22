'use client';
import React, { useEffect, useState } from 'react';
import { FaChevronCircleUp } from 'react-icons/fa';

function GoTop() {
  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // use 'auto' if you don’t want animation
    });
  };

  const [position, setPosition] = useState(0);
  const [showGoTop, setshowGoTop] = useState(false);

  useEffect(() => {
    // window.addEventListener('scroll', handleVisibleButton);
    window.addEventListener('scroll', () => {
      const posY = window.pageYOffset;
      setPosition(posY);
    });
    console.log(position);
    if (position > 900) {
      return setshowGoTop(true);
    } else {
      return setshowGoTop(false);
    }
  }, [position]);
  return (
    <>
      {showGoTop && (
        <div
          onClick={() => handleToTop()}
          className='goTop bg-primary fixed bottom-4 right-4 text-white font-bold p-4 rounded-full z-50 cursor-pointer shadow'
        >
          <FaChevronCircleUp className='text-2xl' />
        </div>
      )}
    </>
  );
}

export default GoTop;
