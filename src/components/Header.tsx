import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className='bg-white shadow-md'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <div className='text-2xl font-bold text-green-600'>
          <Link href='/'>Leafly Clone</Link>
        </div>
        <nav className='space-x-4'>
          <Link href='/strains' className='text-gray-700 hover:text-green-600'>
            Strains
          </Link>
          <Link href='/news' className='text-gray-700 hover:text-green-600'>
            News
          </Link>
          <Link href='/learn' className='text-gray-700 hover:text-green-600'>
            Learn
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
