// Import Swiper React components
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import "./styles.css";

// import required modules
import { EffectFade, Autoplay, Navigation } from 'swiper';
import Image from 'next/image';

const Home = () => {
  return (
    <div>
      <div className='relative flex items-center content-center justify-center w-auto h-full'>
        <Swiper
          style={{
            '--swiper-navigation-color': '#DFE0DF',
            '--swiper-pagination-color': '#DFE0DF',
            '--swiper-navigation-size': '50px',
            height: '40rem',
          }}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          effect={'fade'}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[EffectFade, Autoplay, Navigation]}
          className='z-0 items-center content-center w-full mx-10 text-center shadow-2xl mySwiper'
        >
          <SwiperSlide>
            <Image
              alt=''
              className='object-cover object-center w-screen h-screen'
              src='/images/mixa01.jpeg'
				  width={1280}
				  height={960}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt=''
              className='object-cover object-center w-screen h-screen'
              src='/images/mixa02.jpeg'
				  width={1280}
				  height={960}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='flex flex-col-reverse items-stretch justify-center w-auto py-20 space-x-4 tracking-wide md:py-24 lg:py-36 lg:flex-row'>
        <div className='grid content-center gap-5 p-5 mx-6 lg:mx-0 lg:w-3/5'>
          <div className='text-6xl font-semibold tracking-widest capitalize text-stone-800'>
            tentang MIXA
          </div>
          <hr className='h-1 text-orange-500 bg-orange-500 rounded-full w-96' />
          <div className='text-5xl leading-tight text-stone-700/90'>
            PT MIXA Perkasa Indonesia adalah perusahaan yang bergerak di bidang stuktur dan beton.
          </div>
          <div className='mt-10'>
            <Link
              href='/about'
              className='p-5 text-xl font-medium leading-tight tracking-widest transition rounded-lg bg-stone-300/90 text-stone-800/90 hover:bg-stone-400/80 duration-0 hover:duration-300'
            >
              Selengkapnya
            </Link>
          </div>
        </div>
        <div className='hidden w-auto lg:block'>
          <Image
            src='/images/kantor.png'
            alt='Kantor MPI'
            width='380'
            height='500'
            className='object-cover object-center rounded-lg shadow-lg h-96'
            layout='fixed'
            objectfit='cover'
          />

          {/* <img src="https://picsum.photos/200" alt="random" className="rounded-lg shadow-lg h-96" /> */}
        </div>
      </div>
      <div className='pt-10'>
        <div className='flex flex-col items-center justify-center text-center'>
          <div className='text-4xl font-light tracking-wider uppercase text-stone-800'>Lokasi</div>
          <div className='py-2 pb-10'>
            <hr className='w-48 h-1 text-orange-500 bg-orange-500 rounded-full' />
          </div>
        </div>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d505.1341227572045!2d106.70406578313826!3d-6.274443064078472!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x776d5184b4a01d34!2sPT%20Mixa%20Perkasa%20Indonesia!5e0!3m2!1sid!2sid!4v1643777627807!5m2!1sid!2sid'
          className='w-full border-none'
          style={{ height: '32rem' }}
          allowFullScreen={true}
          loading={'lazy'}
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
