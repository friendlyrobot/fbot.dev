
import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-friendly-gray-200 rounded-lg focus:ring-2 focus:ring-warm-orange-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-friendly-gray-200 rounded-lg focus:ring-2 focus:ring-warm-orange-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-friendly-gray-200 rounded-lg focus:ring-2 focus:ring-warm-orange-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <Textarea
                    name="project"
                    placeholder="Tell us about your project..."
                    value={formData.project}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-friendly-gray-200 rounded-lg focus:ring-2 focus:ring-warm-orange-600 focus:border-transparent resize-none"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-warm-orange-600 hover:bg-warm-orange-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 group"
                >
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Alternative Contact */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-friendly-gray-900 mb-6">
                  Prefer to Chat?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-warm-orange-600 mr-4" />
                    <div>
                      <div className="font-semibold text-friendly-gray-900">Call us:</div>
                      <div className="text-friendly-gray-600">(02) XXXX-XXXX</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-warm-orange-600 mr-4" />
                    <div>
                      <div className="font-semibold text-friendly-gray-900">Email us:</div>
                      <div className="text-friendly-gray-600">hello@friendlyrobot.com.au</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-warm-orange-600 mr-4" />
                    <div>
                      <div className="font-semibold text-friendly-gray-900">Based in:</div>
                      <div className="text-friendly-gray-600">Sydney, Australia</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="bg-warm-orange-600 text-white rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">Our Promise</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    <span>Free consultation</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    <span>Response within 24 hours</span>
                  </div>
                  <div className="flex items-center">
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
