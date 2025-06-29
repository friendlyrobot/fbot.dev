
import { Heart, Users, Award } from 'lucide-react';

const ApproachSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-warm-orange-50 to-soft-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-friendly-gray-900 mb-12 text-center">
            Why We Do Things <span className="text-warm-orange-600">Differently</span>
          </h2>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <p className="text-xl text-friendly-gray-700 leading-relaxed mb-8">
                  We believe technology should make your life easier, not more complicated. 
                  Since 2017, we've been proving that high-quality software doesn't need to 
                  come with attitude, jargon, or impossible-to-understand explanations.
                </p>
                <p className="text-xl text-friendly-gray-700 leading-relaxed">
                  We're just a small team who genuinely love solving problems and building 
                  partnerships that last.
                </p>
              </div>

              {/* Visual Elements */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-warm-orange-100 rounded-lg flex items-center justify-center">
                      <Heart className="h-6 w-6 text-warm-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-friendly-gray-900">Genuine Care</h3>
                    <p className="text-friendly-gray-600">We actually care about your success</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-warm-orange-100 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-warm-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-friendly-gray-900">Real Partnerships</h3>
                    <p className="text-friendly-gray-600">Long-term relationships, not one-off projects</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-warm-orange-100 rounded-lg flex items-center justify-center">
                      <Award className="h-6 w-6 text-warm-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-friendly-gray-900">Proven Quality</h3>
                    <p className="text-friendly-gray-600">7+ years of delivering results that work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
