import React from 'react';

import { Saira } from 'next/font/google';

import Datas from '@/constant/dataDummy';

const saira = Saira({
  weight: '800',
  subsets: ['latin'],
});

function DataKesra() {
  return (
    <>
      <div className='container-fluid bg-white px-4 md:px-0 md:py-8 md:pt-20'>
        <div className='container mx-auto py-4 md:py-12'>
          <div className='flex flex-col justify-start items-center gap-4 md:gap-8'>
            <p
              className={`heading text-2xl md:text-3xl 2xl:text-5xl font-semibold text-center text-[#052158] ${saira.className}`}
            >
              Data Kesejahteraan Masyarakat
            </p>

            <p className='roboto text-gray-700 w-1/2 text-center text-xl'>
              Status Data terakhir tanggal 16 April 2025
            </p>

            <div className='grid grid-cols-2 md:grid-cols-5 gap-8 py-6 md:py-12'>
              {Datas.map((data) => (
                <div
                  key={data.id}
                  className='cols-span-1 bg-primary rounded-xl p-2 md:p-6 flex flex-col justify-between items-center gap-2 opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out'
                >
                  <p className='text-white text-center'>{data.label}</p>
                  <p className='text-4xl font-bold'>{data.total}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataKesra;
