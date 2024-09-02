import Head from 'next/head';

const Page: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Strains | Leafly Clone</title>
        <meta
          name='description'
          content='Explore various cannabis strains on Leafly Clone'
        />
      </Head>
      <main className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold text-gray-900'>Strains</h1>
        <p className='mt-4 text-gray-700'>
          Explore various cannabis strains. This page will display a list of
          strains with detailed information about each one.
        </p>
        {/* Placeholder for strains list */}
        <div className='mt-8'>
          <div className='bg-white shadow-md rounded-lg p-4 mb-4'>
            <h2 className='text-2xl font-semibold text-gray-800'>
              Strain Name
            </h2>
            <p className='text-gray-600'>Description of the strain.</p>
          </div>
          <div className='bg-white shadow-md rounded-lg p-4 mb-4'>
            <h2 className='text-2xl font-semibold text-gray-800'>
              Strain Name
            </h2>
            <p className='text-gray-600'>Description of the strain.</p>
          </div>
          {/* Add more strain cards as needed */}
        </div>
      </main>
    </div>
  );
};

export default Page;
