
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from 'lucide-react';

interface SolutionFeatureProps {
  name: string;
  icon: React.ReactNode;
  active: boolean;
  index: number;
}

const SolutionFeature: React.FC<SolutionFeatureProps> = ({ name, icon, active, index }) => {
  return (
    <motion.div 
      className={`flex items-center p-2 rounded-md ${active ? 'bg-accent/10 text-accent' : 'bg-muted/20 text-muted-foreground'}`}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {icon}
      <span className="ml-2 text-sm">{name}</span>
      {active && (
        <Badge variant="outline" className="ml-auto text-xs">
          Included
        </Badge>
      )}
    </motion.div>
  );
};

export default SolutionFeature;
