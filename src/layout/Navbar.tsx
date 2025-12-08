import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <img src="/img/hp-logo.png" alt="HP Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-primary group-hover:w-3/4 transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button variant="gradient" size="sm" asChild>
            <a href="/resume/Hiruni-Prabodhya.pdf" download="Hiruni-Prabodhya.pdf">My Resume</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-xl p-4 animate-fade-in">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
            <Button variant="gradient" className="mt-2" asChild>
              <a href="/resume/Hiruni-Prabodhya.pdf" download="Hiruni-Prabodhya.pdf" onClick={() => setIsMobileMenuOpen(false)}>
                My Resume
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
