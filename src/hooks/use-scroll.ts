import { useState, useEffect, useCallback } from "react";

interface UseScrollOptions {
  threshold?: number;
}

export const useScroll = (options: UseScrollOptions = {}) => {
  const { threshold = 0 } = options;
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > threshold;
    setIsScrolled(scrolled);
  }, [threshold]);

  useEffect(() => {
    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return { isScrolled };
};
