import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";

import img1 from "../../../public/bg-1.png";
import img2 from "../../../public/bg-2.png";
import img3 from "../../../public/bg-3.png";
import Updateds from "./Updateds";
import Blogs from "./Blogs";
import Categories from "./Categories";
import Explore from "./Explore";
import HealthNews from "./HealthNews";
import Faq from "./Comment";
import Comment from "./Comment";
import Faqs from "./Faqs";

// --- Smooth, inertia-style scrolling provider (Lenis) ---
function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      // Tweaks for the "continues a bit after you stop" feel
      duration: 1.15, // higher = more glide
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1.05, // increase for stronger momentum per wheel step
      touchMultiplier: 2,
      // Easing curve for buttery stop
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return children;
}

const images = [img1, img2, img3];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SmoothScroll>
      <div>
        <section className="relative h-screen w-full overflow-hidden">
          {/* Animated background image slider */}
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: `url(${images[currentIndex]})` }}
            />
          </AnimatePresence>

          {/* Black Overlay for clear text */}
          <div className="absolute inset-0 bg-black/60 z-10" />

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-4"
          >
            <p className="uppercase text-sm text-[#f0f0f0] tracking-widest mb-2">
              100% Natural • Fresh • Healthy
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              My Awala <br/> Taste & Health in Every Bite
            </h1>
            <p className="max-w-xl text-base md:text-lg text-gray-200">
              Discover the power of Amla (Awala) – bringing you freshness,
              nutrition, and authentic taste in every product.
            </p>
          </motion.div>
        </section>

        {/* Content Sections */}
        <Updateds />
        <Blogs />
        <Categories />
        <Explore />
        <HealthNews />
        <Faqs />
        <Comment />
      </div>
    </SmoothScroll>
  );
};

export default Home;
