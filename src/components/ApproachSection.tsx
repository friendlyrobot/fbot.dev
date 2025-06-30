
import { Heart, Users, Award } from 'lucide-react';
import { NeobrutalismBox } from '@/components/ui/neobrutalism-box';

const ApproachSection = () => {
  return (
    <section className="py-20 bg-brand-background border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-brand-foreground mb-12 text-center uppercase">
            Why We Do Things <span className="text-brand-primary">Differently</span>
          </h2>

          {/* Main Content */}
          <NeobrutalismBox variant="white" className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <p className="text-xl text-brand-foreground leading-relaxed mb-8">
                  We believe technology should make your life easier, not more complicated. 
                  Since 2017, we've been proving that high-quality software doesn't need to 
                  come with attitude, jargon, or impossible-to-understand explanations.
                </p>
                <p className="text-xl text-brand-foreground leading-relaxed">
                  We're just a small team who genuinely love solving problems and building 
                  partnerships that last.
                </p>
              </div>

              {/* Visual Elements */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-accent rounded-md flex items-center justify-center border-2 border-black shadow-md">
                      <Heart className="h-6 w-6 text-black" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-foreground uppercase">Genuine Care</h3>
                    <p className="text-brand-foreground">We actually care about your success</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-accent rounded-md flex items-center justify-center border-2 border-black shadow-md">
                      <Users className="h-6 w-6 text-black" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-foreground uppercase">Real Partnerships</h3>
                    <p className="text-brand-foreground">Long-term relationships, not one-off projects</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-accent rounded-md flex items-center justify-center border-2 border-black shadow-md">
                      <Award className="h-6 w-6 text-black" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-foreground uppercase">Proven Quality</h3>
                    <p className="text-brand-foreground">7+ years of delivering results that work</p>
                  </div>
                </div>
              </div>
            </div>
          </NeobrutalismBox>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
