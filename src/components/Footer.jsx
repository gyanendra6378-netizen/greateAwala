import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products" },
    { label: "Services", to: "/services" },
    { label: "Blogs", to: "/blogs" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
    { label: "Privacy Policy", to: "/privacy-policy" },
  ];

  const supportLinks = [
    { label: "FAQs", to: "/about#faqs" },
    { label: "Shipping & Delivery", to: "/checkout" },
    { label: "Cart", to: "/cart" },
    { label: "Checkout", to: "/checkout" },
  ];

  const socialLinks = [
    { label: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { label: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { label: "YouTube", icon: Youtube, href: "https://youtube.com" },
  ];

  return (
    <footer className="bg-[#0b0b0b] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand Summary */}
        <div>
          <h2 className="text-2xl font-bold text-white">Greate Awala</h2>
          <p className="mt-4 text-sm leading-6 text-gray-400">
            Crafted in India with a passion for authentic Amla wellness. From heritage recipes to modern-day nutrition,
            Greate Awala curates natural juices, candies, powders, and tonics that celebrate the purity of Awala (gooseberry).
          </p>
          <div className="flex items-center gap-4 mt-6">
            {socialLinks.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-200 transition hover:bg-white/20"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            {quickLinks.map(({ label, to }) => (
              <li key={label}>
                <Link to={to} className="transition hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Care</h3>
          <ul className="space-y-3 text-sm">
            {supportLinks.map(({ label, to }) => (
              <li key={label}>
                <Link to={to} className="transition hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div className="space-y-5">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Reach Us</h3>
            <p className="text-sm text-gray-400 leading-6">
              Greate Awala Pvt. Ltd.
              <br />New Delhi, India
              <br />support@greateawala.com
              <br />+91 98713 26378
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Stay in the Loop</h3>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                name="newsletter"
                placeholder="Enter your email"
                className="flex-1 rounded-md bg-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d97f1f]"
              />
              <button
                type="submit"
                className="rounded-md bg-[#d97f1f] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#b7651a]"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-xs text-gray-500">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 text-xs text-gray-500 space-y-3 md:flex md:flex-col">
          <p className="text-sm text-gray-400">
            © {currentYear} Greate Awala. All rights reserved. Crafted with care for natural wellness.
          </p>
          <p>
            Product imagery, icons, and lifestyle visuals are for illustrative purposes only; actual packaging and harvest
            batches may vary. All trademarks, service marks, and logos referenced remain the property of their respective
            owners. Availability of products, offers, and benefits may differ by region and are subject to change without
            notice.
          </p>
          <p>
            By using this site you agree to our implied terms of use. For order or partnership enquiries, write to
            support@greateawala.com.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
