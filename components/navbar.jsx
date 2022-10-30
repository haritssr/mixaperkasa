import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className='flex items-center justify-between py-1 mx-auto bg-orange-50/90 lg:px-10 xl:px-20'>
        <div className='ml-5 lg:ml-0'>
          {/* <img className="w-auto h-16" src="/images/mpi100px.png" /> */}
          <Link href='/'>
            <Image src='/images/mpi100px.png' alt='Mixa Logo' width={70} height={70} />
          </Link>
        </div>
        <div className='hidden space-x-5 text-2xl font-semibold text-stone-500 lg:block'>
          <Link href='/' className='hover:text-stone-800'>
            Beranda
          </Link>
          <Link href='/project' className='hover:text-stone-800'>
            Proyek
          </Link>
          <Link href='/product' className='hover:text-stone-800'>
            Produk
          </Link>
          <Link href='/about' className='hover:text-stone-800'>
            Tentang Kami
          </Link>
        </div>
        <div className='block mr-5 lg:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-10 h-10 text-zinc-700'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                className={isOpen ? 'block' : 'hidden'}
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
              <path
                className={!isOpen ? 'block' : 'hidden'}
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={` ${
          !isOpen ? 'flex mb-5' : 'hidden'
        } flex-col space-y-0 text-3xl text-center font-semibold absolute h-screen w-screen bg-orange-50 z-10 lg:hidden`}
      >
        <Link
          href='/'
          className='py-6 text-zinc-700 border-orange-200 border-y-2 hover:border-y hover:border-b-4 hover:border-orange-400 hover:bg-orange-200'
        >
          Beranda
        </Link>
        <Link
          href='/project'
          className='py-6 text-zinc-700 border-b-2 border-orange-200 hover:border-y hover:border-b-4 hover:border-orange-400 hover:bg-orange-200'
        >
          Proyek
        </Link>
        <Link
          href='/product'
          className='py-6 text-zinc-700 border-b-2 border-orange-200 hover:border-y hover:border-b-4 hover:border-orange-400 hover:bg-orange-200'
        >
          Produk
        </Link>
        <Link	
          href='/about'
          className='py-6 text-zinc-700 border-b-2 border-orange-200 hover:border-y hover:border-b-4 hover:border-orange-400 hover:bg-orange-200'
        >
          Tentang Kami
        </Link>
      </div>
    </>
  );
};

export default Navbar;
