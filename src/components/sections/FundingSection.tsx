
import React, { useState } from 'react';
import { Progress } from "@/components/ui/progress";
import FancyButton from '../ui/FancyButton';
import JargonTooltip from '../ui/JargonTooltip';
import { DollarSign, TrendingUp, PieChart, Layers } from 'lucide-react';

const FundingSection = () => {
  const [fundingProgress, setFundingProgress] = useState(42);
  
  const handleFundBurn = () => {
    // Increase the burn rate when the button is clicked
    setFundingProgress(Math.min(fundingProgress + 10, 100));
  };

  return (
    <section className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-2 px-3 py-1 bg-primary/10 rounded-full text-xs font-semibold uppercase tracking-wider text-primary">
            Funding
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            $100M in <JargonTooltip term="Venture Capital">Venture Capital</JargonTooltip>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We convinced VCs to give us an obscene amount of money based on a pitch deck full of buzzwords and hockey stick graphs.
          </p>
        </div>

        <div className="glass-panel rounded-2xl overflow-hidden mb-16">
          <div className="p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold mb-6">Our Impressive <JargonTooltip term="Burn Rate">Burn Rate</JargonTooltip></h3>
                <p className="text-muted-foreground mb-6">
                  We're experts at spending money on things that don't matter. Our burn rate is so impressive that VCs can't wait to give us more.
                </p>
                
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Funding Burned</span>
                    <span className="text-sm font-medium">{fundingProgress}%</span>
                  </div>
                  <Progress value={fundingProgress} className="h-3" />
                </div>
                
                <FancyButton onClick={handleFundBurn} className="w-full">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Accelerate Burn Rate
                </FancyButton>
              </div>
              
              <div>
                <div className="rounded-xl bg-secondary p-6 mb-6">
                  <h4 className="font-semibold mb-4 flex items-center">
                    <PieChart className="h-5 w-5 mr-2 text-primary" />
                    <span>Where the Money Goes</span>
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Office with Unnecessary Ball Pit</span>
                      <span className="font-medium">35%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Executive Retreats for "Strategy"</span>
                      <span className="font-medium">25%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Hiring More VPs than Engineers</span>
                      <span className="font-medium">20%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Digital Ads No One Clicks On</span>
                      <span className="font-medium">15%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Actual Product Development</span>
                      <span className="font-medium">5%</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-sm text-muted-foreground italic text-center">
                  * These numbers were made up by our "Chief Financial Wizard" who previously worked as a fortune teller.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card rounded-xl p-6 hover-lift">
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
              <Layers className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Series A</h3>
            <p className="text-sm text-muted-foreground mb-3">
              $20M raised based on a PowerPoint with gradients and buzzwords.
            </p>
            <div className="text-accent font-semibold">Led by Gullible Ventures</div>
          </div>
          
          <div className="glass-card rounded-xl p-6 hover-lift">
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
              <Layers className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Series B</h3>
            <p className="text-sm text-muted-foreground mb-3">
              $30M after showing investors our fancy office with kombucha on tap.
            </p>
            <div className="text-accent font-semibold">Led by FOMO Capital</div>
          </div>
          
          <div className="glass-card rounded-xl p-6 hover-lift">
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
              <Layers className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Series C</h3>
            <p className="text-sm text-muted-foreground mb-3">
              $50M based on "potential" and "market disruption" (we added AI to our pitch).
            </p>
            <div className="text-accent font-semibold">Led by Buzzword Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundingSection;
