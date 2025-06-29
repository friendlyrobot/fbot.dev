
import { Star, Quote } from 'lucide-react';

const SocialProofSection = () => {
  const testimonials = [
    {
      quote: "Finally, developers who actually listen and explain things in a way I can understand. Our new system has saved us hours every week.",
      author: "Sarah Chen",
      title: "Owner, Local Marketing Agency",
      rating: 5
    },
    {
      quote: "No fancy jargon, no surprise costs, just honest work that delivered exactly what we needed. These guys are the real deal.",
      author: "Marcus Thompson",
      title: "Founder, Thompson Logistics",
      rating: 5
    },
    {
      quote: "They turned our messy spreadsheet processes into a clean, simple system that actually makes sense. Best investment we've made.",
      author: "Lisa Rodriguez",
      title: "Director, Community Services",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-brand-background border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-brand-foreground mb-4 text-center uppercase">
            Built for <span className="text-brand-primary">Real Businesses</span>
          </h2>
          <p className="text-xl text-brand-foreground mb-16 text-center">
            From startups to established local businesses across Sydney
          </p>

          {/* Testimonials */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white border-4 border-black rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-brand-accent mb-4" />
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-brand-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div>
                  <div className="font-semibold text-brand-foreground uppercase">
                    {testimonial.author}
                  </div>
                  <div className="text-brand-foreground">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Client Logos Placeholder */}
          <div className="text-center">
            <p className="text-brand-foreground mb-8">Trusted by Sydney businesses since 2017</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-24 h-12 bg-brand-secondary rounded-md flex items-center justify-center border-2 border-black shadow-md">
                  <span className="text-xs text-black">Logo {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
