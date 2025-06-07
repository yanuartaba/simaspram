'use client';
import React, { useState } from 'react';

import ColateImg from '@/assets/collate_foto.png';
import Image from 'next/image';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import * as Data from '@/constant/doel.json';
import { DataDoelType } from '../utils/dataType';

function CariLaporan() {
  const [inputNik, setInputNik] = useState('');
  const [laporan, setLaporan] = useState<DataDoelType | null>(null);
  const [isSearch, setIsSearch] = useState(false);

  const handleSearch = () => {
    const laporans = Array.from(Data);

    const filterData = laporans.find((x) => x?.NIK === inputNik);

    if (filterData) {
      setLaporan(filterData as DataDoelType);
      setIsSearch(!isSearch);
    } else {
      setLaporan(null);
      setInputNik('');
      setIsSearch(!isSearch);
      alert('Data tidak ditemukan');
    }
  };

  return (
    <>
      <div
        id='kesra'
        className={`container-fluid relative ${
          !isSearch
            ? 'min-h-[75vh] md:min-h-full'
            : 'min-h-[120vh] md:min-h-[60vh]'
        } `}
      >
        <Image
          src={ColateImg}
          alt='Laporan Kesejahteraan Masyarakat'
          className='w-full h-64 md:h-auto z-10 object-cover'
        />
        <div
          className={`container mx-auto absolute w-7/8 2xl:w-full ${
            !isSearch ? 'top-50 md:-bottom-30' : 'bottom-15 md:-bottom-10'
          }   left-1/16 2xl:left-1/12 bg-white rounded-2xl z-10 min-h-[20vh] p-4 md:py-8 px-4 md:px-24 shadow-xl`}
        >
          <div className='w-full 2xl:w-5/6 mx-auto flex flex-col gap-4 md:flex-row justify-between items-center'>
            <p className='text-xl text-gray-800 font-semibold'>Temukan Data</p>

            <div className='flex flex-col justify-start items-center relative w-full md:w-2/3'>
              <input
                type='text'
                name='InputCari'
                onChange={(e) => setInputNik(e.target.value)}
                id=''
                placeholder='Masukan NIK KTP'
                className='w-full p-2 pl-10 rounded border-[1px] border-gray-300 text-gray-800 placeholder:text-gray-400'
              />
              <FaMagnifyingGlass className='absolute top-3 left-3 text-gray-400' />
            </div>

            <button
              onClick={handleSearch}
              className='bg-primary hover:bg-[#2e66b3] text-white py-3 px-8 rounded-xl cursor-pointer'
            >
              Cari Data
            </button>
          </div>

          {laporan === null ? (
            <p className='text-center text-gray-600 py-4'>
              Temukan Laporan kesra yang dapat kamu temui di Kelurahan Pulo
              Gebang
            </p>
          ) : (
            <>
              <table className='w-full hidden md:block bg-primary text-white rounded-xl my-4'>
                <thead>
                  <tr className='p-2'>
                    <th className='p-2'>Tanggal</th>
                    <th className='p-2'>Nama</th>
                    <th className='p-2'>NIK</th>
                    <th className='p-2'>Laporan Data</th>
                    <th className='p-2'>Alamat</th>
                    <th className='p-2'>Status</th>
                    <th className='p-2'>Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='p-2 text-center'>
                      {laporan?.Timestamp
                        ? new Intl.DateTimeFormat('id-ID', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                          }).format(new Date(laporan?.Timestamp * 1000))
                        : '-'}
                    </td>
                    <td className='p-2 text-center'>{laporan?.NAMA}</td>
                    <td className='p-2 text-center'>{laporan?.NIK}</td>
                    <td className='p-2 text-center'>{laporan?.LAPORAN_DATA}</td>
                    <td className='p-2'>{laporan?.ALAMAT}</td>
                    <td className='p-2 text-center'>
                      <p className='bg-green-500 text-white text-sm rounded p-1'>
                        Terverifikasi
                      </p>
                    </td>
                    <td className='p-2 text-center'>-</td>
                  </tr>
                </tbody>
              </table>
              <div className='block md:hidden mt-4'>
                <div className='container p-4 bg-blue-600 rounded-2xl flex flex-col gap-3'>
                  <p className='text-xl'>
                    {laporan?.Timestamp
                      ? new Intl.DateTimeFormat('id-ID', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit',
                        }).format(new Date(laporan?.Timestamp * 1000))
                      : '-'}
                  </p>
                  <p className='text-xl'>{laporan?.NAMA}</p>
                  <p className='text-xl'>{laporan?.NIK}</p>
                  <p className='text-xl'>{laporan?.LAPORAN_DATA}</p>
                  <p className='text-xl'>{laporan?.ALAMAT}</p>
                  <div className='w-full'>
                    <p className='bg-green-500 text-white text-sm rounded p-1'>
                      Terverifikasi
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CariLaporan;
