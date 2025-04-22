import React from 'react';
import LogoJaktim from '@/assets/logo_jaktim.png';
import LogoPemprov from '@/assets/logo_pemprov_jakarta.png';
import Image from 'next/image';
import {
  FaFacebook,
  FaInstagram,
  FaSquareXTwitter,
  FaYoutube,
} from 'react-icons/fa6';

const links = [
  {
    id: 1,
    label: 'Pemerintah Provinsi DKI Jakarta',
    link: 'https://www.jakarta.go.id/',
    isExternal: true,
  },
  {
    id: 2,
    label: 'Pemerintah Kota Jakarta Timur',
    link: 'https://timur.jakarta.go.id/',
    isExternal: true,
  },
  {
    id: 3,
    label: 'Baznas DKI',
    link: 'https://baznasbazisdki.id/',
    isExternal: true,
  },
  {
    id: 4,
    label: 'Beranda',
    link: '/',
    isExternal: false,
  },
  {
    id: 5,
    label: 'Data Monografi',
    link: '/#monografi',
    isExternal: false,
  },
  {
    id: 6,
    label: 'Pencarian Data Kesra',
    link: '/#kesra',
  },
  {
    id: 7,
    label: 'Program Bantuan',
    link: '/#program',
    isExternal: false,
  },
  {
    id: 8,
    label: 'Berita Video',
    link: '/#beritavideo',
    isExternal: false,
  },
];

const sosmeds = [
  {
    id: 1,
    label: 'Facebook',
    link: 'https://www.instagram.com/siapmaspram/',
    icon: <FaFacebook className='text-xl' />,
  },
  {
    id: 2,
    label: 'Instagram',
    link: 'https://www.instagram.com/siapmaspram/',
    icon: <FaInstagram className='text-xl' />,
  },
  {
    id: 3,
    label: 'Twitter',
    link: 'https://www.instagram.com/siapmaspram/',
    icon: <FaSquareXTwitter className='text-xl' />,
  },
  {
    id: 4,
    label: 'Youtube',
    link: 'https://www.instagram.com/siapmaspram/',
    icon: <FaYoutube className='text-xl' />,
  },
];

function Footer() {
  return (
    <>
      <footer className='bg-primary'>
        <div className='container mx-auto px-8 relative'>
          <div className='w-full flex flex-col justify-between items-start gap-12 py-12'>
            <div className='w-full flex flex-row justify-between items-start'>
              <div className='w-2/12 flex flex-row justify-start items-center gap-4'>
                <Image src={LogoPemprov} alt='Logo Pemprov Jakarta' />
                <Image src={LogoJaktim} alt='Logo Jakarta Timur' />
              </div>

              <div className='w-8/12 flex flex-col justify-start items-start gap-4'>
                <p className='font-semibold'>Alamat:</p>
                <p className='text-sm w-2/3'>
                  Jl. Raya Pulo Gebang No.3, RT.6/RW.3, Pulo Gebang, Kec.
                  Cakung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta
                  13950
                </p>
                <p className='text-sm'>Telepone: 021 48700917</p>
                <p className='text-sm'>Surel: siapmaspram@gmail.com</p>
              </div>

              <div className='w-2/12 flex flex-col justify-start items-start gap-4'>
                <p className='font-semibold'>Laman terkait</p>

                {links.map((link) => {
                  if (link.isExternal) {
                    return (
                      <a
                        key={link.id}
                        href={link.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-sm'
                      >
                        {link.label}
                      </a>
                    );
                  }
                  return null;
                })}
              </div>
            </div>

            <div className='flex flex-row justify-start items-start gap-16'>
              {links.map((link) => {
                if (!link.isExternal) {
                  return (
                    <a key={link.id} href={link.link} className='text-sm'>
                      {link.label}
                    </a>
                  );
                }
                return null;
              })}
            </div>

            <div className='w-full flex flex-row justify-between items-center'>
              <p>
                Hak cipta © Simaspram 2025. Seluruh hak cipta dilindungi
                undang-undang
              </p>

              <div className='flex flex-row justify-end items-center gap-8'>
                {sosmeds.map((sosmed) => (
                  <a
                    key={sosmed.id}
                    href={sosmed.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {sosmed.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
