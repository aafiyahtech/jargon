
import React from 'react';
import { Server, Twitter, Linkedin, Github, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Server className="h-5 w-5 text-accent" />
              <span className="font-mono text-lg font-bold">QuantumSynth</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Disrupting the disruptors since yesterday.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Solutions</h4>
            {['Blockchain-as-a-Service', 'AI-Powered Insights', 'Quantum Computing', 'Edge Computing'].map((item) => (
              <a key={item} href="#" className="block text-sm text-muted-foreground hover:text-primary">
                {item}
              </a>
            ))}
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Company</h4>
            {['About Us', 'Investors', 'Careers', 'Press Releases'].map((item) => (
              <a key={item} href="#" className="block text-sm text-muted-foreground hover:text-primary">
                {item}
              </a>
            ))}
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Subscribe to our newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get exclusive access to buzzwords before they become mainstream.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="px-3 py-2 rounded-l-md w-full text-sm bg-background border border-r-0"
              />
              <button className="bg-primary text-primary-foreground rounded-r-md px-3">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p className="mb-4">
            © {new Date().getFullYear()} QuantumSynth, Inc. All rights reserved. Terms that no one reads. Privacy policy that collects all data.
          </p>
          <p className="text-xs">
            Disclaimer: Any resemblance to actual tech companies with substance is purely coincidental.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
