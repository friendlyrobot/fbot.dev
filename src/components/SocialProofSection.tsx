
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
    <section className="py-20 bg-gradient-to-br from-warm-orange-50 to-soft-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-friendly-gray-900 mb-4 text-center">
            Built for <span className="text-warm-orange-600">Real Businesses</span>
          </h2>
          <p className="text-xl text-friendly-gray-600 mb-16 text-center">
            From startups to established local businesses across Sydney
          </p>

          {/* Testimonials */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-warm-orange-600 mb-4" />
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-friendly-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div>
                  <div className="font-semibold text-friendly-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-friendly-gray-600">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Client Logos Placeholder */}
          <div className="text-center">
            <p className="text-friendly-gray-500 mb-8">Trusted by Sydney businesses since 2017</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-24 h-12 bg-friendly-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-friendly-gray-400">Logo {i}</span>
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
