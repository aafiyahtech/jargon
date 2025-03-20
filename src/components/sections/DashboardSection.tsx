
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';
import MetricCard from '../dashboard/MetricCard';
import RevenueChart from '../dashboard/RevenueChart';
import MarketShareChart from '../dashboard/MarketShareChart';
import PerformanceChart from '../dashboard/PerformanceChart';
import StakeholderTable from '../dashboard/StakeholderTable';
import { Metric, RevenueData, MarketShareData, PerformanceData, StakeholderData } from '../dashboard/types';
import SectionHeader from '../interactive/SectionHeader';

const DashboardSection = () => {
  const [activeMetric, setActiveMetric] = useState("investor");
  
  const metrics: Record<string, Metric> = {
    investor: {
      title: "Investor Satisfaction",
      value: "87%",
      change: "+12%",
      positive: true,
      color: "text-green-500"
    },
    revenue: {
      title: "Actual Revenue",
      value: "$0",
      change: "-100%",
      positive: false,
      color: "text-red-500"
    },
    buzzwords: {
      title: "Buzzwords per Meeting",
      value: "43",
      change: "+26%",
      positive: true,
      color: "text-green-500"
    }
  };

  const revenueData: RevenueData[] = [
    { name: 'Jan', projected: 4000, actual: 0 },
    { name: 'Feb', projected: 5000, actual: 0 },
    { name: 'Mar', projected: 6000, actual: 0 },
    { name: 'Apr', projected: 8000, actual: 0 },
    { name: 'May', projected: 10000, actual: 0 },
    { name: 'Jun', projected: 13000, actual: 0 }
  ];

  const marketShareData: MarketShareData[] = [
    { name: 'Competitors', value: 95 },
    { name: 'Our Company', value: 0.001 },
    { name: 'Rounding Error', value: 4.999 }
  ];

  const teamPerformanceData: PerformanceData[] = [
    { name: 'Coffee Consumed', value: 95 },
    { name: 'Meetings Attended', value: 85 },
    { name: 'Work Completed', value: 15 },
    { name: 'Buzzwords Used', value: 99 }
  ];

  const COLORS = ['#8B5CF6', '#EC4899', '#10B981', '#F97316'];

  const stakeholderData: StakeholderData[] = [
    { name: 'CEO', compensation: 950000, contribution: 5 },
    { name: 'CTO', compensation: 750000, contribution: 10 },
    { name: 'Board', compensation: 500000, contribution: 2 },
    { name: 'Engineers', compensation: 350000, contribution: 80 }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/10">
      <div className="container max-w-6xl mx-auto">
        <SectionHeader 
          title="Interactive Dashboard"
          description="Visualizing our non-existent progress with beautiful charts that mean absolutely nothing."
        />

        <div className="glass-panel rounded-xl overflow-hidden p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {Object.entries(metrics).map(([key, metric]) => (
              <MetricCard
                key={key}
                metricKey={key}
                metric={metric}
                activeMetric={activeMetric}
                setActiveMetric={setActiveMetric}
              />
            ))}
          </div>

          <Tabs defaultValue="revenue" className="w-full">
            <TabsList className="grid grid-cols-4 max-w-md mx-auto">
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="market">Market Share</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="stakeholders">Stakeholders</TabsTrigger>
            </TabsList>
            
            <TabsContent value="revenue" className="pt-8">
              <RevenueChart data={revenueData} />
            </TabsContent>
            
            <TabsContent value="market" className="pt-8">
              <MarketShareChart data={marketShareData} colors={COLORS} />
            </TabsContent>
            
            <TabsContent value="performance" className="pt-8">
              <PerformanceChart data={teamPerformanceData} colors={COLORS} />
            </TabsContent>
            
            <TabsContent value="stakeholders" className="pt-8">
              <StakeholderTable data={stakeholderData} />
            </TabsContent>
          </Tabs>
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground italic">
            * All data is completely fabricated and has no basis in reality whatsoever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
