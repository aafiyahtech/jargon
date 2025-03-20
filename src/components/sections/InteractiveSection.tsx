
import React, { useState } from 'react';
import { 
  Sliders, Share2, Zap, DollarSign, 
  Sparkles, Lightbulb, LineChart, AlarmClock
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from 'sonner';

const InteractiveSection = () => {
  const [buzzwordLevel, setBuzzwordLevel] = useState([50]);
  const [budgetLevel, setBudgetLevel] = useState([500000]);
  const [timelineLevel, setTimelineLevel] = useState([50]);
  
  const getBuzzwordDescription = (level: number) => {
    if (level < 30) return "Basic";
    if (level < 60) return "Advanced";
    if (level < 90) return "Enterprise";
    return "Quantum";
  };
  
  const getTimelineDescription = (level: number) => {
    if (level < 30) return "1 year";
    if (level < 60) return "2 years";
    if (level < 90) return "3 years";
    return "Indefinite";
  };

  const calculateProjectScore = () => {
    // Meaningless calculation that looks important
    return Math.round((buzzwordLevel[0] * 0.4) + (budgetLevel[0] / 10000) + (timelineLevel[0] * 0.2));
  };

  const features = [
    { 
      name: "Enterprise Synergy",
      icon: <Share2 className="h-5 w-5" />,
      active: buzzwordLevel[0] > 40 
    },
    { 
      name: "Cloud-Native Architecture",
      icon: <Sparkles className="h-5 w-5" />,
      active: buzzwordLevel[0] > 30 
    },
    { 
      name: "Quantum Technology",
      icon: <Zap className="h-5 w-5" />,
      active: buzzwordLevel[0] > 70 
    },
    { 
      name: "AI-Driven Insights",
      icon: <Lightbulb className="h-5 w-5" />,
      active: buzzwordLevel[0] > 55 
    },
    { 
      name: "Blockchain Integration",
      icon: <LineChart className="h-5 w-5" />,
      active: buzzwordLevel[0] > 60 
    },
    { 
      name: "24/7 Support That Never Responds",
      icon: <AlarmClock className="h-5 w-5" />,
      active: budgetLevel[0] > 750000 
    },
  ];

  const handleGeneratePitch = () => {
    toast.success("Your customized nonsense pitch deck is ready!", {
      description: `With a buzzword level of ${getBuzzwordDescription(buzzwordLevel[0])} and a budget of $${budgetLevel[0].toLocaleString()}, we'll deliver absolutely nothing for ${getTimelineDescription(timelineLevel[0])}.`,
      duration: 5000
    });
  };

  return (
    <section id="interactive" className="py-20 px-6 bg-gradient-to-b from-background to-secondary/10">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary/15 rounded-full text-sm font-medium text-primary uppercase tracking-wider">
            Interactive
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Custom Solution Generator</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Adjust the sliders below to customize your perfect solution that doesn't actually exist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sliders className="mr-2 h-5 w-5" />
                  Solution Parameters
                </CardTitle>
                <CardDescription>
                  Adjust these meaningless parameters to configure your solution
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 flex-grow">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Buzzword Density</h3>
                    <Badge variant="outline">{getBuzzwordDescription(buzzwordLevel[0])}</Badge>
                  </div>
                  <Slider
                    value={buzzwordLevel}
                    onValueChange={setBuzzwordLevel}
                    max={100}
                    step={1}
                    className="py-4"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Budget</h3>
                    <Badge variant="outline">${budgetLevel[0].toLocaleString()}</Badge>
                  </div>
                  <Slider
                    value={budgetLevel}
                    onValueChange={setBudgetLevel}
                    min={100000}
                    max={1000000}
                    step={10000}
                    className="py-4"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Timeline</h3>
                    <Badge variant="outline">{getTimelineDescription(timelineLevel[0])}</Badge>
                  </div>
                  <Slider
                    value={timelineLevel}
                    onValueChange={setTimelineLevel}
                    max={100}
                    step={1}
                    className="py-4"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <button 
                  className="w-full py-2.5 px-4 rounded-lg bg-accent text-white font-medium hover:bg-accent/80 transition-colors"
                  onClick={handleGeneratePitch}
                >
                  Generate Custom Pitch
                </button>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="mr-2 h-5 w-5" />
                  Solution Score
                </CardTitle>
                <CardDescription>
                  Your solution's effectiveness score
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 flex-grow flex flex-col justify-between">
                <div className="text-center py-6">
                  <motion.div 
                    className="text-6xl font-bold text-accent mb-4"
                    key={calculateProjectScore()}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {calculateProjectScore()}
                  </motion.div>
                  <p className="text-muted-foreground">Meaningless Score</p>
                </div>

                <div className="space-y-2 mt-8">
                  <h3 className="font-medium mb-3">Included Features:</h3>
                  {features.map((feature, index) => (
                    <motion.div 
                      key={feature.name}
                      className={`flex items-center p-2 rounded-md ${feature.active ? 'bg-accent/10 text-accent' : 'bg-muted/20 text-muted-foreground'}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {feature.icon}
                      <span className="ml-2 text-sm">{feature.name}</span>
                      {feature.active && (
                        <Badge variant="outline" className="ml-auto text-xs">
                          Included
                        </Badge>
                      )}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSection;
