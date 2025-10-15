import React, { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Articles from "./Acticles"; // keep your original import name
import img1 from "/bg-1.png";

/* ---------- FAQ Data ---------- */
const faqs = [
  {
    question: "What makes Great Awala products special?",
    answer:
      "Our products are made from 100% pure and fresh Amla, sourced directly from trusted farms. We ensure no harmful chemicals are added.",
  },
  {
    question: "Do your products help with immunity?",
    answer:
      "Yes! Amla is rich in Vitamin C and antioxidants, which naturally boost immunity and improve overall health.",
  },
  {
    question: "Are Great Awala products suitable for daily use?",
    answer:
      "Absolutely. Our powders, oils, and chyawanprash are designed for daily wellness routines, supporting digestion, hair, and skin health.",
  },
  {
    question: "Where can I buy Great Awala products?",
    answer:
      "You can purchase directly from our official website or through authorized local distributors.",
  },
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  /* ---------- Lenis Smooth Scroll ---------- */
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!window.__lenis) {
      window.__lenis = new Lenis({
        duration: 1.1,
        smooth: true,
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 1.05,
        touchMultiplier: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      window.__lenisCreatedBy = true;
    }

    let rafId;
    const raf = (time) => {
      window.__lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      if (window.__lenisCreatedBy) {
        window.__lenis.destroy();
        delete window.__lenis;
        delete window.__lenisCreatedBy;
      }
    };
  }, []);

  /* ---------- Toggle FAQ ---------- */
  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 bg-white text-gray-800">
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-4xl font-bold">About Great Awala</h1>
          <div className="border-t-4 border-gray-200 w-16 mt-2"></div>
          <div className="text-sm text-right mt-2 text-gray-500">
            <a href="#" className="text-[#cc8a51] hover:underline">
              Home
            </a>{" "}
            &gt; <span>About</span>
          </div>
        </div>

        {/* Image + Text Section */}
        <div className="flex flex-col lg:flex-row gap-10 mt-10">
          <div className="lg:w-1/2 flex justify-center md:h-[60vh]">
            <div className="rounded-2xl overflow-hidden md:h-[60vh]">
              <img
                src={img1}
                alt="Great Awala"
                className="object-cover md:h-[60vh] transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] hover:scale-[1.05]"
              />
            </div>
          </div>


          <div className="lg:w-1/2 w-full flex flex-col justify-center">
            <h2 className="text-4xl font-light">
              Bringing{" "}
              <span className="text-[#cb6e16] font-bold">
                Nature’s Power of Amla
              </span>{" "}
              to Every Home
            </h2>
            <p className="mt-4 font-medium">
              Great Awala is dedicated to creating high-quality Amla-based
              products that boost immunity, improve wellness, and enhance daily
              living. From traditional chyawanprash to modern powders and oils,
              we bring you the true goodness of nature in every product.
            </p>
            <p className="mt-4 text-gray-700">
              Our mission is simple – deliver pure, natural, and chemical-free
              Amla products that help you live a healthier and more energetic
              life. With years of trust and authenticity, Great Awala stands as
              your partner in holistic health and natural care.
            </p>
          </div>
        </div>

        {/* 3 Feature Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Box 1 */}
          <div className="text-center group">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-100 p-4 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-700 group-hover:animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17v-2H3V5a2 2 0 012-2h14a2 2 0 012 2v10h-6v2m-4 0v2m0-2H9m6 0h-2"
                  />
                </svg>
              </div>
            </div>
            <h3 className="font-semibold text-lg">Pure Ingredients</h3>
            <p className="text-gray-600 text-sm mt-2">
              Every product is made from handpicked, farm-fresh Amla processed
              with care to preserve its natural nutrients.
            </p>
          </div>

          {/* Box 2 */}
          <div className="text-center group">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-100 p-4 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-700 group-hover:animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 9h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="font-semibold text-lg">Daily Wellness</h3>
            <p className="text-gray-600 text-sm mt-2">
              Designed to support immunity, hair health, digestion, and overall
              vitality for your everyday lifestyle.
            </p>
          </div>

          {/* Box 3 */}
          <div className="text-center group">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-100 p-4 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-700 group-hover:animate-pulse"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3v18h18M9 17H7V9h2m4 8h-2V5h2m4 12h-2v-6h2"
                  />
                </svg>
              </div>
            </div>
            <h3 className="font-semibold text-lg">Trusted Quality</h3>
            <p className="text-gray-600 text-sm mt-2">
              Backed by tradition and modern processing standards, ensuring
              premium quality in every Great Awala product.
            </p>
          </div>
        </div>

      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#cb6e16]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg shadow-sm bg-white"
              >
                <button
                  className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-800 hover:text-[#cb6e16] transition"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <span className="ml-2 text-xl">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                {activeIndex === index && (
                  <div className="p-4 pt-0 text-gray-600 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <Articles />
    </div>
  );
};

export default About;
