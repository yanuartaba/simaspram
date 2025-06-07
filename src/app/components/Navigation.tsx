'use client';

import { useState } from 'react';
import LogoHeader from '@/assets/logo_header.svg';
import Image from 'next/image';
import menus from '@/constant/dataMenus';

import { Red_Hat_Display } from 'next/font/google';

const roboto = Red_Hat_Display({
  weight: '800',
  subsets: ['latin'],
});

function Navigation() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      {/* <div className='container'> */}
      <nav
        id='header'
        className='fixed w-full z-10 top-0 bg-[#0343A2] text-white px-4'
      >
        <div className='container mx-auto flex  items-center justify-between mt-0 py-2'>
          <div className='flex items-center'>
            <a
              className='toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl'
              href='#'
            >
              <Image src={LogoHeader} alt={'Logo'} className='w-40' />
            </a>
          </div>
          <div className='hidden lg:block'>
            <ul className='list-reset lg:flex justify-end flex-1 items-center'>
              {menus &&
                menus.map((menu) => (
                  <li key={menu.key} className='md:mr-3 2xl:mr-8'>
                    <a
                      className={`${roboto.className} inline-block py-2 px-4 text-white font-bold no-underline`}
                      href={`#${menu.section}`}
                    >
                      {menu?.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <div className='lg:hidden'>
            <button
              id='nav-toggle'
              className='w-full flex items-center p-1 text-white hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
              onClick={() => setShowNav(!showNav)}
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
        </div>
        {showNav && (
          <div className='lg:hidden'>
            <ul
              className='list-reset lg:flex flex-col justify-end flex-1 items-center'
              id='nav-content'
            >
              {menus &&
                menus.map((menu) => (
                  <li key={menu.key} className='md:mr-3 2xl:mr-8'>
                    <a
                      className={`${roboto.className} inline-block py-2 px-4 text-white font-bold no-underline`}
                      href={`#${menu.section}`}
                      onClick={() => setShowNav(!showNav)}
                    >
                      {menu?.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        )}
        <hr className='border-b border-gray-100 opacity-25 my-0 py-0' />
      </nav>
      {/* </div> */}
    </>
  );
}

export default Navigation;
