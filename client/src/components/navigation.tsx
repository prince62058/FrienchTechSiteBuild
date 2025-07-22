import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/pricing", label: "Pricing" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-friench-orange rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">FT</span>
            </div>
            <span className="text-2xl font-bold">
              <span className="text-friench-orange">Friench</span>
              <span className="text-gray-800">Tech</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors font-medium ${
                  isActive(link.href)
                    ? "text-friench-blue"
                    : "text-gray-700 hover:text-friench-blue"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-friench-blue text-white hover:bg-friench-blue/90">
                Contact
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-friench-blue"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors font-medium ${
                    isActive(link.href)
                      ? "text-friench-blue"
                      : "text-gray-700 hover:text-friench-blue"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="bg-friench-blue text-white hover:bg-friench-blue/90 w-full">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
