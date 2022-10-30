import Image from 'next/image';
const Product = () => {
  return (
    <>
      <div className='flex items-center justify-center w-auto h-auto tracking-wide'>
        <picture>
          <source srcSet='/images/mpi-site.jpeg' type='image/jpeg' />
          <Image
            alt=''
            src='/images/product.jpeg'
            className='object-cover object-bottom w-screen blur-sm h-60'
            style={{ filter: 'grayscale(20%)' }}
				width={1024}
				height={768}
          />
        </picture>
        <div className='absolute font-bold text-white underline text-7xl underline-offset-4 decoration-orange-500'>
          Produk
        </div>
      </div>
      <div className='bg-stone-200'>
        <div className='py-20'>
          <div className='pt-10 text-5xl font-bold text-center text-orange-500'>Mixa Beton</div>
          <div className='px-10 pb-10 text-xl text-center text-black'>
            <a className='font-bold underline underline-offset-2 decoration-2 decoration-orange-500'>
              Hemat
            </a>
            , Mutu Standar
            <a className='font-bold underline underline-offset-2 decoration-2 decoration-orange-500'>
              SNI
            </a>
            , Menyediakan
            <a className='font-bold underline underline-offset-2 decoration-2 decoration-orange-500'>
              Berbagai Macam
            </a>
            Mutu Beton
          </div>
          <div className='grid grid-cols-1 gap-4 mx-5 md:grid-cols-2 lg:mx-20 md:mx-10 lg:grid-cols-3'>
            <div className='relative p-4 overflow-auto bg-white hover:shadow-lg rounded-xl'>
              <Image alt="" width={500} height={500} src='/images/mpi500px.png' className='object-cover object-center w-full h-96' />
              <div className='absolute top-0 left-0 inline-block p-2 px-5 text-3xl font-extrabold text-white bg-orange-500 rounded'>
                MIXA READY MIX
              </div>
            </div>
            <div className='relative p-4 overflow-auto bg-white hover:shadow-lg rounded-xl'>
              <Image alt="" width={500} height={500} src='/images/mpi500px.png' className='object-cover object-center w-full h-96' />
              <div className='absolute top-0 left-0 inline-block p-2 px-5 text-3xl font-extrabold text-white bg-orange-500 rounded'>
                MIXA U DITCH
              </div>
            </div>
            <div className='relative p-4 overflow-auto bg-white hover:shadow-lg rounded-xl'>
              <Image alt="" width={500} height={500} src='/images/mpi500px.png' className='object-cover object-center w-full h-96' />
              <div className='absolute top-0 left-0 inline-block p-2 px-5 text-3xl font-extrabold text-white bg-orange-500 rounded'>
                BOX CULVERT
              </div>
            </div>
            <div className='relative p-4 overflow-auto bg-white lg:col-start-2 hover:shadow-lg rounded-xl'>
              <Image alt="" width={500} height={500} src='/images/mpi500px.png' className='object-cover object-center w-full h-96' />
              <div className='absolute top-0 left-0 inline-block p-2 px-5 text-3xl font-extrabold text-white bg-orange-500 rounded'>
                CONCRETE PILE
              </div>
            </div>
          </div>
        </div>
        <div className='py-10'>
          <div className='p-10 text-5xl font-bold text-center text-orange-500'>Mixa Paving</div>
          <div className='grid justify-center grid-cols-1 gap-4 mx-5 lg:mx-20 md:mx-10 md:grid-cols-2'>
            <div className='relative p-4 overflow-auto bg-white hover:shadow-lg rounded-xl'>
              <Image alt=""
                src='/images/paving/segienam.jpeg'
                className='object-cover object-center w-full h-96'
                width={763}
                height={1013}
              />
              <div className='absolute top-0 left-0 inline-block p-2 px-5 text-3xl font-extrabold text-white bg-orange-500 rounded'>
                MIXA BETON POROUS
              </div>
            </div>
            <div className='relative p-4 overflow-auto bg-white hover:shadow-lg rounded-xl'>
              <Image alt=""
                src='/images/paving/concrete.jpeg'
                className='object-cover object-center w-full h-96'
                width={1181}
                height={881}
              />  
              <div className='absolute top-0 left-0 inline-block p-2 px-5 text-3xl font-extrabold text-white bg-orange-500 rounded'>
                MIXA CONCRETE BLOCK
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
