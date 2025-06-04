'use client';

export default function EcosystemSection() {
  const features = [
    {
      title: "DEX",
      description: "Swap tokens on our lightning-fast decentralized exchange.",
      icon: "https://ext.same-assets.com/1127042955/869474849.svg"
    },
    {
      title: "Bridge",
      description: "Move between chains with Pepes secure bridge solution.",
      icon: "https://ext.same-assets.com/1127042955/869474849.svg"
    },
    {
      title: "Block Explorer",
      description: "Follow transactions and verify everything with our block explorer.",
      icon: "https://ext.same-assets.com/1127042955/869474849.svg"
    },
    {
      title: "Pepu Guide",
      description: "Step-by-step guide to navigate and maximize Pepe Universe features.",
      icon: "https://ext.same-assets.com/1127042955/869474849.svg"
    },
    {
      title: "Pump Pad",
      description: "The all new token launchpad that allows you to launch and buy meme coins in just a few clicks.",
      icon: "https://ext.same-assets.com/1127042955/869474849.svg"
    }
  ];

  return (
    <section id="ecosystem" className="relative py-3 px-6 bg-green-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="text-black text-2xl font-bold">
              The Pepe Unchained Layer 2 Ecosystem is LIVE!
            </span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={feature.title} className="pepe-card bg-blue-800 border-4 border-black rounded-4xl p-6 text-white hover:scale-105 transition-transform cursor-pointer">
              <div className="flex items-center space-x-3 mb-4">
                <img src={feature.icon} alt={feature.title} className="h-8 w-8" />
                <h3 className="text-xl font-bold text-black">{feature.title}</h3>
              </div>
              <p className="text-gray-200 text-black">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <span className="text-black text-2xl font-bold">
              Better speed. Better gains. Same delicious Pepe flavor.
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="flex items-center justify-center space-x-2 text-white">
              <img
                src="https://ext.same-assets.com/1127042955/521753285.svg"
                alt="Check"
                className="h-6 w-6"
              />
              <span className="font-semibold text-black">Instant bridging between ETH and Pepe Chain</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white">
              <img
                src="https://ext.same-assets.com/1127042955/521753285.svg"
                alt="Check"
                className="h-6 w-6"
              />
              <span className="font-semibold text-black">Lowest transaction fees</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white">
              <img
                src="https://ext.same-assets.com/1127042955/521753285.svg"
                alt="Check"
                className="h-6 w-6"
              />
              <span className="font-semibold text-black">Higher Volume Capacity 100x faster than ETH</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white">
              <img
                src="https://ext.same-assets.com/1127042955/521753285.svg"
                alt="Check"
                className="h-6 w-6"
              />
              <span className="font-semibold text-black">Dedicated Block Explorer</span>
            </div>
          </div>
        </div>

        {/* Migration Notice */}
        <div className="text-center">
          <div className="bg-blue-800 border-2 flex flex-col gap-3 items-center justify-center border-blue-100 rounded-4xl p-8 max-w-2xl mx-auto">
            <h3 className="text-white text-2xl font-bold">We're Migrating!</h3>
            <button className="bg-green-600 rounded-lg text-white font-bold w-[70%] h-10">
              Read Article
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}