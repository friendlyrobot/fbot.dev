import { Mail, MapPin, Twitter, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-brand-foreground text-brand-foreground py-16 border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-brand-primary mb-4 uppercase">
              🤖 Friendly Robot
            </div>
            <p className="text-brand-foreground mb-6 leading-relaxed">
              Making tech friendly since 2017. We build software that actually
              makes sense for real businesses in Sydney and beyond.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/friendlyrobotco"
                className="text-brand-foreground hover:text-brand-primary transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/friendlyrobot"
                className="text-brand-foreground hover:text-brand-primary transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-brand-primary mr-3" />
                <span className="text-brand-foreground">contact@fbot.dev</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-brand-primary mr-3" />
                <span className="text-brand-foreground">Sydney, Australia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">
              Quick Links
            </h3>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-brand-foreground hover:text-brand-primary transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="block text-brand-foreground hover:text-brand-primary transition-colors duration-200"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="block text-brand-foreground hover:text-brand-primary transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Friendly Robot. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Making tech friendly since 2017
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
