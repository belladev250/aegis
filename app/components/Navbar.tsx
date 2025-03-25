import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex justify-between bg-white p-8'>
      <Image src='/aegisLogo.png' alt='logo' height={200} width={300}/>

      <div className="space-x-6 mt-2 text-navy">
        <Link  href="">Aegis Research</Link>
        <Link href="" >Policy & Rearch</Link>
        <Link href="">Get Involved</Link>
        <Link href="">Library</Link>
        <Link href="">About</Link>
      </div>

      <div className="space-x-6 mt-2">
      <Link href="" className='text-navy'>Login</Link>
      <Link href="" className='bg-maroon text-white p-3 rounded-md'>Community</Link>
      </div>
    </div>
  );
}

export default Navbar;
