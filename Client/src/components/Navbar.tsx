import { useState, useEffect, useRef } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cartRef = useRef<HTMLLIElement | null>(null);
  const location = useLocation();
  const { getCartItemsCount } = useCart();

  // Close cart if clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(e.target as Node)) {
        setCartOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Show/hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Don't auto-hide when mobile menu is open
      if (mobileMenuOpen) return;

      const currentScrollY = window.scrollY;

      // Keep navbar fixed on small screens; only hide on larger viewports
      if (window.innerWidth < 768) {
        setShowNavbar(true);
        setLastScrollY(currentScrollY);
        return;
      }

      setShowNavbar(currentScrollY <= lastScrollY || currentScrollY <= 100);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  // Check simple auth flag from localStorage (placeholder auth)
  useEffect(() => {
    try {
      const raw = localStorage.getItem("myawala_auth");
      setIsLoggedIn(!!raw);
    } catch {
      setIsLoggedIn(false);
    }
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact us", path: "/contact" },
    // { name: "Cart", path: "/cart" },
  ] as const;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white md:transition-transform md:duration-300 ${
        mobileMenuOpen || showNavbar ? "md:translate-y-0" : "md:-translate-y-full"
      }`}
    >
      {/* Main Navbar */}
      <nav className="py-3 shadow-sm px-4 md:px-20 flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* <div className="border-2 border-[#b5765b] w-5 h-5"></div> */}
          <span className="font-bold text-lg text-gray-800">Greate Awala</span>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-6 text-md md:text-md  font-medium">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const isCart = link.name.toLowerCase() === "cart";

            if (isCart) {
              return (
                <li
                  key={link.name}
                  ref={cartRef}
                  className="relative group"
                  onMouseEnter={() => setCartOpen(true)}
                >
                  <button
                    onClick={() => setCartOpen((prev) => !prev)}
                    className={`pb-1 transition-all  duration-300 ${
                      isActive
                        ? "text-[#b5765b]"
                        : "text-gray-700 hover:text-[#b5765b]"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 -bottom-0.5 h-[2px] bg-[#b5765b] transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100 ${
                        isActive ? "scale-x-100" : ""
                      }`}
                      style={{ width: "100%" }}
                    />
                  </button>

                  {cartOpen && (
                    <div className="absolute right-0 top-full mt-2 bg-white shadow-2xl rounded-md w-48 p-10 flex flex-col gap-2 z-50">
                      <Link
                        to="/cart"
                        className="bg-white border border-[gray] text-black text-sm font-semibold py-3 px-4 rounded-md text-center hover:bg-[#a25f4a] hover:text-white transition"
                        onClick={() => setCartOpen(false)}
                      >
                        View Cart
                      </Link>
                      <Link
                        to="/checkout"
                        className="bg-[#a25f4a] text-white text-sm font-semibold py-3 px-4 rounded-md text-center hover:bg-[#a25f4a] transition"
                        onClick={() => setCartOpen(false)}
                      >
                        Checkout
                      </Link>
                    </div>
                  )}
                </li>
              );
            }

            return (
              <li key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={`pb-1 transition-all duration-300 ${
                    isActive
                      ? "text-[#b5765b]"
                      : "text-gray-700 group-hover:text-[#b5765b]"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[2px] bg-[#b5765b] transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100 ${
                      isActive ? "scale-x-100" : ""
                    }`}
                    style={{ width: "100%" }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Section - Social + Cart */}
        <div className="hidden md:flex items-center gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-4 text-[#b5765b] text-sm">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>

          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition">
              <ShoppingCart size={22} className="text-[#b5765b]" />
              {getCartItemsCount() > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </button>
          </Link>

          {/* Auth button */}
          {isLoggedIn ? (
            <Link
              to="/logout"
              className="text-xs font-semibold uppercase tracking-wide border border-gray-300 rounded-full px-4 py-2 hover:border-[#b5765b] hover:text-[#b5765b] transition-colors"
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/signin"
              className="text-xs font-semibold uppercase tracking-wide border border-[#b5765b] text-[#b5765b] rounded-full px-4 py-2 hover:bg-[#b5765b] hover:text-white transition-colors"
            >
              Sign in
            </Link>
          )}
        </div>

        {/* Mobile - Cart + Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <Link to="/cart" className="relative">
            <button className="relative p-2">
              <ShoppingCart size={22} className="text-[#b5765b]" />
              {getCartItemsCount() > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </button>
          </Link>
          <button
            onClick={() => {
              setMobileMenuOpen((prev) => !prev);
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - slide in from right with dimmed background (mobile only) */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/40 transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Right drawer */}
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white shadow-xl flex flex-col text-sm text-gray-800 font-medium overflow-y-auto mobile-drawer-enter">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <span className="font-bold text-lg text-gray-900">
                Greate Awala
              </span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={22} />
              </button>
            </div>

            {/* Links */}
            <ul className="flex-1 overflow-y-auto mt-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.name} className="border-b border-gray-100">
                    <Link
                      to={link.path}
                      className={`block px-6 py-3 text-base ${
                        isActive
                          ? "text-[#d89a7e] font-semibold"
                          : "text-gray-700"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Footer: social + auth + CTA */}
            <div className="border-t border-gray-200 pt-4 pb-6 px-6 flex flex-col gap-4">
              <div className="flex gap-4 text-[#b5765b]">
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
                <FaYoutube />
              </div>

              {/* Mobile auth links */}
              <div className="flex gap-3 text-xs">
                {isLoggedIn ? (
                  <Link
                    to="/logout"
                    className="flex-1 text-center border border-gray-300 rounded-full px-3 py-2 hover:border-[#b5765b] hover:text-[#b5765b] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Logout
                  </Link>
                ) : (
                  <Link
                    to="/signin"
                    className="flex-1 text-center border border-[#b5765b] text-[#b5765b] rounded-full px-3 py-2 hover:bg-[#b5765b] hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign in
                  </Link>
                )}
              </div>

              {/* Primary CTA similar to example image */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.location.href = "/products";
                }}
                className="mt-1 w-full rounded-full bg-gradient-to-r from-[#d89a7e] to-[#b5765b] text-white text-xs font-semibold uppercase tracking-wide py-3"
              >
                Explore Products
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;


