
import { MessageSquareX, Wrench, UserX } from 'lucide-react';

const ProblemSection = () => {
  const painPoints = [
    {
      icon: MessageSquareX,
      text: "Developers who speak in code instead of solutions"
    },
    {
      icon: Wrench,
      text: "Software that looks impressive but doesn't actually help your business"
    },
    {
      icon: UserX,
      text: "Agencies in fancy suits who disappear after the project"
    }
  ];

  return (
    <section className="py-20 bg-brand-background border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-brand-foreground mb-8 uppercase">
            Tired of Tech That <span className="text-brand-secondary">Doesn't Work for You?</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-brand-foreground mb-16 leading-relaxed">
            You shouldn't need a computer science degree to understand your own software. 
            Most development companies hide behind jargon, overpromise results, and leave you 
            with solutions that create more problems than they solve.
          </p>

          {/* Pain Points */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {painPoints.map((point, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-secondary rounded-md mb-6 border-2 border-black shadow-md">
                  <point.icon className="h-8 w-8 text-black" />
                </div>
                <p className="text-lg text-brand-foreground leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
