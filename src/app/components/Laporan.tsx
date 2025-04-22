import { Saira } from 'next/font/google';
import React from 'react';

const saira = Saira({
  weight: '800',
  subsets: ['latin'],
});

function Laporan() {
  return (
    <>
      <div className='container-fluid bg-white md:py-8'>
        <div className='container mx-auto py-4 md:py-12'>
          <div className='flex flex-col justify-start items-center gap-4 md:gap-8'>
            <p
              className={`heading text-2xl md:text-3xl 2xl:text-5xl font-semibold text-[#052158] ${saira.className}`}
            >
              Laporan Kesejahteraan Masyarakat
            </p>

            <p className='roboto text-gray-700 w-1/2 text-center text-xl'>
              Warga dapat membuat laporan terkait masalah atau kejadian yang
              terjadi di wilayah tempat tinggal mereka, seperti kesejahteraan
              masyarakat melalui tombol dibawah ini.
            </p>

            <button className='bg-primary hover:bg-[#2e66b3] text-white py-3 px-8 rounded-xl cursor-pointer'>
              Buat Laporan
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Laporan;
