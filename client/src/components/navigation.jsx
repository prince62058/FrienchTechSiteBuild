import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Code, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/theme-context";
const logoImage = "/images/Feiechtechlogo(copy)_1753162037206.png";
import heroVideo from "@assets/6036381_Keyboard_Laptop_3840x2160_1753162786293.mp4";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/pricing", label: "Pricing" },
    { href: "/careers", label: "Careers" },
  ];

  const isActive = (href) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 overflow-hidden ${
      isScrolled 
        ? 'bg-gray-800 border-b border-gray-700 shadow-lg' 
        : 'bg-transparent'
    }`}>
      
      <div className="container mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="FrienchTech Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-bold">
              <span className="text-[#d96c1e] font-medium">Friench</span>
              <span className="text-white">Tech</span>
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
                    ? "text-[#d96c1e]"
                    : "text-white hover:text-[#d96c1e]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-150 ${
                isScrolled 
                  ? 'text-white hover:bg-white/10' 
                  : theme === 'dark' 
                    ? 'text-white hover:bg-white/10'
                    : 'text-gray-800 hover:bg-gray-100'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link href="/contact">
              <Button className="bg-friench-blue text-white hover:bg-friench-blue/90 shadow-lg">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-white/95 backdrop-blur-md z-40">
            <div className="flex flex-col h-full pt-20 px-6 py-4">
              <div className="flex-1 space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block py-3 text-lg transition-colors font-medium ${
                      isActive(link.href)
                        ? "text-[#d96c1e]"
                        : "text-gray-800 hover:text-[#d96c1e]"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-[#d96c1e] text-white hover:bg-[#d96c1e]/90 py-3 text-lg shadow-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}