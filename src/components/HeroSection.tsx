import { ArrowRight, Code, Rocket, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCallback, useMemo, memo } from "react";

const HeroSection = memo(() => {
  const benefits = useMemo(
    () => [
      "No intimidating tech-speak or endless buzzwords",
      "Honest advice and clear communication every step",
      "Built for real people solving real problems",
    ],
    [],
  );

  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "#contact";
    }
  }, []);

  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const experienceYears = useMemo(() => currentYear - 2017, [currentYear]);

  return (
    <section
      id="home"
      className="bg-brand-background py-20 lg:py-32 border-b-4 border-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-brand-foreground mb-6 animate-fade-in uppercase">
            Smart Software{" "}
            <span className="text-brand-primary">That Actually</span>{" "}
            <span className="text-brand-secondary">Makes Sense</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-xl md:text-2xl text-brand-foreground mb-8 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            We build straightforward, jargon-free software for startups, local
            businesses, and anyone tired of tech that's more complicated than it
            needs to be.
          </p>

          {/* Benefits */}
          <div
            className="space-y-4 mb-10 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center justify-center text-left max-w-2xl mx-auto"
              >
                <Rocket className="h-6 w-6 text-brand-accent flex-shrink-0 mr-4" />
                <span className="text-lg text-brand-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Primary CTA */}
          <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button
              size="lg"
              className="bg-brand-primary hover:bg-brand-secondary text-brand-foreground px-8 py-4 text-lg font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 group mb-6"
              onClick={scrollToContact}
            >
              Let's Build Something Together
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>

          {/* Supporting Text */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-brand-foreground animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="flex items-center">
              <Code className="h-5 w-5 text-brand-accent mr-2" />
              <span className="font-medium">Free consultation</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-brand-accent mr-2" />
              <span className="font-medium">Experienced tech team</span>
            </div>
            <div className="flex items-center">
              <Rocket className="h-5 w-5 text-brand-accent mr-2" />
              <span className="font-medium">
                {experienceYears}+ years experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
