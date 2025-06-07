import React from 'react';
import IlustratorBuilding from '@/assets/illustrate_2.png';
// import PakGub from '@/assets/pak_gub.svg';
import AsnImg from '@/assets/asn.png';

import Image from 'next/image';

import { Saira } from 'next/font/google';
import { TbChevronsDown } from 'react-icons/tb';

const saira = Saira({
  weight: '800',
  subsets: ['latin'],
});

function HeroImg() {
  return (
    <>
      <div
        id='home'
        className='h-[100vh] md:h-[100vh] bg-primary w-full pt-14 relative z-0'
      >
        <div className='container mx-auto px-8 h-full'>
          <div className='grid grid-cols-1 h-full '>
            <div className='col-span-1 flex flex-col justify-start items-center  gap-4 md:gap-12 md:py-12 2xl:py-20 px-4 md:px-12'>
              <p
                className={`'heading mx-auto pt-4 md:pt-0 text-3xl md:text-4xl 2xl:text-6xl text-white font-semibold ${saira.className}`}
              >
                SIAP MAS PRAM dan SI DOEL
              </p>

              <div className='flex flex-col justify-center items-center gap-8'>
                <p className='text-white mx-auto text-xl md:text-2xl 2xl:text-4xl font-bold w-full '>
                  Pelayanan Masyarakat Berbasis Teknologi Informasi
                </p>
                <div className='px-8 py-4 mx-auto border-2 border-white rounded-full flex flex-row justify-center items-center gap-2 hover:bg-white hover:text-primary transition-all duration-300 ease-in-out cursor-pointer'>
                  <p>Pengenalan Lebih Lanjut</p> <TbChevronsDown />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container mx-auto'>
          <Image
            src={IlustratorBuilding}
            alt='Jakarta Building'
            className='absolute bottom-0 left-1/2 md:left-1/2 transform -translate-x-1/2 w-96 md:w-3/4 z-0'
          />
          <Image
            src={AsnImg}
            alt='Pak Pram dan Mas Doel'
            className='absolute bottom-0 md:right-1/6 z-10 w- md:w-3/10'
          />
        </div>
      </div>
    </>
  );
}

export default HeroImg;
