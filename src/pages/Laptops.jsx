import React from "react";
import { motion } from "framer-motion";
import {
  Laptop,
  ShoppingCart,
  Star,
  Cpu,
  HardDrive,
  Monitor,
} from "lucide-react";

const Laptops = () => {
  const laptops = [
    {
      title: "ASUS ROG Strix",
      price: "$1899",
      image:
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=900&auto=format&fit=crop",
      processor: "Intel i9",
      ram: "32GB RAM",
      display: "240Hz Display",
    },

    {
      title: "MacBook Pro M3",
      price: "$2499",
      image:
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop",
      processor: "Apple M3",
      ram: "16GB RAM",
      display: "Liquid Retina",
    },

    {
      title: "Dell XPS 15",
      price: "$1699",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&auto=format&fit=crop",
      processor: "Intel i7",
      ram: "16GB RAM",
      display: "4K OLED",
    },

    {
      title: "HP Omen Gaming",
      price: "$1799",
      image:
        "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=900&auto=format&fit=crop",
      processor: "Ryzen 9",
      ram: "32GB RAM",
      display: "165Hz Display",
    },

    {
      title: "Lenovo Legion 7",
      price: "$1999",
      image:
        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=900&auto=format&fit=crop",
      processor: "Intel i9",
      ram: "32GB RAM",
      display: "RTX Graphics",
    },

    {
      title: "Acer Predator",
      price: "$1599",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=900&auto=format&fit=crop",
      processor: "Intel i7",
      ram: "16GB RAM",
      display: "144Hz Display",
    },
  ];

  return (
    <main className="bg-black text-white overflow-hidden">

      {/* 🔥 HERO SECTION */}
      <section className="relative py-28 px-6 bg-gradient-to-br from-black via-gray-900 to-black">

        {/* Glow */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500/20 blur-3xl rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >

          <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Premium Laptops
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-6">
            Powerful Laptops <br />
            For Every Need 💻
          </h1>

          <p className="text-gray-400 text-lg mt-6 leading-relaxed">
            Explore gaming laptops, business laptops,
            and high-performance machines built for speed,
            productivity, and entertainment.
          </p>

        </motion.div>

      </section>

      {/* 🔥 PRODUCTS SECTION */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">

            <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
              Featured Laptops
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Latest Laptop Collection
            </h2>

          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {laptops.map((laptop, index) => (
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
                    src={laptop.image}
                    alt={laptop.title}
                    className="w-full h-72 object-cover"
                  />

                  {/* Badge */}
                  <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-black/70 backdrop-blur-lg border border-white/10 text-orange-500 text-sm font-semibold flex items-center gap-2">
                    <Laptop size={16} />
                    Premium
                  </div>

                </div>

                {/* Content */}
                <div className="p-8">

                  {/* Rating */}
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
                    {laptop.title}
                  </h3>

                  {/* Specs */}
                  <div className="space-y-3 mt-6">

                    <div className="flex items-center gap-3 text-gray-400">
                      <Cpu size={18} className="text-orange-500" />
                      {laptop.processor}
                    </div>

                    <div className="flex items-center gap-3 text-gray-400">
                      <HardDrive size={18} className="text-orange-500" />
                      {laptop.ram}
                    </div>

                    <div className="flex items-center gap-3 text-gray-400">
                      <Monitor size={18} className="text-orange-500" />
                      {laptop.display}
                    </div>

                  </div>

                  {/* Bottom */}
                  <div className="flex items-center justify-between mt-8">

                    <div>
                      <p className="text-gray-500 line-through">
                        $2499
                      </p>

                      <h4 className="text-3xl font-extrabold text-orange-500">
                        {laptop.price}
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
            Upgrade Your Laptop Experience 🚀
          </h2>

          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
            Discover high-performance laptops with modern design,
            ultra-fast processors, and premium features.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-10 px-10 py-4 rounded-full bg-black text-white font-semibold"
          >
            Browse All Laptops
          </motion.button>

        </div>

      </section>

    </main>
  );
};

export default Laptops;