
import React from 'react';
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Cell } from 'recharts';
import { PerformanceData } from './types';

interface PerformanceChartProps {
  data: PerformanceData[];
  colors: string[];
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ data, colors }) => {
  return (
    <div className="bg-card rounded-lg p-6 border">
      <h3 className="text-lg font-medium mb-6">Team Performance Metrics</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" name="Percentage" fill="#8B5CF6">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceChart;
