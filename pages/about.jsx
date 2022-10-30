import Image from 'next/image';

const About = () => {
  return (
    <div className='flex flex-col justify-center mb-10 leading-relaxed tracking-wider text-center'>
      <div className='flex items-center justify-center w-auto mb-10 text-center h-96'>
        <Image
          alt=''
          className='object-cover object-bottom w-full h-full shadow-2xl'
          src='/images/mpi-site.jpeg'
          width={1024}
          height={768}
        />
      </div>
      <div className='mx-auto container-none lg:container'>
        <div className='mx-5 text-xl font-light text-justify md:mx-14 lg:mx-52'>
          <p className='mb-10'>
            Berawal dari sebuah usaha dalam lingkup kecil yang mempunyai pengalaman dalam bidang
            pembangunan dan pekerasan tanah, sekarang berkembang menjadi sebuah perusahaan yang
            bergerak di bidang Kontraktor Renovasi, Bangunan Baru, Interior Design dan Pekerjaan
            Landscape.
          </p>
          <p className='mb-10'>
            Komitmen PT MPI (Mixa Perkasa Indonesia) untuk menyelesaikan setiap karya konstruksi
            yang telah dipercayakan, tidak terlepas dari peran setiap anggota dalam melakukan
            perencanaan, pelaksanaan, dan pengendalian proyek dengan berbagai manajemen dan metode
            konstruksi yang efektif, efisien, serta memperhatikan standar K3 (Keselamatan Kesehatan
            Kerja) dan lingkungan kerja.
          </p>
          <p className='mb-10'>
            Dengan didukung oleh tenaga professional dan terlatih dalam bidangnya maka MPI selalu
            mengedepankan kwalitas dan kecepatan serta harga yang terbaik untuk seluruh klien MPI.
          </p>
          <p className='mb-10'>
            Kiprah MPI dalam merampungkan karya-karya konstruksi juga tidak akan berjalan dengan
            baik tanpa adanya dukungan dan kerjasama yang baik dengan seluruh mitra kerja perusahaan
            (Supplier Material, Subkontraktor, Pihak Perbankan, dan SDM yang memiliki kompetensi
            yang tinggi)
          </p>
        </div>
        <div className='mx-3 md:mx-14 lg:mx-52'>
          <div className='mb-10'>
            <div className='my-5 text-6xl font-bold tracking-wide text-orange-600'>VISI</div>
            <div className='text-xl font-light'>
              Menjadi perusahaan Kontraktor terpercaya yang dikenal akan integritas tinggi, selalu
              berinovasi dan memuaskan pelayanan pada kepuasan klien.
            </div>
          </div>
          <div className=''>
            <div className='my-5 text-6xl font-semibold tracking-wide text-orange-600'>MISI</div>
            <ul className='px-10 text-xl font-light text-left list-disc'>
              <li>
                Selalu melakukan perubahan sesuai dengan nilai-nilai perkembangan Pembangunan di
                Dunia Modern.
              </li>
              <li>
                Memberikan kepercayaan dengan berdasarkan Kualitas, ketepatan, serta Harga yang
                kompetitif.
              </li>
              <li>Memberikan kepuasan kepada klien dengan standar kualitas yang tinggi.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
