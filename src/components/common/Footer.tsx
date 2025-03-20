
import React from 'react';
import { Server, Twitter, Linkedin, Github, ChevronRight, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 pt-16 pb-10 border-t border-border/30">
      <div className="container px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Server className="h-5 w-5 text-accent" />
              <span className="font-bricolage text-lg font-bold">QuantumSynth</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Disrupting the disruptors since yesterday with meaningless jargon and questionable expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors p-2 rounded-full hover:bg-accent/10">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors p-2 rounded-full hover:bg-accent/10">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors p-2 rounded-full hover:bg-accent/10">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-5">
            <h4 className="text-sm font-semibold uppercase tracking-wider font-bricolage">Solutions</h4>
            {['Blockchain-as-a-Service', 'AI-Powered Insights', 'Quantum Computing', 'Edge Computing'].map((item) => (
              <a key={item} href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                {item}
              </a>
            ))}
          </div>
          
          <div className="space-y-5">
            <h4 className="text-sm font-semibold uppercase tracking-wider font-bricolage">Company</h4>
            {['About Us', 'Investors', 'Careers', 'Press Releases'].map((item) => (
              <a key={item} href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                {item}
              </a>
            ))}
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider font-bricolage mb-5">Subscribe to our newsletter</h4>
            <p className="text-sm text-muted-foreground mb-5">
              Get exclusive access to buzzwords before they become mainstream.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="px-4 py-3 rounded-l-md w-full text-sm bg-background/50 border border-r-0 border-border/50 focus:outline-none focus:ring-1 focus:ring-accent/50"
              />
              <button className="bg-accent text-accent-foreground rounded-r-md px-3 hover:bg-accent/90 transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/20 text-center text-sm text-muted-foreground">
          <p className="mb-4">
            © {new Date().getFullYear()} QuantumSynth, Inc. All rights reserved. Terms that no one reads. Privacy policy that collects all data.
          </p>
          <p className="text-xs flex items-center justify-center">
            Made with <Heart className="h-3 w-3 mx-1 text-destructive" /> and unnecessary complexity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
