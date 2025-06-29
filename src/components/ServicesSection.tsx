
import { Code, Globe, Smartphone, Link, Lightbulb } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Build exactly what your business needs, nothing more, nothing less"
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Online platforms that work smoothly and make sense to your users"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Apps people actually want to use, designed for real-world problems"
    },
    {
      icon: Link,
      title: "System Integration",
      description: "Make your existing tools talk to each other properly"
    },
    {
      icon: Lightbulb,
      title: "Strategic Consulting",
      description: "Honest advice about what tech will actually help your business"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-friendly-gray-900 mb-4 text-center">
            What We Actually Do
          </h2>
          <p className="text-xl text-warm-orange-600 font-medium mb-16 text-center">
            (In Plain English)
          </p>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-warm-orange-50 to-soft-amber-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-warm-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-friendly-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-friendly-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
