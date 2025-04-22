import React from 'react';
import { Saira } from 'next/font/google';
import PetaPuloGebang from '@/assets/data/peta_pulo_gebang.png';
import IconPeta from '@/assets/data/icon_peta.png';
import IconChart from '@/assets/data/icon_chart.png';
import Image from 'next/image';

const saira = Saira({
  weight: '800',
  subsets: ['latin'],
});
function LuasWilayah() {
  return (
    <>
      <div className='container bg-primary rounded-2xl py-4 md:py-12'>
        <div className='flex flex-col justify-start items-center gap-4 md:gap-8'>
          {/* <p
            className={`heading text-2xl md:text-3xl 2xl:text-5xl font-semibold text-white ${saira.className}`}
          >
            Luas Wilayah
          </p> */}
          <div className='w-full grid grid-cols-2 justify-around gap-8'>
            <div className='col-span-1'>
              <div className=' w-full flex flex-col justify-center items-center'>
                <Image src={PetaPuloGebang} alt='Peta Pulo Gebang' />
              </div>
            </div>

            <div className='col-span-1 flex flex-col justify-center items-start gap-8'>
              <h3
                className={`text-white font-semibold text-xl md:text-2xl 2xl:text-3xl ${saira.className}`}
              >
                Wilayah Kelurahan Pulogebang
              </h3>

              <div className='flex flex-row justify-start items-start gap-8'>
                <Image src={IconPeta} alt='Icon Peta' />
                <div className='flex flex-col justify-start items-start'>
                  <p className='text-white text-sm md:text-xl 2xl:text-lg font-semibold'>
                    Luas Wilayah
                  </p>
                  <p className='text-white text-base'>
                    Kelurahan Pulo Gebang, dengan luas wilayah{' '}
                    <span className='font-semibold text-xl'>
                      685,81 hektare
                    </span>
                  </p>
                </div>
              </div>

              <div className='flex flex-row justify-start items-center gap-8'>
                <Image src={IconChart} alt='Icon Chart' />
                <div className='flex flex-col justify-start items-start'>
                  <p className='text-white text-sm md:text-xl 2xl:text-lg font-semibold'>
                    Jumlah Penduduk
                  </p>
                  <p className='text-white text-base'>
                     Dihuni oleh sebanyak{' '}
                    <span className='font-semibold text-xl'>129.172 jiwa</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LuasWilayah;
