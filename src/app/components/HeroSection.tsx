'use client';
import Image from 'next/image';


import { useEffect, useState } from 'react';

type HeaderProps = {
  toGo: () => void; // Or whatever type `toConnect` is
};

export default function HeroSection({ toGo }: HeaderProps) {


  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 2,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-7 px-6 bg-green-100">
      <div className="w-full bg-blue-800 rounded-4xl border-6 border-black flex flex-col px-3 py-8 items-center justify-center">
              <div className="flex flex-col items-center w-[98%]">
                <div className='w-full rounded-t-lg flex items-center justify-center bg-[#5B67D0] p-2'>
                    <div className='flex flex-col items-center m-1'>   
                        <span className="text-md text-white font-bold">Days</span>
                        <span className="text-md font-bold text-white px-4 py-2 rounded">
                        {timeLeft.days.toString().padStart(2, '0')}
                        </span>
                    </div>

                    <div className='flex flex-col items-center m-1'>
                        <span className="text-md text-white font-bold">Hours</span>
                        <span className="text-md font-bold text-white px-4 py-2 rounded">
                        {timeLeft.hours.toString().padStart(2, '0')}
                        </span>
                    </div>

                    <div className='flex flex-col items-center m-1'>
                        <span className="text-md text-white font-bold">Minutes</span>
                        <span className="text-md font-bold text-white px-4 py-2 rounded">
                          {timeLeft.minutes.toString().padStart(2, '0')}
                        </span>
                    </div>

                    <div className='flex flex-col items-center m-1'>
                        <span className="text-md text-white font-bold">Seconds</span>
                        <span className="text-md font-bold text-white px-4 py-2 rounded">
                          {timeLeft.seconds.toString().padStart(2, '0')}
                        </span>
                    </div>
                
                </div>

                <div className='w-full rounded-b-lg flex items-center justify-center bg-gray-700'>
                   <p className="text-white text-lg font-bold">Until bonus ends</p>
                </div>
              </div>

          {/* Left side - Content */}
            <div className="flex flex-col items-center justify-center mt-3">
              <h1 className="text-white text-xl font-bold text-center">
                Limited Time Staking Bonus Is Live
              </h1>
              <div className="text-xl font-bold text-white">
                365% APY
              </div>
            </div>
            <button className="bg-green-600 text-black font-bold border-4 border-black w-full h-[40px] rounded-4xl text-lg mt-3">
              Buy PEPU on Uniswap
            </button>

        <div className="mt-3">
          <h3 className="text-white text-lg font-bold text-center">Centralized Exchanges</h3>
          <div className="flex flex-row justify-center items-center flex-wrap w-[100%]">
            <Image src="https://ext.same-assets.com/1127042955/734495747.png" alt="BingX" className="h-10" />
            <Image src="https://ext.same-assets.com/1127042955/1300307655.png" alt="MEXC" className="h-10" />
            <Image src="https://ext.same-assets.com/1127042955/3266785014.png" alt="BitMart" className="h-10" />
            <Image src="https://ext.same-assets.com/1127042955/1042982176.png" alt="LBank" className="h-10" />
            <Image src="https://ext.same-assets.com/1127042955/1349740309.png" alt="Upcoming" className="h-10" />
            <Image src="https://ext.same-assets.com/1127042955/2350468744.png" alt="Upcoming" className="h-10" />
          </div>
        </div>


    </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 mt-10">
            <div className="bg-blue-800 border-4 border-black rounded-4xl p-6 text-white hover:scale-105 transition-transform cursor-pointer">
              <div className="flex items-center space-x-3 mb-4">
                <Image src="https://ext.same-assets.com/1127042955/869474849.svg" alt="" className="h-8 w-8" />
                <h3 className="text-xl font-bold text-white">Migrate</h3>
              </div>
              <div className='flex flex-col items-center justify-center'>
                      <p className="text-gray-200 text-white">Convert your old $PEPU tokens to a new version on the Arbitrum Layer 2 network. This ensures you stay up to date with the latest features and compatibility</p>
                      <button onClick={toGo} className="bg-green-600 rounded-lg text-white font-bold w-[70%] h-10 mt-5 text-center">
                      Migrate
                      </button>
              </div>
            </div>

            <div className="pepe-card bg-blue-800 border-4 border-black rounded-4xl p-6 text-white hover:scale-105 transition-transform cursor-pointer">
              <div className="flex items-center space-x-3 mb-4">
                <Image src="https://ext.same-assets.com/1127042955/869474849.svg" alt="" className="h-8 w-8" />
                <h3 className="text-xl font-bold text-white">Withdraw</h3>
              </div>
              <div className='flex flex-col items-center justify-center'>
                  <p className="text-gray-200 text-white">Withdraw your $PEPU L1 & L2 staking reward</p>
                  <button onClick={toGo} className="bg-green-600 rounded-lg text-white font-bold w-[70%] h-10 mt-5">
                  Withdraw
                  </button>
              </div>
            </div>
        </div>
    </section>
  );
}