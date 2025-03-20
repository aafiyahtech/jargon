
import React, { useState } from 'react';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, 
  ResponsiveContainer, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, Cell 
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight, ChevronUp, ChevronDown, Maximize2 } from 'lucide-react';

const DashboardSection = () => {
  const [activeMetric, setActiveMetric] = useState("investor");
  
  const metrics = {
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

  const revenueData = [
    { name: 'Jan', projected: 4000, actual: 0 },
    { name: 'Feb', projected: 5000, actual: 0 },
    { name: 'Mar', projected: 6000, actual: 0 },
    { name: 'Apr', projected: 8000, actual: 0 },
    { name: 'May', projected: 10000, actual: 0 },
    { name: 'Jun', projected: 13000, actual: 0 }
  ];

  const marketShareData = [
    { name: 'Competitors', value: 95 },
    { name: 'Our Company', value: 0.001 },
    { name: 'Rounding Error', value: 4.999 }
  ];

  const teamPerformanceData = [
    { name: 'Coffee Consumed', value: 95 },
    { name: 'Meetings Attended', value: 85 },
    { name: 'Work Completed', value: 15 },
    { name: 'Buzzwords Used', value: 99 }
  ];

  const COLORS = ['#8B5CF6', '#EC4899', '#10B981', '#F97316'];

  const stakeholderData = [
    { name: 'CEO', compensation: 950000, contribution: 5 },
    { name: 'CTO', compensation: 750000, contribution: 10 },
    { name: 'Board', compensation: 500000, contribution: 2 },
    { name: 'Engineers', compensation: 350000, contribution: 80 }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/10">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 bg-accent/15 rounded-full text-sm font-medium uppercase tracking-wider text-accent">
            Analytics
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Interactive Dashboard</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visualizing our non-existent progress with beautiful charts that mean absolutely nothing.
          </p>
        </div>

        <div className="glass-panel rounded-xl overflow-hidden p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {Object.entries(metrics).map(([key, metric]) => (
              <motion.div 
                key={key}
                className={`rounded-xl p-6 border cursor-pointer transition-all ${activeMetric === key ? 'bg-accent/10 border-accent' : 'bg-card border-border hover:bg-muted/20'}`}
                onClick={() => setActiveMetric(key)}
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
                    <LineChart data={revenueData}>
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
            </TabsContent>
            
            <TabsContent value="market" className="pt-8">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-6">Market Share Analysis</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={marketShareData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                      >
                        {marketShareData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="performance" className="pt-8">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-6">Team Performance Metrics</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={teamPerformanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value" name="Percentage" fill="#8B5CF6">
                        {teamPerformanceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="stakeholders" className="pt-8">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-6">Stakeholder Analysis</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Stakeholder</TableHead>
                      <TableHead className="text-right">Annual Compensation</TableHead>
                      <TableHead className="text-right">Contribution %</TableHead>
                      <TableHead className="text-right">ROI</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {stakeholderData.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell className="font-medium">{row.name}</TableCell>
                        <TableCell className="text-right">${row.compensation.toLocaleString()}</TableCell>
                        <TableCell className="text-right">{row.contribution}%</TableCell>
                        <TableCell className={`text-right ${row.contribution > (row.compensation / 10000) ? 'text-green-500' : 'text-red-500'}`}>
                          {(row.contribution / (row.compensation / 10000)).toFixed(2)}x
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
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
