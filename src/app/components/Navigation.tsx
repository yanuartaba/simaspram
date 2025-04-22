import React from 'react';
import LogoHeader from '@/assets/logo_header.svg';
import Image from 'next/image';
import menus from '@/constant/dataMenus';

import { Red_Hat_Display } from 'next/font/google';

const roboto = Red_Hat_Display({
  weight: '800',
  subsets: ['latin'],
});

function Navigation() {
  return (
    <>
      <nav
        id='header'
        className='fixed w-full z-100 top-0 bg-[#0343A2] text-white'
      >
        <div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2'>
          <div className='pl-4 flex items-center'>
            <a
              className='toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl'
              href='#'
            >
              <Image src={LogoHeader} alt={'Logo'} />
            </a>
          </div>
          <div className='block lg:hidden pr-4'>
            <button
              id='nav-toggle'
              className='flex items-center p-1 text-white hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
            >
              <svg
                className='fill-current h-6 w-6'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Menu</title>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
              </svg>
            </button>
          </div>

          <div
            className='w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20'
            id='nav-content'
          >
            <ul className='list-reset lg:flex justify-end flex-1 items-center'>
              {menus &&
                menus.map((menu) => (
                  <li key={menu.key} className='md:mr-3 2xl:mr-8'>
                    <a
                      className={`${roboto.className} inline-block py-2 px-4 text-white font-bold no-underline`}
                      href='#'
                    >
                      {menu?.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <hr className='border-b border-gray-100 opacity-25 my-0 py-0' />
      </nav>
    </>
  );
}

export default Navigation;
