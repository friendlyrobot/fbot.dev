import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, FileText, Edit3 } from "lucide-react";
import { Link } from "react-router-dom";
import { NeobrutalismBox } from "@/components/ui/neobrutalism-box";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        productsRef.current &&
        !productsRef.current.contains(event.target as Node)
      ) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  const products = [
    {
      name: "BloodHawk",
      description: "AI-powered blood test analysis for better health insights",
      icon: FileText,
      productLink: "/products/bloodhawk",
      privacyLink: "/products/bloodhawk/privacy-policy",
    },
    {
      name: "XWriter",
      description: "AI-powered content generation for X (Twitter) posts",
      icon: Edit3,
      productLink: "/products/xwriter",
      privacyLink: "/products/xwriter/privacy-policy",
    },
  ];

  return (
    <header
      className={`bg-brand-background/95 backdrop-blur-md border-b-4 border-black sticky top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-3xl font-bold text-brand-primary">
              🤖 FRIENDLY ROBOT
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-lg font-bold text-brand-foreground hover:text-brand-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}

            {/* Products Dropdown */}
            <div className="relative" ref={productsRef}>
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center text-lg font-bold text-brand-foreground hover:text-brand-primary transition-colors duration-200"
              >
                Products
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${isProductsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isProductsOpen && (
                <div className="absolute top-full right-0 mt-2 w-96 z-50">
                  <NeobrutalismBox variant="white" className="p-4 shadow-xl">
                    <div className="grid gap-4">
                      {products.map((product) => (
                        <div key={product.name} className="group">
                          <NeobrutalismBox
                            variant="white"
                            className="p-4 hover:shadow-lg transition-all duration-300"
                          >
                            <div className="flex items-start space-x-3">
                              <div className="w-10 h-10 bg-brand-accent rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <product.icon className="h-5 w-5 text-black" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold text-brand-foreground mb-1 uppercase">
                                  {product.name}
                                </h3>
                                <p className="text-sm text-brand-foreground mb-3 leading-relaxed">
                                  {product.description}
                                </p>
                                <div className="flex flex-col space-y-1">
                                  <Link
                                    to={product.productLink}
                                    className="text-sm text-brand-primary hover:underline font-medium"
                                    onClick={() => setIsProductsOpen(false)}
                                  >
                                    Learn More →
                                  </Link>
                                  <Link
                                    to={product.privacyLink}
                                    className="text-sm text-brand-primary hover:underline font-medium"
                                    onClick={() => setIsProductsOpen(false)}
                                  >
                                    Privacy Policy →
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </NeobrutalismBox>
                        </div>
                      ))}
                    </div>
                  </NeobrutalismBox>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-brand-foreground hover:text-brand-primary transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-brand-background border-t-4 border-black">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 rounded-md text-lg font-bold text-brand-foreground hover:text-brand-primary hover:bg-brand-secondary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Products Section */}
              <div className="px-3 py-2">
                <div className="text-lg font-bold text-brand-foreground mb-3 uppercase">
                  Products
                </div>
                <div className="space-y-3">
                  {products.map((product) => (
                    <NeobrutalismBox
                      key={product.name}
                      variant="white"
                      className="p-3 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-brand-accent rounded-md flex items-center justify-center">
                          <product.icon className="h-4 w-4 text-black" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-semibold text-brand-foreground mb-1 uppercase">
                            {product.name}
                          </h3>
                          <p className="text-xs text-brand-foreground mb-2 leading-relaxed">
                            {product.description}
                          </p>
                          <div className="flex flex-col space-y-1">
                            <Link
                              to={product.productLink}
                              className="text-xs text-brand-primary hover:underline font-medium"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              Learn More →
                            </Link>
                            <Link
                              to={product.privacyLink}
                              className="text-xs text-brand-primary hover:underline font-medium"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              Privacy Policy →
                            </Link>
                          </div>
                        </div>{" "}
                      </div>
                    </NeobrutalismBox>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
