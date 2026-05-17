import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Gaming PCs", path: "/gaming" },
    { name: "Laptops", path: "/laptops" },
    { name: "Accessories", path: "/accessories" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 left-0 w-full z-50 bg-black backdrop-blur-xl border-b border-orange-500/20 shadow-2xl"
    >

      <Link to="/" className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* 🔥 Logo */} 
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
        >

          <img
            src={logo}
            alt="I-KON Logo"
            className="w-12 h-12 object-contain"
          />

          <h1 className="text-2xl font-extrabold tracking-wide text-white">
            I-KON
          </h1>

        </motion.div>

        {/* 🔥 Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          {navItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -2 }}
            >

              <Link
                to={item.path}
                className="relative text-gray-300 font-medium group transition"
              >

                <span className="group-hover:text-orange-400 transition duration-300">
                  {item.name}
                </span>

                {/* Underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>

              </Link>

            </motion.div>
          ))}

        </div>

        {/* 🔥 Right Side Button */}
        <div className="hidden md:flex items-center gap-4">

          {/* CTA */}
          <Link to="/accessories">

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow-lg shadow-orange-500/30"
            >
              Shop Now
            </motion.button>

          </Link>

        </div>

        {/* 🔥 Mobile Menu Button */}
        <div className="md:hidden">

          <button onClick={() => setIsOpen(!isOpen)}>

            {isOpen ? (
              <X className="text-white" size={28} />
            ) : (
              <Menu className="text-white" size={28} />
            )}

          </button>

        </div>

      </Link>

      {/* 🔥 Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/95 backdrop-blur-xl border-t border-orange-500/20 px-6 py-6"
        >

          <div className="flex flex-col gap-5">

            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ x: 5 }}
              >

                <Link
                  to={item.path}
                  className="block text-gray-300 border-b border-gray-800 pb-3 hover:text-orange-400 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>

              </motion.div>
            ))}

            {/* Mobile CTA */}
            <Link to="/accessories">

              <button className="mt-4 w-full py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 font-semibold">
                Shop Now
              </button>

            </Link>

          </div>

        </motion.div>
      )}

    </motion.nav>
  );
};

export default Navbar;