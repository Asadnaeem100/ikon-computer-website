import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <main className="bg-black text-white min-h-screen">

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
            Contact IKON Computers
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-6">
            Let’s Talk Tech 🚀
          </h1>

          <p className="text-gray-400 text-lg mt-6 leading-relaxed">
            Have questions about gaming PCs, laptops, accessories,
            or custom setups? Our team is here to help you.
          </p>

        </motion.div>

      </section>

      {/* 🔥 CONTACT SECTION */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">

          {/* 🔥 LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
              Get In Touch
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
              We’d Love To Hear <br />
              From You 💻
            </h2>

            <p className="text-gray-400 mt-6 text-lg leading-relaxed">
              Reach out to us for product inquiries, custom gaming PC
              builds, repairs, or technical support.
            </p>

            {/* Contact Cards */}
            <div className="space-y-6 mt-12">

              {/* Email */}
              <div className="flex items-start gap-5 p-6 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-orange-500/40 transition">

                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <Mail size={26} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    Email Address
                  </h3>

                  <p className="text-gray-400 mt-2">
                    support@ikoncomputers.com
                  </p>
                </div>

              </div>

              {/* Phone */}
              <div className="flex items-start gap-5 p-6 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-orange-500/40 transition">

                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <Phone size={26} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    Phone Number
                  </h3>

                  <p className="text-gray-400 mt-2">
                    +92 300 1234567
                  </p>
                </div>

              </div>

              {/* Location */}
              <div className="flex items-start gap-5 p-6 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-orange-500/40 transition">

                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <MapPin size={26} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    Store Location
                  </h3>

                  <p className="text-gray-400 mt-2">
                    Faisalabad, Pakistan
                  </p>
                </div>

              </div>

              {/* Timing */}
              <div className="flex items-start gap-5 p-6 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-orange-500/40 transition">

                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <Clock size={26} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    Working Hours
                  </h3>

                  <p className="text-gray-400 mt-2">
                    Mon - Sat: 10 AM - 9 PM
                  </p>
                </div>

              </div>

            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-10">

              <a
                href="#"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-orange-500 hover:text-orange-400 transition"
              >
                <FaFacebook/>
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-orange-500 hover:text-orange-400 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-orange-500 hover:text-orange-400 transition"
              >
                <FaTwitter />
              </a>

            </div>

          </motion.div>

          {/* 🔥 RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 shadow-2xl"
          >

            <h2 className="text-3xl font-bold">
              Send Us A Message ✉️
            </h2>

            <p className="text-gray-400 mt-4">
              Fill out the form below and our team will contact you shortly.
            </p>

            {/* Form */}
            <form className="space-y-6 mt-10">

              {/* Name */}
              <div>
                <label className="block mb-2 text-gray-300">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-5 py-4 rounded-2xl bg-black border border-white/10 outline-none focus:border-orange-500 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 rounded-2xl bg-black border border-white/10 outline-none focus:border-orange-500 transition"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block mb-2 text-gray-300">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full px-5 py-4 rounded-2xl bg-black border border-white/10 outline-none focus:border-orange-500 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-gray-300">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full px-5 py-4 rounded-2xl bg-black border border-white/10 outline-none focus:border-orange-500 transition resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 font-semibold text-lg shadow-lg shadow-orange-500/20"
              >
                Send Message 🚀
              </motion.button>

            </form>

          </motion.div>

        </div>

      </section>

    </main>
  );
};

export default Contact;