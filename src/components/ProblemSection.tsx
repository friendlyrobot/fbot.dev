
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-friendly-gray-900 mb-8">
            Tired of Tech That <span className="text-warm-orange-600">Doesn't Work for You?</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-friendly-gray-600 mb-16 leading-relaxed">
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                  <point.icon className="h-8 w-8 text-red-600" />
                </div>
                <p className="text-lg text-friendly-gray-700 leading-relaxed">
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
