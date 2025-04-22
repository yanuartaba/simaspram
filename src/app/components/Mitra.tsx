import React from 'react';
import { Saira } from 'next/font/google';
import Image from 'next/image';
import MitraImg from '@/assets/mitra.png';

const saira = Saira({
  weight: '800',
  subsets: ['latin'],
});

function Mitra() {
  return (
    <>
      <div className='container mx-auto bg-white'>
        <div className='flex flex-col justify-start items-center gap-12  py-4 md:py-12'>
          <h1
            className={`Headding text-2xl md:text-3xl 2xl:text-5xl font-semibold text-gray-800 ${saira.className}`}
          >
            Mitra Kerjasama
          </h1>

          <Image src={MitraImg} alt='Mitra Kerjasama' />
        </div>
      </div>
    </>
  );
}

export default Mitra;
