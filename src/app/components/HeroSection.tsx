'use client';
import Image from 'next/image';

type HeaderProps = {
  toGo: () => void; // Or whatever type `toConnect` is
};

export default function HeroSection({ toGo }: HeaderProps) {

  return (
    <section className="relative py-7 px-6 bg-green-100">
      <div className="w-full bg-blue-800 rounded-4xl border-6 border-black flex flex-col px-3 py-8 items-center justify-center">
              <div className="flex items-center w-[98%] justify-center">
                <h1>New PEPU Token Claim Is Now Live. Click &apos;Claim Your PEPU&apos; Below To Navigate To The Claim Page And Claim Your Tokens </h1>
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
            <button onClick={toGo} className="bg-green-600 text-black font-bold border-4 border-black w-full h-[40px] rounded-4xl text-lg mt-3">
              Buy PEPU on Uniswap
            </button>
            <button onClick={toGo} className="bg-green-600 text-black font-bold border-4 border-black w-[60%] h-[40px] rounded-4xl text-lg mt-3">
              Claim Your PEPU
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
