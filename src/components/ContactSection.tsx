
import { Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-warm-orange-50 to-soft-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-friendly-gray-900 mb-6">
              Ready to Build Something That <span className="text-warm-orange-600">Actually Works?</span>
            </h2>
            <p className="text-xl text-friendly-gray-600">
              Let's have an honest conversation about what you need (no sales pitch, we promise)
            </p>
          </div>

          <div className="flex justify-center">
            {/* Contact Info */}
            <div className="max-w-2xl w-full space-y-8">
              {/* Main Contact */}
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <h3 className="text-2xl font-semibold text-friendly-gray-900 mb-6">
                  Get In Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-center">
                    <Mail className="h-6 w-6 text-warm-orange-600 mr-4" />
                    <div>
                      <div className="font-semibold text-friendly-gray-900">Email us:</div>
                      <div className="text-friendly-gray-600">contact@fbot.dev</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-warm-orange-600 mr-4" />
                    <div>
                      <div className="font-semibold text-friendly-gray-900">Based in:</div>
                      <div className="text-friendly-gray-600">Sydney, Australia</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="bg-warm-orange-600 text-white rounded-2xl p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Our Promise</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    <span>Free consultation</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    <span>Response within 24 hours</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    <span>Based in Sydney</span>
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

export default ContactSection;
