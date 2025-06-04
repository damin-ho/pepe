'use client';
import Image from 'next/image';

type HeaderProps = {
  toGo: () => void; // Or whatever type `toConnect` is
};

export default function Header({ toGo }: HeaderProps) {

  return (
    <header className="relative z-10 w-full">
      <div className="px-3 py-2 bg-green-100 flex justify-between items-center w-full relative">
          <Image
            src="https://ext.same-assets.com/1127042955/3783633550.svg"
            alt="Pepe Unchained Logo"
            className="h-12 w-40"
          />


          <button onClick={toGo} className="bg-green-600 rounded-lg text-white font-bold w-[30%] h-10 border-2 border-green-900">
              Connect
            </button>
      </div>
          
    </header>
  );
}