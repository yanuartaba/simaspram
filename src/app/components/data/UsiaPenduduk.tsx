import React from 'react';
// import { Saira } from 'next/font/google';
import Image from 'next/image';
// import ImgIllustrator from '@/assets/data/illustrator_2.png';
// import Icon1 from '@/assets/data/icon_penduduk_1.png';
// import Icon2 from '@/assets/data/icon_penduduk_2.png';
// import Icon3 from '@/assets/data/icon_penduduk_3.png';
// import Icon4 from '@/assets/data/icon_penduduk_4.png';
import ImgPenduduk from '@/assets/data/img_usia.png';
import ImgPendudukMobile from '@/assets/data/img_usia_mobile.png';

// const saira = Saira({
//   weight: '800',
//   subsets: ['latin'],
// });
function UsiaPenduduk() {
  return (
    <>
      {/* <div className='container bg-primary rounded-2xl '>
        <div className='flex flex-col justify-start items-center gap-4 md:gap-8'>
          <div className='w-full grid grid-cols-2 justify-around gap-8'>
            <div className='col-span-1 w-full'>
              <div className=' w-full flex flex-col justify-center items-center'>
                <Image
                  src={ImgIllustrator}
                  alt='Peta Pulo Gebang'
                  className='w-full object-cover'
                />
              </div>
            </div>

            <div className='col-span-1 flex flex-col justify-center items-start gap-8'>
              <h3
                className={`text-white font-semibold text-xl md:text-2xl 2xl:text-3xl ${saira.className}`}
              >
                Demografi Penduduk Pulo Gebang
              </h3>

              <div className='flex flex-row justify-start items-start md:gap-8 2xl:gap-24'>
                <div className='flex flex-col justify-start'>
                  <div className='flex flex-row justify-start items-center gap-8'>
                    <Image src={Icon1} alt='Icon Peta' />
                    <div className='flex flex-col justify-start items-start'>
                      <p className='text-white text-sm md:text-xl 2xl:text-lg font-semibold'>
                        0 - 19 Tahun
                      </p>
                      <p className='text-white text-base'>
                        <span className='font-semibold text-xl'>42.580</span>{' '}
                        Jiwa
                      </p>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col justify-start'>
                  <div className='flex flex-row justify-start items-center gap-8'>
                    <Image src={Icon2} alt='Icon Peta' />
                    <div className='flex flex-col justify-start items-start'>
                      <p className='text-white text-sm md:text-xl 2xl:text-lg font-semibold'>
                        20 - 39 Tahun
                      </p>
                      <p className='text-white text-base'>
                        <span className='font-semibold text-xl'>42.138</span>{' '}
                        Jiwa
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex flex-row justify-start items-center md:gap-8 2xl:gap-24'>
                <div className='flex flex-col justify-start'>
                  <div className='flex flex-row justify-start items-center gap-8'>
                    <Image src={Icon3} alt='Icon Chart' />
                    <div className='flex flex-col justify-start items-start'>
                      <p className='text-white text-sm md:text-xl 2xl:text-lg font-semibold'>
                        40 - 59 Tahun
                      </p>
                      <p className='text-white text-base'>
                        <span className='font-semibold text-xl'>32.937</span>{' '}
                        Jiwa
                      </p>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col justify-start'>
                  <div className='flex flex-row justify-start items-center gap-8'>
                    <Image src={Icon4} alt='Icon Chart' />
                    <div className='flex flex-col justify-start items-start'>
                      <p className='text-white text-sm md:text-xl 2xl:text-lg font-semibold'>
                        Diatas 60 Tahun
                      </p>
                      <p className='text-white text-base'>
                        <span className='font-semibold text-xl'>12.221</span>{' '}
                        Jiwa
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className='hidden md:block'>
        <Image
          src={ImgPenduduk}
          alt='usia penduduk card'
          className='w-full object-cover'
        />
      </div>
      <div className='block md:hidden'>
        <Image
          src={ImgPendudukMobile}
          alt='usia penduduk card'
          className='w-full object-cover'
        />
      </div>
    </>
  );
}

export default UsiaPenduduk;
