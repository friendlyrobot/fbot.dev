import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const benefits = [
    "No intimidating tech-speak or endless buzzwords",
    "Honest advice and clear communication every step",
    "Built for real people solving real problems",
  ];

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-warm-orange-50 to-soft-amber-50 py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-friendly-gray-900 mb-6 animate-fade-in">
            Smart Software That{" "}
            <span className="text-warm-orange-600">Actually Makes Sense</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-xl md:text-2xl text-friendly-gray-600 mb-8 leading-relaxed animate-fade-in"
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
                <CheckCircle className="h-6 w-6 text-warm-orange-600 flex-shrink-0 mr-4" />
                <span className="text-lg text-friendly-gray-700">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* Primary CTA */}
          <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button
              size="lg"
              className="bg-warm-orange-600 hover:bg-warm-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group mb-6"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.hash = "#contact";
                }
              }}
            >
              Let's Build Something Together
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>

          {/* Supporting Text */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-friendly-gray-600 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="flex items-center">
              <span className="w-2 h-2 bg-warm-orange-600 rounded-full mr-2"></span>
              <span className="font-medium">Free consultation</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-warm-orange-600 rounded-full mr-2"></span>
              <span className="font-medium">Experienced tech team</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-warm-orange-600 rounded-full mr-2"></span>
              <span className="font-medium">
                {new Date().getFullYear() - 2017}+ years experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
