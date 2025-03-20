
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { AlignJustify, X, Server, ChevronDown } from 'lucide-react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12',
        scrolled ? 'glass-panel py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <Server className="h-6 w-6 text-accent" />
          <span className="font-mono text-lg md:text-xl font-bold">QuantumSynth</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {['Solutions', 'Technology', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium hover-lift opacity-80 hover:opacity-100"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-accent text-white text-sm font-medium hover-lift"
          >
            Synergize Now
          </a>
        </nav>

        <button 
          className="md:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <AlignJustify />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {['Solutions', 'Technology', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xl font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-accent text-white text-base font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Synergize Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
