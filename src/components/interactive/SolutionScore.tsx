
import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SolutionFeature from './SolutionFeature';
import { Feature } from './types';

interface SolutionScoreProps {
  score: number;
  features: Feature[];
}

const SolutionScore: React.FC<SolutionScoreProps> = ({ score, features }) => {
  return (
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
            key={score}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {score}
          </motion.div>
          <p className="text-muted-foreground">Meaningless Score</p>
        </div>

        <div className="space-y-2 mt-8">
          <h3 className="font-medium mb-3">Included Features:</h3>
          {features.map((feature, index) => (
            <SolutionFeature
              key={feature.name}
              name={feature.name}
              icon={feature.icon}
              active={feature.active}
              index={index}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SolutionScore;
