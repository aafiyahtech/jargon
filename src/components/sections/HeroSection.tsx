
import React, { useState, useEffect } from 'react';
import FancyButton from '@/components/ui/FancyButton';
import AnimatedText from '@/components/ui/AnimatedText';
import JargonTooltip from '@/components/ui/JargonTooltip';
import { Server, Zap, ArrowDown } from 'lucide-react';

const buzzwords = [
  "Synergizing",
  "Leveraging",
  "Disrupting",
  "Revolutionizing",
  "Accelerating",
  "Transforming",
  "Empowering",
  "Optimizing"
];

const HeroSection = () => {
  const [buzzword, setBuzzword] = useState(buzzwords[0]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = buzzwords.indexOf(buzzword);
      const nextIndex = (currentIndex + 1) % buzzwords.length;
      setBuzzword(buzzwords[nextIndex]);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [buzzword]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-24 px-6">
      {/* Abstract background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-radial from-primary/20 to-transparent rounded-full animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-radial from-accent/10 to-transparent rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-2/3 w-56 h-56 bg-gradient-radial from-primary/15 to-transparent rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative z-10 max-w-6xl mx-auto text-center">
        <div className="mb-8 inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
          </span>
          <span className="text-sm font-medium">We just raised $100M for no apparent reason</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-10 leading-tight">
          <span className="block mb-3">
            <span className="sliding-text-container">
              <span className="text-gradient inline-block transition-all duration-300 transform">
                {buzzword}
              </span>
            </span>
          </span>
          <span className="block mb-2">Enterprise <JargonTooltip term="Synergy">Synergy</JargonTooltip> Through</span>
          <span className="block"><JargonTooltip term="Quantum">Quantum</JargonTooltip> <JargonTooltip term="Blockchain">Blockchain</JargonTooltip></span>
        </h1>

        <AnimatedText 
          text="We leverage cutting-edge AI algorithms to disrupt traditional paradigms with our proprietary neural network ecosystem."
          className="max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed"
          delay={300}
        />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
          <FancyButton size="lg">
            Get Started
            <Zap className="ml-2 h-4 w-4" />
          </FancyButton>
          <FancyButton variant="outline" size="lg">
            Book a Demo That Never Happens
          </FancyButton>
        </div>

        <div className="flex justify-center">
          <a 
            href="#solutions" 
            className="animate-float flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="mb-2">Discover Our Vague Solutions</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
