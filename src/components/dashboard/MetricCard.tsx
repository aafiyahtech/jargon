
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Metric } from './types';

interface MetricCardProps {
  metricKey: string;
  metric: Metric;
  activeMetric: string;
  setActiveMetric: (key: string) => void;
}

const MetricCard: React.FC<MetricCardProps> = ({
  metricKey,
  metric,
  activeMetric,
  setActiveMetric
}) => {
  return (
    <motion.div 
      className={`rounded-xl p-6 border cursor-pointer transition-all ${activeMetric === metricKey ? 'bg-accent/10 border-accent' : 'bg-card border-border hover:bg-muted/20'}`}
      onClick={() => setActiveMetric(metricKey)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-sm font-medium text-muted-foreground">{metric.title}</h3>
        <div className={`flex items-center ${metric.color}`}>
          {metric.positive ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          <span className="text-xs font-medium">{metric.change}</span>
        </div>
      </div>
      <div className="text-3xl font-bold">{metric.value}</div>
    </motion.div>
  );
};

export default MetricCard;
