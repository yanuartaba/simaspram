import { Saira } from 'next/font/google';
import React from 'react';
import videos from '@/constant/dataVideos';

const saira = Saira({
  weight: '800',
  subsets: ['latin'],
});

function BeritaVideo() {
  return (
    <>
      <div id='video' className='container-fluid bg-white md:py-8'>
        <div className='container mx-auto px-4 md:px-0 py-4 md:py-12'>
          <div className='flex flex-col justify-start items-center gap-4 md:gap-8 '>
            <p
              className={` w-2/3 text-center heading text-2xl md:text-3xl 2xl:text-5xl font-semibold text-[#052158] ${saira.className}`}
            >
              Berita Video
            </p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 justify-between'>
              {videos.map((video) => (
                <div
                  key={video.id}
                  className='col-span-1 cursor-pointer hover:scale-105 hover:z-10 transition-all duration-300 ease-in-out border-[1px] border-gray-300 rounded-2xl shadow-xl flex flex-col justify-start items-start gap-2'
                >
                  <div className='w-full h-60'>
                    <iframe
                      width='100%'
                      height='100%'
                      src={video.link}
                      title='YouTube video player'
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className='p-4'>
                    <p className=' text-gray-800 font-semibold'>
                      {video.title}
                    </p>
                    <p className='text-sm text-gray-600'>{video.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BeritaVideo;
