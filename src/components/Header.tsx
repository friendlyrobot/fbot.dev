import { useState, useRef, useMemo, useCallback, memo } from "react";
import {
  Menu,
  X,
  ChevronDown,
  FileText,
  Edit3,
  Calculator,
} from "lucide-react";
import { Link } from "react-router-dom";
import { NeobrutalismBox } from "@/components/ui/neobrutalism-box";
import { useScroll } from "@/hooks/use-scroll";
import { useClickOutside } from "@/hooks/use-click-outside";

const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  const { isScrolled } = useScroll();

  const closeProducts = useCallback(() => {
    setIsProductsOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const toggleProducts = useCallback(() => {
    setIsProductsOpen((prev) => !prev);
  }, []);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsProductsOpen(false);
      setIsMenuOpen(false);
    }
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  useClickOutside(productsRef, closeProducts);

  const navItems = useMemo(
    () => [
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "News", href: "/news" },
      { name: "Contact", href: "/contact" },
    ],
    [],
  );

  const products = useMemo(
    () => [
      {
        name: "BloodHawk",
        description:
          "AI-powered blood test analysis for better health insights",
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
      {
        name: "Sparrow Property Calculator",
        description:
          "Comprehensive mortgage calculator for Australians with ROI and stamp duty calculations",
        icon: Calculator,
        productLink: "/products/sparrow",
        privacyLink: "/products/sparrow/privacy-policy",
        downloadLink:
          "https://apps.apple.com/app/sparrow-property-calculator/id6751142315",
      },
    ],
    [],
  );

  return (
    <header
      className={`bg-brand-background/95 backdrop-blur-md border-b-4 border-black sticky top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
      role="banner"
      onKeyDown={handleKeyDown}
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
          <nav
            className="hidden md:flex items-center space-x-8"
            role="navigation"
            aria-label="Main navigation"
          >
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
                onClick={toggleProducts}
                className="flex items-center text-lg font-bold text-brand-foreground hover:text-brand-primary transition-colors duration-200"
                aria-expanded={isProductsOpen}
                aria-haspopup="true"
                aria-label="Products menu"
              >
                Products
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${isProductsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isProductsOpen && (
                <div
                  className="absolute top-full right-0 mt-2 w-96 z-50"
                  role="menu"
                  aria-label="Products menu"
                >
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
                                    onClick={closeProducts}
                                  >
                                    Learn More →
                                  </Link>
                                  <Link
                                    to={product.privacyLink}
                                    className="text-sm text-brand-primary hover:underline font-medium"
                                    onClick={closeProducts}
                                  >
                                    Privacy Policy →
                                  </Link>
                                  {product.downloadLink && (
                                    <a
                                      href={product.downloadLink}
                                      className="text-sm text-brand-primary hover:underline font-medium"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      Download App →
                                    </a>
                                  )}
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
            onClick={toggleMenu}
            className="md:hidden text-brand-foreground hover:text-brand-primary transition-colors duration-200"
            aria-expanded={isMenuOpen}
            aria-label="Toggle mobile menu"
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
          <div
            className="md:hidden bg-brand-background border-t-4 border-black"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 rounded-md text-lg font-bold text-brand-foreground hover:text-brand-primary hover:bg-brand-secondary"
                  onClick={closeMenu}
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
                              onClick={closeMenu}
                            >
                              Learn More →
                            </Link>
                            <Link
                              to={product.privacyLink}
                              className="text-xs text-brand-primary hover:underline font-medium"
                              onClick={closeMenu}
                            >
                              Privacy Policy →
                            </Link>
                            {product.downloadLink && (
                              <a
                                href={product.downloadLink}
                                className="text-xs text-brand-primary hover:underline font-medium"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Download App →
                              </a>
                            )}
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
});

Header.displayName = "Header";

export default Header;
