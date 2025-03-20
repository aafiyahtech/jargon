
import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { RevenueData } from './types';

interface RevenueChartProps {
  data: RevenueData[];
}

const RevenueChart: React.FC<RevenueChartProps> = ({ data }) => {
  return (
    <div className="bg-card rounded-lg p-6 border">
      <h3 className="text-lg font-medium mb-6">Projected vs Actual Revenue</h3>
      <div className="h-[300px] w-full">
        <ChartContainer
          config={{
            projected: {
              label: "Projected Revenue",
              theme: {
                light: "#8B5CF6",
                dark: "#A78BFA"
              }
            },
            actual: {
              label: "Actual Revenue",
              theme: {
                light: "#F97316",
                dark: "#FB923C"
              }
            }
          }}
        >
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="projected" 
              name="projected" 
              stroke="var(--color-projected)" 
              strokeWidth={2} 
              dot={{ r: 4 }} 
              activeDot={{ r: 6 }} 
            />
            <Line 
              type="monotone" 
              dataKey="actual" 
              name="actual" 
              stroke="var(--color-actual)" 
              strokeWidth={2} 
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
