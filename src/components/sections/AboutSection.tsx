
import React, { useRef, useEffect } from 'react';
import AnimatedText from '@/components/ui/AnimatedText';
import JargonTooltip from '@/components/ui/JargonTooltip';
import { Server, Zap, TrendingUp, Globe } from 'lucide-react';

const AboutSection = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
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
    <section id="about" className="py-20 px-6 bg-secondary">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-2 px-3 py-1 bg-primary/10 rounded-full text-xs font-semibold uppercase tracking-wider text-primary">
            About Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We're <span className="text-gradient">Definitely</span> Not Making This Up As We Go
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Founded yesterday by visionaries who couldn't get real jobs, QuantumSynth is disrupting industries we haven't identified yet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our <JargonTooltip term="Paradigm Shift">Paradigm Shift</JargonTooltip> Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                It all began in a <JargonTooltip term="WeWork">WeWork</JargonTooltip> with three founders, five MacBooks, and an unlimited supply of cold brew. We identified a critical gap in the market: not enough companies were using the words <JargonTooltip term="AI">AI</JargonTooltip> and <JargonTooltip term="blockchain">blockchain</JargonTooltip> in the same sentence.
              </p>
              <p>
                Our <JargonTooltip term="mission-critical">mission-critical</JargonTooltip> objective is to <JargonTooltip term="leverage">leverage</JargonTooltip> <JargonTooltip term="cutting-edge">cutting-edge</JargonTooltip> technologies to <JargonTooltip term="disrupt">disrupt</JargonTooltip> traditional <JargonTooltip term="paradigms">paradigms</JargonTooltip> through our <JargonTooltip term="proprietary">proprietary</JargonTooltip> <JargonTooltip term="neural network">neural network</JargonTooltip> <JargonTooltip term="ecosystem">ecosystem</JargonTooltip>.
              </p>
              <p>
                After securing our Series A of $100M (we're still not sure why they gave it to us), we expanded our team to include more people who also use these buzzwords regularly.
              </p>
            </div>
          </div>
          <div className="relative glass-panel p-8 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 z-0 opacity-50" />
            <div className="relative z-10">
              <h4 className="text-xl font-semibold mb-4">Our Core Values</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/20 p-2 rounded-full">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium">Unlimited Growth Potential</h5>
                    <p className="text-sm text-muted-foreground">We're growing so fast we don't have time to measure it.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/20 p-2 rounded-full">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium">Innovation Without Purpose</h5>
                    <p className="text-sm text-muted-foreground">If we can't explain it, it must be innovative.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/20 p-2 rounded-full">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium">Global Impact (Theoretically)</h5>
                    <p className="text-sm text-muted-foreground">We haven't impacted anything yet, but we plan to go global.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/20 p-2 rounded-full">
                    <Server className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium">Enterprise-Grade Everything</h5>
                    <p className="text-sm text-muted-foreground">If it costs more, it must be enterprise-grade.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-0">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center hover-lift">
            <div className="text-4xl font-bold text-primary mb-2">42M+</div>
            <div className="text-sm text-muted-foreground">Lines of Unused Code</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center hover-lift">
            <div className="text-4xl font-bold text-primary mb-2">0</div>
            <div className="text-sm text-muted-foreground">Clear Use Cases</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center hover-lift">
            <div className="text-4xl font-bold text-primary mb-2">$100M</div>
            <div className="text-sm text-muted-foreground">VC Funding to Burn</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center hover-lift">
            <div className="text-4xl font-bold text-primary mb-2">∞</div>
            <div className="text-sm text-muted-foreground">Pivots Planned</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
