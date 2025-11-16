import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0b0a09] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid gap-10 md:grid-cols-4">
        {/* Brand + Description */}
        <div className="md:col-span-2 space-y-4">
          <Link to="/">
            <span className="inline-flex items-center gap-2">
              <span className="text-2xl font-extrabold tracking-tight">
                Greate <span className="text-[#d89a7e]">Awala</span>
              </span>
            </span>
          </Link>
          <p className="text-sm text-gray-300 leading-relaxed max-w-md">
            Pure Amla (Awala) products crafted for your daily wellness – from
            fresh juice and candies to powders and traditional recipes. Natural,
            preservative‑free, and full of Vitamin C.
          </p>
          <div className="flex flex-wrap gap-3 text-xs text-gray-400">
            <span className="px-3 py-1 rounded-full border border-[#d89a7e]/40 bg-[#1b140f]">
              100% Natural
            </span>
            <span className="px-3 py-1 rounded-full border border-[#d89a7e]/40 bg-[#1b140f]">
              No Added Preservatives
            </span>
            <span className="px-3 py-1 rounded-full border border-[#d89a7e]/40 bg-[#1b140f]">
              Made in India
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-[#d89a7e] mb-4">
            Links
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link
                to="/about"
                className="hover:text-[#d89a7e] transition-colors"
              >
                About MyAwala
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-[#d89a7e] transition-colors"
              >
                Our Products
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="hover:text-[#d89a7e] transition-colors"
              >
                Amla Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[#d89a7e] transition-colors"
              >
                Contact us
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-[#d89a7e] transition-colors"
              >
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter + Social */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-[#d89a7e]">
            Stay updated
          </h4>
          <p className="text-xs text-gray-300">
            Get offers, health tips, and new product launches in your inbox.
          </p>
          <form
            className="flex w-full rounded-full bg-white/5 border border-white/10 overflow-hidden"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 text-sm text-white bg-transparent outline-none flex-1 placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="bg-[#d89a7e] px-5 text-xs font-semibold uppercase tracking-wide hover:bg-[#c0785c] transition-colors"
            >
              Subscribe
            </button>
          </form>

          <div className="pt-2">
            <p className="text-xs text-gray-400 mb-2">Follow Greate Awala</p>
            <div className="flex items-center gap-3 text-gray-300">
              <a
                href="#"
                aria-label="Greate Awala on Facebook"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#0b0a09] transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                aria-label="Greate Awala on Instagram"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#0b0a09] transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                aria-label="Greate Awala on Twitter"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#0b0a09] transition-colors"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                aria-label="Greate Awala on YouTube"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#0b0a09] transition-colors"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 mt-10 pt-4 text-center text-xs text-gray-500">
        <p>
          © {new Date().getFullYear()} Greate Awala. All rights reserved.
        </p>
        <p className="mt-1">
          Made with love for natural Amla wellness.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


