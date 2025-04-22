import React from 'react';
import { Saira } from 'next/font/google';

const saira = Saira({
  weight: '800',
  subsets: ['latin'],
});
function UsiaPenduduk() {
  return (
    <>
      <div className='container bg-primary rounded-2xl py-4 md:py-12'>
        <div className='flex flex-col justify-start items-center gap-4 md:gap-8'>
          <p
            className={`heading text-2xl md:text-3xl 2xl:text-5xl font-semibold text-white ${saira.className}`}
          >
            Usia Penduduk
          </p>
        </div>
      </div>
    </>
  );
}

export default UsiaPenduduk;
