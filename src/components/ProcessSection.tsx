
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
    <section className="py-20 bg-brand-background border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-brand-foreground mb-16 text-center uppercase">
            How We Work <span className="text-brand-secondary">With You</span>
          </h2>

          {/* Process Steps */}
          <div className="grid lg:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative bg-white border-4 border-black rounded-lg p-8 animate-fade-in shadow-lg"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-black">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-brand-accent rounded-md flex items-center justify-center mb-4 border-2 border-black shadow-md">
                  <step.icon className="h-6 w-6 text-black" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-brand-foreground mb-2 uppercase">
                  {step.title}
                </h3>
                <p className="text-brand-primary font-medium mb-4">
                  {step.description}
                </p>
                <p className="text-brand-foreground leading-relaxed">
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
