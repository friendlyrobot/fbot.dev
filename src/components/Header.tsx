
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-friendly-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-warm-orange-600">
              🤖 Friendly Robot
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-friendly-gray-600 hover:text-warm-orange-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-friendly-gray-600">
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-medium">(02) XXXX-XXXX</span>
            </div>
            <Button className="bg-warm-orange-600 hover:bg-warm-orange-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-friendly-gray-600 hover:text-warm-orange-600 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-friendly-gray-100">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-friendly-gray-600 hover:text-warm-orange-600 hover:bg-warm-orange-50 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center px-3 py-2 text-friendly-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-medium">(02) XXXX-XXXX</span>
              </div>
              <div className="px-3 py-2">
                <Button className="w-full bg-warm-orange-600 hover:bg-warm-orange-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
