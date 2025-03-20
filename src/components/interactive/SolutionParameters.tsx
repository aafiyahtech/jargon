
import React from 'react';
import { Sliders } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface SolutionParametersProps {
  buzzwordLevel: number[];
  setBuzzwordLevel: (value: number[]) => void;
  budgetLevel: number[];
  setBudgetLevel: (value: number[]) => void;
  timelineLevel: number[];
  setTimelineLevel: (value: number[]) => void;
  getBuzzwordDescription: (level: number) => string;
  getTimelineDescription: (level: number) => string;
  handleGeneratePitch: () => void;
}

const SolutionParameters: React.FC<SolutionParametersProps> = ({
  buzzwordLevel,
  setBuzzwordLevel,
  budgetLevel,
  setBudgetLevel,
  timelineLevel,
  setTimelineLevel,
  getBuzzwordDescription,
  getTimelineDescription,
  handleGeneratePitch
}) => {
  return (
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
  );
};

export default SolutionParameters;
