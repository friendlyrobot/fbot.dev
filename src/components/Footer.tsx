import { Mail, MapPin, Twitter, Linkedin, Github, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-friendly-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-warm-orange-400 mb-4">
              🤖 Friendly Robot
            </div>
            <p className="text-friendly-gray-300 mb-6 leading-relaxed">
              Making tech friendly since 2017. We build software that actually
              makes sense for real businesses in Sydney and beyond.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-friendly-gray-400 hover:text-warm-orange-400 transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-friendly-gray-400 hover:text-warm-orange-400 transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-warm-orange-400 mr-3" />
                <span className="text-friendly-gray-300">contact@fbot.dev</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-warm-orange-400 mr-3" />
                <span className="text-friendly-gray-300">
                  Sydney, Australia
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a
                href="#home"
                className="block text-friendly-gray-300 hover:text-warm-orange-400 transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#services"
                className="block text-friendly-gray-300 hover:text-warm-orange-400 transition-colors duration-200"
              >
                Services
              </a>
              <a
                href="#about"
                className="block text-friendly-gray-300 hover:text-warm-orange-400 transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#contact"
                className="block text-friendly-gray-300 hover:text-warm-orange-400 transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-friendly-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-friendly-gray-400 text-sm">
              © 2024 Friendly Robot. All rights reserved.
            </p>
            <p className="text-friendly-gray-400 text-sm mt-2 md:mt-0">
              Making tech friendly since 2017
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
