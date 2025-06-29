
import { Coffee, ClipboardList, Hammer, Rocket } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: Coffee,
      title: "Coffee & Conversation",
      description: "Understanding your real needs",
      details: "We start with a relaxed chat to understand what you're actually trying to achieve. No sales pitch, just genuine questions."
    },
    {
      icon: ClipboardList,
      title: "Clear Planning",
      description: "Honest timeline and pricing, no surprises",
      details: "You'll get a straightforward plan with realistic timelines and transparent pricing. If something changes, we'll tell you immediately."
    },
    {
      icon: Hammer,
      title: "Building Together",
      description: "Regular updates in language you understand",
      details: "We'll show you progress regularly and explain everything in plain English. You're involved every step of the way."
    },
    {
      icon: Rocket,
      title: "Launch & Partnership",
      description: "Ongoing support that actually supports",
      details: "We don't disappear after launch. We're here to help your software grow with your business."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-friendly-gray-900 mb-16 text-center">
            How We Work <span className="text-warm-orange-600">With You</span>
          </h2>

          {/* Process Steps */}
          <div className="grid lg:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative bg-gradient-to-br from-warm-orange-50 to-soft-amber-50 rounded-xl p-8 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-warm-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-warm-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-friendly-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-warm-orange-600 font-medium mb-4">
                  {step.description}
                </p>
                <p className="text-friendly-gray-600 leading-relaxed">
                  {step.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
