'use client';
import Image from 'next/image';


import { useEffect, useState } from 'react';

export default function ScrollingBanner() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const bannerText = "20% Token Bonus Over 20 Days";

  return (
    <div className="flex flex-row items-center gap-3 w-screen bg-red-400 text-black font-bold text-sm py-2 overflow-hidden relative">
          <div className="flex-none h-[100%] mr-4 z-10 w-[100px] px-3 bg-red-400">
               <h2 className='text-white'>BREAKING:</h2>
          </div>
          <div className='relative'>
            <div className='animate-marquee whitespace-nowrap gap-3 text-white'> 
                {bannerText}
                <Image
                  src="https://ext.same-assets.com/1127042955/3726142332.svg"
                  alt="BREAKING"
                  className="w-4 h-4"
                />
                {bannerText}
                <Image
                  src="https://ext.same-assets.com/1127042955/3726142332.svg"
                  alt="BREAKING"
                  className="w-4 h-4"
                />
                {bannerText}
                <Image
                  src="https://ext.same-assets.com/1127042955/3726142332.svg"
                  alt="BREAKING"
                  className="w-4 h-4"
                />
                {bannerText}
                <Image
                  src="https://ext.same-assets.com/1127042955/3726142332.svg"
                  alt="BREAKING"
                  className="w-4 h-4"
                />
                {bannerText}
                <Image
                  src="https://ext.same-assets.com/1127042955/3726142332.svg"
                  alt="BREAKING"
                  className="w-4 h-4"
                />
             </div>
          </div>
    </div>
  );
}