import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="bg-black border-t border-orange-500/20 text-gray-300">

      {/* 🔥 Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* 🔹 Brand */}
        <div>
          <h1 className="text-3xl font-extrabold text-white">
            IKON
            <span className="text-orange-500"> TECH</span>
          </h1>

          <p className="mt-5 text-gray-400 leading-relaxed">
            Your trusted destination for Gaming PCs, Laptops,
            Accessories, and high-performance computer products.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">

            <a
              href="#"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-orange-500 hover:text-orange-400 transition"
            >
              <FaFacebook size={18} />
            </a>

            <a
              href="#"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-orange-500 hover:text-orange-400 transition"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-orange-500 hover:text-orange-400 transition"
            >
              <FaTwitter size={18} />
            </a>

            <a
              href="#"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-orange-500 hover:text-orange-400 transition"
            >
              <FaYoutube size={18} />
            </a>

          </div>
        </div>

        {/* 🔹 Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-6">
            Quick Links
          </h2>

          <ul className="space-y-4">

            <li>
              <a
                href="#home"
                className="hover:text-orange-400 transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#gamingpcs"
                className="hover:text-orange-400 transition"
              >
                Gaming PCs
              </a>
            </li>

            <li>
              <a
                href="#laptops"
                className="hover:text-orange-400 transition"
              >
                Laptops
              </a>
            </li>

            <li>
              <a
                href="#accessories"
                className="hover:text-orange-400 transition"
              >
                Accessories
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-orange-400 transition"
              >
                Contact
              </a>
            </li>

          </ul>
        </div>

        {/* 🔹 Services */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-6">
            Services
          </h2>

          <ul className="space-y-4">

            <li className="hover:text-orange-400 transition cursor-pointer">
              Custom PC Build
            </li>

            <li className="hover:text-orange-400 transition cursor-pointer">
              Laptop Repair
            </li>

            <li className="hover:text-orange-400 transition cursor-pointer">
              Gaming Setup
            </li>

            <li className="hover:text-orange-400 transition cursor-pointer">
              Hardware Upgrade
            </li>

            <li className="hover:text-orange-400 transition cursor-pointer">
              Tech Support
            </li>

          </ul>
        </div>

        {/* 🔹 Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-6">
            Contact Info
          </h2>

          <div className="space-y-5">

            <div className="flex items-start gap-3">
              <MapPin className="text-orange-500 mt-1" size={18} />
              <p>Faisalabad, Pakistan</p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-orange-500" size={18} />
              <p>+92 300 1234567</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-orange-500" size={18} />
              <p>support@ikontech.com</p>
            </div>

          </div>
        </div>

      </div>

      {/* 🔥 Bottom Footer */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500 text-center">
            © 2026 IKON TECH. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">

            <a href="#" className="hover:text-orange-400 transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-orange-400 transition">
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;