import { useEffect, useMemo } from "react";
import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ApproachSection from "@/components/ApproachSection";
import ProcessSection from "@/components/ProcessSection";

const Index = () => {
  const observerOptions = useMemo(
    () => ({
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }),
    [],
  );

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          // Stop observing once animated to improve performance
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Use a more efficient query and observe elements
    const animatedElements = document.querySelectorAll(
      ".animate-fade-in, .animate-slide-in-left",
    );

    // Only observe elements that aren't already animated
    animatedElements.forEach((el) => {
      if (!el.classList.contains("animate")) {
        observer.observe(el);
      }
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [observerOptions]);

  return (
    <PageLayout>
      <HeroSection />
      <ProblemSection />
      <ApproachSection />
      <ProcessSection />
    </PageLayout>
  );
};

export default Index;
