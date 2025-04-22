// import Image from 'next/image
import BeritaVideo from './components/BeritaVideo';
import CariLaporan from './components/CariLaporan';
import DataKesra from './components/DataKesra';
import Footer from './components/Footer';
import GoTop from './components/GoTop';
import HeroImg from './components/HeroImg';
import Laporan from './components/Laporan';
import Mitra from './components/Mitra';
import Monografi from './components/Monografi';
import Navigation from './components/Navigation';
import Pengenalan from './components/Pengenalan';
import ProgramBantuan from './components/ProgramBantuan';

export default function Home() {
  return (
    <>
      {/* <div className='container-fluid relative w-full min-h-screen'> */}

      <div className='relative'>
        <GoTop />
        <Navigation />

        <HeroImg />

        <Mitra />

        <Pengenalan />

        <Laporan />

        <CariLaporan />

        <DataKesra />

        <Monografi />

        <ProgramBantuan />

        <BeritaVideo />

        <Footer />
      </div>
      {/* </div> */}
    </>
  );
}
