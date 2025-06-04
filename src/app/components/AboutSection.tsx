'use client';
import Image from 'next/image';


export default function AboutSection() {
  return (
      <div className="w-full py-6 px-3 bg-green-100 mt-0">
        {/* Hero Story */}
        <div className="text-center">
          <div className="flex justify-center gap-2">
            <Image
              src="https://ext.same-assets.com/1127042955/1550868957.gif"
              alt="Pepe Hero Animation"
              className="h-90 w-40"
            />
          <p className="text-black text-sm h-25 rounded-tl-4xl rounded-br-4xl flex items-center justify-center bg-yellow-500 border-2 border-black p-3">
            Pepe was a prisoner, chained to his old, clunky Layer ONE server room. Until...
          </p>
          </div>
        </div>

        {/* About Content */}
        <div className="flex flex-col lg:grid-cols-2 gap-3 items-center mt-6">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-black text-center">About Pepe Unchained</h2>
            <div className="space-y-4 text-black text-lg px-2">
              <div className="">
                <p>
                  The future of meme coins. A Layer 2 blockchain built for Speed, Security, Low Fees
                  and of course—Memes.
                </p>
              </div>
              <div className="">
                <p>
                  $PEPU token powers the entire ecosystem. You&apos;re early enough to witness a new golden age of Meme Coins.
                  With Pepe in his rightful place as King, and the <span className="font-bold">Pepe Unchained Layer 2</span> — his Kingdom.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full p-3">
            <h3 className="text-3xl font-bold text-black text-center">Layer 2 Ecosystem</h3>
            <div className="flex justify-between items-center w-full mt-5">
            <p className="text-black text-sm h-15 w-auto rounded-tl-2xl rounded-br-2xl flex items-center justify-center bg-yellow-500 border-2 border-black p-3">He devised a Giga Brain Plan</p>
              <Image
                src="https://ext.same-assets.com/1127042955/3443036877.gif"
                alt="Giga Brain Animation"
                className="h-80 w-50"
              />
            </div>
          </div>
        </div>

        {/* Ecosystem Features */}
        <div className="">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Pepe Unchained</h2>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <p className="text-black text-lg">
                Your gateway to Pepe&apos;s decentralized world. Explore trading, bridging, staking, and more with ease.
                Join the community to stay up to date on all new features.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { title: "DEX", description: "Swap tokens on our lightning-fast decentralized exchange." },
              { title: "Bridge", description: "Move between chains with Pepe's secure bridge solution." },
              { title: "Block Explorer", description: "Follow transactions and verify everything with our block explorer." },
              { title: "Staking", description: "Put your tokens to work and grow your assets through staking." },
              { title: "Dev Grant", description: "Join the revolution! Sign up to build on Pepe Unchained." },
              { title: "More to Come...", description: "New features launching soon! Stay tuned and be part of the journey." }
            ].map((feature) => (
              <div key={feature.title} className="bg-blue-800 border-2 border-blue-100 rounded-4xl p-6 text-white text-center">
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="https://ext.same-assets.com/1127042955/2995025178.png"
                alt="Social"
                className="h-40 w-50"
              />
                <Image
                  src="https://ext.same-assets.com/1127042955/2888647494.svg"
                  alt="Icon"
                  className="h-40 w-50 -mt-[30px]"
                />
            </div>
            <p className="text-black text-xl font-semi-bold mt-10">
              He Built His Own Chain: Pepe Unchained. A State-Of-The-Art Layer 2 Ecosystem
            </p>
          </div>
        </div>
      </div>
  );
}