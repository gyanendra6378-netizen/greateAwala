import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    if (!window.__lenis) {
      const lenis = new Lenis({
        duration: 1.2,       // inertia speed (increase for more glide)
        smooth: true,
        smoothTouch: true,
        wheelMultiplier: 1.1,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
      window.__lenis = lenis; // store globally
    }
  }, []);

  return <>{children}</>;
}
