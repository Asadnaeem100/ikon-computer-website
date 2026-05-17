import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Star, Headphones, Mouse, Keyboard } from "lucide-react";

const Accessories = () => {
  const products = [
  {
    title: "Gaming Mouse",
    price: "$60",
    image:
      "https://images.unsplash.com/photo-1613141411244-0e4ac259d217?w=900&auto=format&fit=crop",
    icon: <Mouse size={24} />,
  },

  {
    title: "Mechanical Keyboard",
    price: "$140",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=900&auto=format&fit=crop",
    icon: <Keyboard size={24} />,
  },

  {
    title: "Gaming Headset",
    price: "$120",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900&auto=format&fit=crop",
    icon: <Headphones size={24} />,
  },

  {
    title: "Wireless Mouse",
    price: "$75",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=900&auto=format&fit=crop",
    icon: <Mouse size={24} />,
  },

  {
    title: "Wireless Keyboard",
    price: "$110",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=900&auto=format&fit=crop",
    icon: <Keyboard size={24} />,
  },

  {
    title: "RGB Mouse Pad",
    price: "$40",
    image:
      "https://images.unsplash.com/photo-1616788494672-ec7ca25fdda9?w=900&auto=format&fit=crop",
    icon: <Mouse size={24} />,
  },

  {
    title: "USB-C Wires",
    price: "$25",
    image:
      "https://images.unsplash.com/photo-1580894908361-967195033215?w=900&auto=format&fit=crop",
    icon: <Keyboard size={24} />,
  },

  {
    title: "Gaming Plugins",
    price: "$90",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&auto=format&fit=crop",
    icon: <Keyboard size={24} />,
  },

  {
    title: "Bluetooth Headphones",
    price: "$150",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&auto=format&fit=crop",
    icon: <Headphones size={24} />,
  },
];

  return (
    <main className="bg-black text-white overflow-hidden">

      {/* 🔥 ACCESSORIES GRID */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">

            <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
              Featured Products
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Best Selling Accessories
            </h2>

          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {products.map((product, index) => (
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
                    src={product.image}
                    alt={product.title}
                    className="w-full h-72 object-cover"
                  />

                  {/* Icon */}
                  <div className="absolute top-5 left-5 w-12 h-12 rounded-2xl bg-black/70 backdrop-blur-lg flex items-center justify-center text-orange-500 border border-white/10">
                    {product.icon}
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
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mt-4 leading-relaxed">
                    Premium quality gaming accessory with
                    modern design and high-end performance.
                  </p>

                  {/* Bottom */}
                  <div className="flex items-center justify-between mt-8">

                    <div>
                      <p className="text-gray-500 line-through">
                        $199
                      </p>

                      <h4 className="text-3xl font-extrabold text-orange-500">
                        {product.price}
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
            Complete Your Gaming Setup 🔥
          </h2>

          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
            Shop premium gaming accessories and experience
            unmatched performance and comfort.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-10 px-10 py-4 rounded-full bg-black text-white font-semibold"
          >
            Shop Accessories
          </motion.button>

        </div>

      </section>

    </main>
  );
};

export default Accessories;