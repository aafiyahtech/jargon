
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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        scrolled 
          ? 'glass-panel py-3 border-b border-white/10 shadow-md' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10">
        <a href="#" className="flex items-center space-x-2 group">
          <Server className="h-6 w-6 text-accent transition-all duration-300 group-hover:rotate-12" />
          <span className="font-bricolage text-lg md:text-xl font-bold tracking-tight">QuantumSynth</span>
        </a>

        <nav className="hidden md:flex items-center space-x-10">
          {['Solutions', 'Technology', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-accent text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 active:translate-y-0"
          >
            Synergize Now
          </a>
        </nav>

        <button 
          className="md:hidden text-primary h-10 w-10 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <AlignJustify className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10">
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
            className="px-8 py-3 rounded-full bg-accent text-white text-base font-medium"
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
