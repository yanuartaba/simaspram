'use client';
import React from 'react';
import { Saira } from 'next/font/google';
import LuasWilayah from './data/LuasWilayah';
import UsiaPenduduk from './data/UsiaPenduduk';
import FasilitasUmum from './data/FasilitasUmum';
import TempatIbadah from './data/TempatIbadah';
import FasilitasPendidikan from './data/FasilitasPendidikan';
import Ekonomi from './data/Ekonomi';

const saira = Saira({
  weight: '800',
  subsets: ['latin'],
});

const tabs = [
  { id: 1, label: 'Luas Wilayah', comp: <LuasWilayah /> },
  { id: 2, label: 'Usia Penduduk', comp: <UsiaPenduduk /> },
  { id: 3, label: 'Fasilitas Umum', comp: <FasilitasUmum /> },
  { id: 4, label: 'Tempat Ibadah', comp: <TempatIbadah /> },
  { id: 5, label: 'Fasilitas Pendidikan', comp: <FasilitasPendidikan /> },
  { id: 6, label: 'Ekonomi', comp: <Ekonomi /> },
];

function Monografi() {
  const [activeTab, setActiveTab] = React.useState(1);

  return (
    <>
      <div className='container-fluid bg-[#E6ECF6] md:py-8'>
        <div className='container bg-[#E6ECF6] mx-auto py-4 md:py-12'>
          <div className='flex flex-col justify-start items-center gap-4 md:gap-8'>
            <p
              className={`heading text-2xl md:text-3xl 2xl:text-5xl font-semibold text-[#052158] ${saira.className}`}
            >
              Data Monografi
            </p>

            <p className='roboto text-gray-700 w-1/2 text-center text-xl'>
              Berbagai data yang dapat kamu pilih
            </p>

            <div className='p-4 mx-auto'>
              <select
                name='selectedTab'
                className='flex md:hidden w-96 bg-white text-gray-700 text-xl py-4 px-4 rounded-xl'
              >
                {tabs.map((tab, idx) => (
                  <option
                    key={idx}
                    // value={tab.comp}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='hidden md:flex flex-row justity-between items-center gap-8'>
            <div className='w-full hidden md:flex flex-row justify-start items-center gap-4 py-6 md:py-12'>
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex flex-col justify-start items-center p-2 gap-2 cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-primary text-gray-100 rounded-xl font-semibold'
                      : 'text-gray-800'
                  }`}
                >
                  <p className=''>{tab.label}</p>{' '}
                  {/* Ganti dengan label yang sesuai */}
                </div>
              ))}
            </div>
          </div>

          {activeTab && (
            <div className='container mx-auto'>{tabs[activeTab - 1].comp}</div>
          )}
        </div>
        <div className='container mx-auto'></div>
      </div>
    </>
  );
}

export default Monografi;
