
import React, { useState } from 'react';
import { Progress } from "@/components/ui/progress";
import FancyButton from '../ui/FancyButton';
import JargonTooltip from '../ui/JargonTooltip';
import { DollarSign, TrendingUp, PieChart, Layers } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

const FundingSection = () => {
  const [fundingProgress, setFundingProgress] = useState(42);
  const [showCongrats, setShowCongrats] = useState(false);
  const { toast } = useToast();
  
  const handleFundBurn = () => {
    // Increase the burn rate when the button is clicked
    const newProgress = Math.min(fundingProgress + 10, 100);
    setFundingProgress(newProgress);
    
    // Show toast for each milestone
    if (newProgress >= 60 && fundingProgress < 60) {
      toast({
        title: "Impressive Burning!",
        description: "You're burning cash faster than a Silicon Valley unicorn!",
      });
    }
    
    // Show congratulations when reaching 100%
    if (newProgress === 100 && fundingProgress < 100) {
      setShowCongrats(true);
    }
  };

  return (
    <section className="py-24 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-3 px-4 py-2 bg-primary/10 rounded-full text-xs font-semibold uppercase tracking-wider text-primary">
            Funding
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            $100M in <JargonTooltip term="Venture Capital">Venture Capital</JargonTooltip>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We convinced VCs to give us an obscene amount of money based on a pitch deck full of buzzwords and hockey stick graphs.
          </p>
        </div>

        <div className="glass-panel rounded-2xl overflow-hidden mb-20 shadow-lg">
          <div className="p-10 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Our Impressive <JargonTooltip term="Burn Rate">Burn Rate</JargonTooltip></h3>
                <p className="text-muted-foreground mb-8 text-lg">
                  We're experts at spending money on things that don't matter. Our burn rate is so impressive that VCs can't wait to give us more.
                </p>
                
                <div className="mb-10">
                  <div className="flex justify-between mb-3">
                    <span className="text-sm font-medium">Funding Burned</span>
                    <span className="text-sm font-medium">{fundingProgress}%</span>
                  </div>
                  <Progress value={fundingProgress} className="h-4" />
                </div>
                
                <FancyButton onClick={handleFundBurn} className="w-full">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Accelerate Burn Rate
                </FancyButton>
              </div>
              
              <div>
                <div className="rounded-xl bg-secondary p-8 mb-6 shadow-inner">
                  <h4 className="font-semibold mb-6 flex items-center text-lg">
                    <PieChart className="h-5 w-5 mr-2 text-primary" />
                    <span>Where the Money Goes</span>
                  </h4>
                  <ul className="space-y-5">
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

        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card rounded-xl p-8 hover-lift">
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-5">
              <Layers className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Series A</h3>
            <p className="text-sm text-muted-foreground mb-4">
              $20M raised based on a PowerPoint with gradients and buzzwords.
            </p>
            <div className="text-accent font-semibold">Led by Gullible Ventures</div>
          </div>
          
          <div className="glass-card rounded-xl p-8 hover-lift">
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-5">
              <Layers className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Series B</h3>
            <p className="text-sm text-muted-foreground mb-4">
              $30M after showing investors our fancy office with kombucha on tap.
            </p>
            <div className="text-accent font-semibold">Led by FOMO Capital</div>
          </div>
          
          <div className="glass-card rounded-xl p-8 hover-lift">
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-5">
              <Layers className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Series C</h3>
            <p className="text-sm text-muted-foreground mb-4">
              $50M based on "potential" and "market disruption" (we added AI to our pitch).
            </p>
            <div className="text-accent font-semibold">Led by Buzzword Partners</div>
          </div>
        </div>
      </div>

      {/* Congratulations Alert Dialog */}
      <AlertDialog open={showCongrats} onOpenChange={setShowCongrats}>
        <AlertDialogContent className="glass-panel">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl text-accent">🎉 Congratulations, Financial Genius!</AlertDialogTitle>
            <AlertDialogDescription className="text-lg">
              You've successfully burned through $100M of venture capital without shipping a single product! 
              <br /><br />
              Your ability to convert investor money into absolutely nothing is truly remarkable. 
              The board has approved your promotion to "Chief Money Incinerator" with a 
              corresponding bonus that will help us reach our next funding round even faster.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => {
              setShowCongrats(false);
              toast({
                title: "Achievement Unlocked",
                description: "Master of Capital Destruction",
              });
            }}>
              Accept Promotion
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
};

export default FundingSection;
