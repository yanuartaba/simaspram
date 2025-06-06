import React from 'react';
// import { Saira } from 'next/font/google';
import Image from 'next/image';
// import ImgIllustrator from '@/assets/data/illustrator_4.png';
// import Icon1 from '@/assets/data/icon_pendidikan_1.png';
// import Icon2 from '@/assets/data/icon_pendidikan_2.png';
// import Icon3 from '@/assets/data/icon_pendidikan_3.png';
// import Icon4 from '@/assets/data/icon_pendidikan_4.png';
import ImgPendidikan from '@/assets/data/img_pendidikan.png';
import ImgPendidikanMobile from '@/assets/data/img_pendidikan_mobile.png';

// const saira = Saira({
//   weight: '800',
//   subsets: ['latin'],
// });
function FasilitasPendidikan() {
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
                Fasilitas Pendidikan
              </h3>

              <div className='flex flex-row justify-start items-start md:gap-8 2xl:gap-24'>
                <div className='flex flex-col justify-start'>
                  <div className='flex flex-row justify-start items-center gap-8'>
                    <Image src={Icon1} alt='Icon Peta' />
                    <div className='flex flex-col justify-start items-start'>
                      <p className='text-white text-sm md:text-xl 2xl:text-lg font-semibold'>
                        TK/PAUD
                      </p>
                      <p className='text-white text-base'>
                        <span className='font-semibold text-xl'>17</span>{' '}
                        sekolah
                      </p>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col justify-start'>
                  <div className='flex flex-row justify-start items-center gap-8'>
                    <Image src={Icon2} alt='Icon Peta' />
                    <div className='flex flex-col justify-start items-start'>
                      <p className='text-white text-sm md:text-xl 2xl:text-lg font-semibold'>
                        Sekolah Dasar
                      </p>
                      <p className='text-white text-base'>
                        <span className='font-semibold text-xl'>40</span>{' '}
                        sekolah
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
                        SLTP
                      </p>
                      <p className='text-white text-base'>
                        <span className='font-semibold text-xl'>1`</span>{' '}
                        sekolah
                      </p>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col justify-start'>
                  <div className='flex flex-row justify-start items-center gap-8'>
                    <Image src={Icon4} alt='Icon Chart' />
                    <div className='flex flex-col justify-start items-start'>
                      <p className='text-white text-sm md:text-xl 2xl:text-lg font-semibold'>
                        SLTA
                      </p>
                      <p className='text-white text-base'>
                        <span className='font-semibold text-xl'>5</span> sekolah
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
          src={ImgPendidikan}
          alt='Pendidikan Card'
          className='w-full object-cover'
        />
      </div>
      <div className='block md:hidden'>
        <Image
          src={ImgPendidikanMobile}
          alt='Pendidikan Card'
          className='w-full object-cover'
        />
      </div>
    </>
  );
}

export default FasilitasPendidikan;
