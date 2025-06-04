'use client';

import { useState } from "react";

type HeaderProps = {
  toGo: () => void; // Or whatever type `toConnect` is
};

export default function Header({ toGo }: HeaderProps) {


    const [dropDown , setDropdown] = useState(false)

  return (
    <header className="relative z-10 w-full">
      <div className="px-3 py-2 bg-green-100 flex justify-between items-center w-full relative">
          <img
            src="https://ext.same-assets.com/1127042955/3783633550.svg"
            alt="Pepe Unchained Logo"
            className="h-12 w-40"
          />


          <button onClick={toGo} className="bg-green-600 rounded-lg text-white font-bold w-[30%] h-10 border-2 border-green-900">
              Connect
            </button>


          
        {/* <img
            src="https://ext.same-assets.com/1127042955/2563901416.svg"
            alt="Menu"
            className="h-8 w-14 md:hidden"
            onClick={()=> setDropdown(!dropDown)}
        />
         

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#ecosystem" className="text-black hover:text-green-400 transition-colors font-semibold">
            Ecosystem
          </a>
          <a href="#about" className="text-black hover:text-green-400 transition-colors font-semibold">
            About
          </a>
          <a href="#pump-pad" className="text-black hover:text-green-400 transition-colors font-semibold">
            Pump Pad
          </a>
          <a href="#development" className="text-black hover:text-green-400 transition-colors font-semibold">
            Development
          </a>
          <a href="#tokenomics" className="text-black hover:text-green-400 transition-colors font-semibold">
            Tokenomics
          </a>
        </nav> */}



        {/* <div className="flex items-center space-x-4">
          <button className="pepe-button text-white font-bold px-6 py-2 text-sm">
          Buy $PEPU
          </button>
          </div> */}
      </div>
          {/* <nav className={`lg:hidden ${dropDown ? ' flex flex-col gap-2 block' : 'hidden'} p-4 bg-green-100 h-auto`}>
            <a href="#ecosystem" className="text-black hover:text-green-400 transition-colors font-semibold">
              Ecosystem
            </a>
            <a href="#about" className="text-black hover:text-green-400 transition-colors font-semibold">
              About
            </a>
            <a href="#pump-pad" className="text-black hover:text-green-400 transition-colors font-semibold">
              Pump Pad
            </a>
            <a href="#development" className="text-black hover:text-green-400 transition-colors font-semibold">
              Development
            </a>
            <a href="#tokenomics" className="text-black hover:text-green-400 transition-colors font-semibold">
              Tokenomics
            </a>
          </nav> */}
    </header>
  );
}