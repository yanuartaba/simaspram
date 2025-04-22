import { Saira } from 'next/font/google';
import React from 'react';
import AlurImg from '@/assets/alur.png';
import Image from 'next/image';

const saira = Saira({
  weight: '800',
  subsets: ['latin'],
});
function ProgramBantuan() {
  return (
    <>
      <div className='container-fluid bg-white md:py-8'>
        <div className='container mx-auto py-4 md:py-12'>
          <div className='flex flex-col justify-start items-center gap-4 md:gap-8 '>
            <p
              className={` w-2/3 text-center heading text-2xl md:text-3xl 2xl:text-5xl font-semibold text-[#052158] ${saira.className}`}
            >
              Alur mendapatkan bantuan Badan Amil Zakat Infaq dan Shadaqoh
            </p>

            <Image
              src={AlurImg}
              alt='Alur mendapatkan bantuan Badan Amil Zakat Infaq dan Shadaqoh'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgramBantuan;
