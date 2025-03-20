
import React, { useRef, useEffect } from 'react';
import AnimatedText from '@/components/ui/AnimatedText';
import JargonTooltip from '@/components/ui/JargonTooltip';
import { Server, Zap, TrendingUp, Globe, Sparkles, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Instead of adding a class, directly make the element visible
            if (statsRef.current) {
              statsRef.current.style.opacity = '1';
              statsRef.current.style.transform = 'translateY(0)';
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-secondary to-secondary/60">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary/15 rounded-full text-sm font-semibold uppercase tracking-wider text-primary">
            About Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            <span className="relative z-10 text-gradient">We're Definitely Not Making This Up As We Go</span>
            <div className="absolute -bottom-3 left-0 w-full h-3 bg-accent/20 rounded-full transform -rotate-1"></div>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed mt-6">
            Founded yesterday by visionaries who couldn't get real jobs, QuantumSynth is disrupting industries we haven't identified yet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="bg-card p-8 rounded-2xl shadow-lg border border-border/40 transform hover:scale-[1.01] hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold mb-5 flex items-center">
              <Sparkles className="h-6 w-6 text-accent mr-3" />
              Our <JargonTooltip term="Paradigm Shift">Paradigm Shift</JargonTooltip> Story
            </h3>
            <div className="space-y-5 text-muted-foreground">
              <p className="leading-relaxed">
                It all began in a shared office space with three founders, five MacBooks, and an unlimited supply of cold brew. We identified a critical gap in the market: not enough companies were using the words <JargonTooltip term="AI">AI</JargonTooltip> and <JargonTooltip term="blockchain">blockchain</JargonTooltip> in the same sentence.
              </p>
              <p className="leading-relaxed">
                Our <JargonTooltip term="mission-critical">mission-critical</JargonTooltip> objective is to <JargonTooltip term="leverage">leverage</JargonTooltip> <JargonTooltip term="cutting-edge">cutting-edge</JargonTooltip> technologies to <JargonTooltip term="disrupt">disrupt</JargonTooltip> traditional <JargonTooltip term="paradigms">paradigms</JargonTooltip> through our <JargonTooltip term="proprietary">proprietary</JargonTooltip> <JargonTooltip term="neural network">neural network</JargonTooltip> <JargonTooltip term="ecosystem">ecosystem</JargonTooltip>.
              </p>
              <p className="leading-relaxed">
                After securing our Series A of $100M (we're still not sure why they gave it to us), we expanded our team to include more people who also use these buzzwords regularly.
              </p>
            </div>
          </div>
          <div className="relative bg-card p-8 rounded-2xl overflow-hidden shadow-lg border border-border/40">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 z-0 opacity-50" />
            <div className="relative z-10">
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <Lightbulb className="h-6 w-6 text-primary mr-3" />
                Our Core Values
              </h4>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/20 p-2.5 rounded-full">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg">Unlimited Growth Potential</h5>
                    <p className="text-muted-foreground">We're growing so fast we don't have time to measure it.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/20 p-2.5 rounded-full">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg">Innovation Without Purpose</h5>
                    <p className="text-muted-foreground">If we can't explain it, it must be innovative.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/20 p-2.5 rounded-full">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg">Global Impact (Theoretically)</h5>
                    <p className="text-muted-foreground">We haven't impacted anything yet, but we plan to go global.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/20 p-2.5 rounded-full">
                    <Server className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg">Enterprise-Grade Everything</h5>
                    <p className="text-muted-foreground">If it costs more, it must be enterprise-grade.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Modified stats section with direct style instead of animation class */}
        <div 
          ref={statsRef} 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          style={{ 
            opacity: 0, 
            transform: 'translateY(20px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <div className="bg-card p-8 rounded-xl shadow-md text-center hover-lift border border-border/40">
            <div className="text-4xl font-bold text-primary mb-3">42M+</div>
            <div className="text-sm text-muted-foreground">Lines of Unused Code</div>
          </div>
          <div className="bg-card p-8 rounded-xl shadow-md text-center hover-lift border border-border/40">
            <div className="text-4xl font-bold text-primary mb-3">0</div>
            <div className="text-sm text-muted-foreground">Clear Use Cases</div>
          </div>
          <div className="bg-card p-8 rounded-xl shadow-md text-center hover-lift border border-border/40">
            <div className="text-4xl font-bold text-primary mb-3">$100M</div>
            <div className="text-sm text-muted-foreground">VC Funding to Burn</div>
          </div>
          <div className="bg-card p-8 rounded-xl shadow-md text-center hover-lift border border-border/40">
            <div className="text-4xl font-bold text-primary mb-3">∞</div>
            <div className="text-sm text-muted-foreground">Pivots Planned</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
