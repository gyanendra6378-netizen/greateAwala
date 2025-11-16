import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const maybeLenis = (window as any).__lenis;
    if (maybeLenis && typeof maybeLenis.scrollTo === "function") {
      maybeLenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        zIndex: 40,
      }}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d89a7e] text-white shadow-[0_6px_16px_rgba(0,0,0,0.3)] hover:bg-[#c0785c] transition-colors"
      aria-label="Back to top"
    >
      <ChevronUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;


