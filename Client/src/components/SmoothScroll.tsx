import { useEffect, type ReactNode } from "react";
import Lenis from "@studio-freight/lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (!window.__lenis) {
      const lenis = new Lenis({
        duration: 1.2, // inertia speed (increase for more glide)
        wheelMultiplier: 1.1
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
      window.__lenis = lenis; // store globally
    }
  }, []);

  return <>{children}</>;
}


