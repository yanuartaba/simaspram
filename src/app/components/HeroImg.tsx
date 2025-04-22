import React from 'react';
import IlustratorBuilding from '@/assets/illustrate.png';
import PakGub from '@/assets/pak_gub.svg';
import Image from 'next/image';

import { Saira } from 'next/font/google';

const saira = Saira({
  weight: '800',
  subsets: ['latin'],
});

function HeroImg() {
  return (
    <>
      <div className='h-[80vh] md:h-[99vh] bg-primary w-full pt-24 relative z-0'>
        <div className='container mx-auto px-8 h-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 h-full '>
            <div className='col-span-1 flex flex-col justify-start gap-8 md:gap-20 md:py-12 2xl:py-40 px-4 md:px-12'>
              <p
                className={`'heading text-3xl md:text-4xl 2xl:text-6xl text-white font-semibold ${saira.className}`}
              >
                SIAP MAS PRAM dan SI DOEL
              </p>

              <div className='flex flex-col justify-start gap-8'>
                <p className='text-white text-xl md:text-2xl font-bold w-full md:w-2/3'>
                  Pelayanan Masyarakat Berbasis Teknologi Informasi
                </p>
                <p className='text-white'>Pengenalan Lebih Lanjut</p>
              </div>
            </div>
            <div className=' col-span-1 flex flex-col justify-end'>
              <Image
                src={PakGub}
                alt='Pak Pram dan Mas Doel'
                className='w-full z-10 md:h-7/8'
              />
            </div>
          </div>
        </div>
        <Image
          src={IlustratorBuilding}
          alt='Jakarta Building'
          className='absolute bottom-0 w-full z-0'
        />
      </div>
    </>
  );
}

export default HeroImg;
