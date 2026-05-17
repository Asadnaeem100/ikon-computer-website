import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Monitor,
  Mouse,
  Headphones,
  ArrowRight,
  Star,
} from "lucide-react";

const Home = () => {
  const categories = [
    {
      title: "Gaming PCs",
      icon: <Cpu size={40} />,
      desc: "High-performance gaming builds for ultimate speed.",
    },
    {
      title: "Monitors",
      icon: <Monitor size={40} />,
      desc: "Ultra HD & high refresh rate displays.",
    },
    {
      title: "Accessories",
      icon: <Mouse size={40} />,
      desc: "Premium keyboards, mouse & gaming gear.",
    },
    {
      title: "Audio Gear",
      icon: <Headphones size={40} />,
      desc: "Crystal clear gaming headsets & speakers.",
    },
  ];

  return (
    <main className="bg-black text-white overflow-hidden">

      {/* 🔥 HERO SECTION */}
      <section className="min-h-screen flex items-center px-6 py-16 bg-gradient-to-br from-black via-gray-900 to-black">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <p className="text-orange-500 uppercase tracking-[5px] font-semibold">
              Welcome To IKON Computers
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-5">
              Next Level <br />
              Gaming & Tech 🚀
            </h1>

            <p className="text-gray-400 text-lg mt-6 leading-relaxed max-w-xl">
              Discover powerful gaming PCs, laptops, accessories,
              and premium computer hardware built for speed,
              performance, and style.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 font-semibold flex items-center gap-2 shadow-lg shadow-orange-500/20"
              >
                Explore Products
                <ArrowRight size={20} />
              </motion.button>

              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 rounded-full border border-white/20 hover:border-orange-500 hover:text-orange-400 transition"
              >
                Explore Products
              </motion.button> */}

            </div>

            {/* Ratings */}
            <div className="flex items-center gap-2 mt-10">

              <div className="flex text-orange-400">
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
              </div>

              <p className="text-gray-400">
                Trusted by 2,000+ happy customers
              </p>

            </div>

          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full"></div>

            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=1000&auto=format&fit=crop"
              alt="Gaming Setup"
              className="relative z-10 w-full rounded-3xl shadow-2xl"
            />

          </motion.div>

        </div>

      </section>

      {/* 🔥 CATEGORIES */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">

            <p className="text-orange-500 uppercase tracking-[4px]">
              Our Categories
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Explore Premium Tech
            </h2>

          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {categories.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-orange-500/40 transition shadow-xl"
              >

                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  {item.desc}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* 🔥 CTA SECTION */}
      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-r from-orange-500 to-red-600 p-12 text-center shadow-2xl">

          <h2 className="text-4xl md:text-5xl font-extrabold">
            Upgrade Your Setup Today 🔥
          </h2>

          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
            Get the latest gaming PCs, laptops, and accessories
            with unbeatable performance and pricing.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-10 px-10 py-4 rounded-full bg-black text-white font-semibold"
          >
            Browse Products
          </motion.button>

        </div>

      </section>

    </main>
  );
};

export default Home;