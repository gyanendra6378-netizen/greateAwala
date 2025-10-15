import { useState, useEffect, useRef } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const cartRef = useRef(null);
  const location = useLocation();

  // Close cart if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setCartOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Show/hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY <= lastScrollY || currentScrollY <= 100);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact us", path: "/contact" },
    // { name: "Cart", path: "/cart" },
  ];

  return (
    <header
      className={`fixed  top-0 left-0 w-full z-50 transition-transform duration-300 bg-white ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Announcement */}
      <div className="bg-[#f9f0ea] text-sm text-center py-1 px-4">
        Signup our newsletter to get update information, news, insight or promotions.{" "}
        <span className="uppercase font-semibold text-[#b5765b] cursor-pointer">
          Signup Newsletter
        </span>
      </div>

      {/* Main Navbar */}
      <nav className=" py-3 shadow-sm px-20 flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* <div className="border-2 border-[#b5765b] w-5 h-5"></div> */}
          <span className="font-bold text-lg text-gray-800">MyAwala</span>
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
                      isActive ? "text-[#b5765b]" : "text-gray-700 hover:text-[#b5765b]"
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
                    isActive ? "text-[#b5765b]" : "text-gray-700 group-hover:text-[#b5765b]"
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

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4 text-[#b5765b] text-sm">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-sm text-gray-700 font-medium">
          <ul className="space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`block ${isActive ? "text-[#b5765b]" : "text-gray-700"}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex gap-4 text-[#b5765b] mt-2">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
