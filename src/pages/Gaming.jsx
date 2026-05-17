import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Monitor,
  HardDrive,
  ShoppingCart,
  Star,
  Zap,
} from "lucide-react";

const Gaming = () => {
  const gamingPCs = [
    {
      title: "RTX Beast Pro",
      price: "$2499",
      image:
        "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=900&auto=format&fit=crop",
      processor: "Intel Core i9",
      gpu: "RTX 4090",
      ram: "32GB RAM",
    },

    {
      title: "Shadow Gaming X",
      price: "$1899",
      image:
        "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=900&auto=format&fit=crop",
      processor: "Ryzen 9",
      gpu: "RTX 4080",
      ram: "32GB RAM",
    },

    {
      title: "Cyber Storm",
      price: "$1699",
      image:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&auto=format&fit=crop",
      processor: "Intel Core i7",
      gpu: "RTX 4070",
      ram: "16GB RAM",
    },

    {
      title: "Neon Fury",
      price: "$2199",
      image:
        "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=900&auto=format&fit=crop",
      processor: "Ryzen 7",
      gpu: "RTX 4080",
      ram: "32GB RAM",
    },

    {
      title: "Titan Elite",
      price: "$2799",
      image:
        "https://images.unsplash.com/photo-1624705002806-5d72df19c3f7?w=900&auto=format&fit=crop",
      processor: "Intel Core i9",
      gpu: "RTX 4090",
      ram: "64GB RAM",
    },

    {
      title: "Phantom Core",
      price: "$1999",
      image:
        "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=900&auto=format&fit=crop",
      processor: "Ryzen 9",
      gpu: "RTX 4070 Ti",
      ram: "32GB RAM",
    },
  ];

  return (
    <main className="bg-black text-white overflow-hidden">

      {/* 🔥 HERO SECTION */}
      <section className="relative py-28 px-6 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">

        {/* Glow Effects */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500/20 blur-3xl rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >

          <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
            High Performance Gaming PCs
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-6 leading-tight">
            Build Your <br />
            Dream Gaming Setup 🎮
          </h1>

          <p className="text-gray-400 text-lg mt-6 leading-relaxed">
            Explore ultra-fast gaming PCs powered by RTX graphics,
            latest processors, and premium RGB designs.
          </p>

        </motion.div>

      </section>

      {/* 🔥 PRODUCTS SECTION */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">

            <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
              Featured Gaming PCs
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Top Gaming Builds
            </h2>

          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {gamingPCs.map((pc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-orange-500/40 transition shadow-2xl"
              >

                {/* Image */}
                <div className="relative overflow-hidden">

                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    src={pc.image}
                    alt={pc.title}
                    className="w-full h-72 object-cover"
                  />

                  {/* Badge */}
                  <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-black/70 backdrop-blur-lg border border-white/10 text-orange-500 text-sm font-semibold flex items-center gap-2">
                    <Zap size={16} />
                    Gaming Beast
                  </div>

                </div>

                {/* Content */}
                <div className="p-8">

                  {/* Ratings */}
                  <div className="flex items-center gap-1 text-orange-400">

                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />

                    <span className="text-gray-400 text-sm ml-2">
                      (5.0)
                    </span>

                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mt-5">
                    {pc.title}
                  </h3>

                  {/* Specs */}
                  <div className="space-y-3 mt-6">

                    <div className="flex items-center gap-3 text-gray-400">
                      <Cpu size={18} className="text-orange-500" />
                      {pc.processor}
                    </div>

                    <div className="flex items-center gap-3 text-gray-400">
                      <Monitor size={18} className="text-orange-500" />
                      {pc.gpu}
                    </div>

                    <div className="flex items-center gap-3 text-gray-400">
                      <HardDrive size={18} className="text-orange-500" />
                      {pc.ram}
                    </div>

                  </div>

                  {/* Bottom */}
                  <div className="flex items-center justify-between mt-8">

                    <div>
                      <p className="text-gray-500 line-through">
                        $3299
                      </p>

                      <h4 className="text-3xl font-extrabold text-orange-500">
                        {pc.price}
                      </h4>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-5 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 font-semibold flex items-center gap-2 shadow-lg shadow-orange-500/20"
                    >
                      <ShoppingCart size={18} />
                      Buy
                    </motion.button>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* 🔥 CTA SECTION */}
      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-r from-orange-500 to-red-600 p-12 text-center shadow-2xl">

          <h2 className="text-4xl md:text-5xl font-extrabold">
            Ready To Level Up Your Gaming? 🚀
          </h2>

          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
            Discover premium gaming PCs with high-end performance,
            RGB aesthetics, and powerful graphics cards.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-10 px-10 py-4 rounded-full bg-black text-white font-semibold"
          >
            Explore Gaming PCs
          </motion.button>

        </div>

      </section>

    </main>
  );
};

export default Gaming;