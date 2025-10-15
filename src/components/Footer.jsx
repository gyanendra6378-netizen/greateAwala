import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div className="md:col-span-1">
          <h2 className="text-3xl font-bold">
            Living
            <span className="text-blue-500 text-sm align-top ml-1 bg-gray-900 px-1 py-0.5 rounded">
              PRO
            </span>
          </h2>
          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            Welcome to our complete News Portal about living, lifestyle, fashion and wellness.
            Take your time and immerse yourself in this amazing experience!
          </p>
        </div>

        {/* About Section */}
        <div>
          <h4 className="text-xl font-semibold mb-3">— about</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h4 className="text-xl font-semibold mb-3">— follow us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <Facebook size={16} /> Facebook
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={16} /> Instagram
            </li>
            <li className="flex items-center gap-2">
              <Twitter size={16} /> Twitter
            </li>
            <li className="flex items-center gap-2">
              <Youtube size={16} /> Youtube
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h4 className="text-xl font-semibold mb-3">— subscribe</h4>
          <form className="flex w-full">
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 text-black bg-white outline:none border-none focus:border-none w-full text-sm rounded-l-md"
            />
            <button
              type="submit"
              className="bg-blue-500 px-4 text-sm text-white rounded-r-md font-semibold"
            >
              SEND
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © tagDiv - All rights reserved. Made with ♥ Newspaper Theme
      </div>
    </footer>
  );
};

export default Footer;
