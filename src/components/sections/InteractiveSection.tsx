
import React, { useState } from 'react';
import { 
  Share2, Zap, Sparkles, Lightbulb, LineChart, AlarmClock
} from 'lucide-react';
import { toast } from 'sonner';
import SectionHeader from '../interactive/SectionHeader';
import SolutionParameters from '../interactive/SolutionParameters';
import SolutionScore from '../interactive/SolutionScore';
import { Feature } from '../interactive/types';

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

  const features: Feature[] = [
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
        <SectionHeader 
          title="Custom Solution Generator" 
          description="Adjust the sliders below to customize your perfect solution that doesn't actually exist."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <SolutionParameters
              buzzwordLevel={buzzwordLevel}
              setBuzzwordLevel={setBuzzwordLevel}
              budgetLevel={budgetLevel}
              setBudgetLevel={setBudgetLevel}
              timelineLevel={timelineLevel}
              setTimelineLevel={setTimelineLevel}
              getBuzzwordDescription={getBuzzwordDescription}
              getTimelineDescription={getTimelineDescription}
              handleGeneratePitch={handleGeneratePitch}
            />
          </div>

          <div>
            <SolutionScore 
              score={calculateProjectScore()} 
              features={features}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSection;
