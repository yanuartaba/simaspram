import { Saira } from 'next/font/google';
import React from 'react';
import items from '@/constant/dataPengenalan';

const saira = Saira({
  weight: '800',
  subsets: ['latin'],
});

function Pengenalan() {
  return (
    <>
      <div className='container-fluid bg-[#E6ECF6]'>
        <div className='container mx-auto py-4 md:py-12'>
          <div className='flex flex-col justify-start items-center gap-4 md:gap-8'>
            <p className='text-gray-500 font-semibold'>PENGENALAN</p>

            <p
              className={`heading text-2xl md:text-3xl 2xl:text-5xl font-semibold text-[#052158] ${saira.className}`}
            >
              Siap Mas PRAM dan Aplikasi SI DOEL
            </p>

            <div className='grid grid-cols-4 gap-8 py-6 md:py-12'>
              {items.map((item) => (
                <div
                  //   onCursorEnter={() => {}}
                  key={item.id}
                  className={`col-span-1 rounded-2xl p-2 ${
                    item.id % 2 === 1 ? 'bg-[#2e66b3]' : 'bg-primary'
                  } cursor-pointer hover:scale-150 hover:z-10 transition-all duration-300 ease-in-out`}
                >
                  <p className='text-white p-4'>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pengenalan;
