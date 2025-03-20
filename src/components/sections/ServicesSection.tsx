
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import JargonTooltip from '@/components/ui/JargonTooltip';
import { Server, Database, Globe, Zap, Shield, Lock, Cpu, Cloud } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("blockchain");

  const services = [
    {
      id: "blockchain",
      title: "Blockchain Solutions",
      description: "Our proprietary blockchain technology solves problems you didn't know you had with solutions you don't understand.",
      icon: <Database className="h-12 w-12 text-accent" />,
      features: [
        "Immutable Ledger Technology™ that no one actually uses",
        "Smart contracts that are neither smart nor contracts",
        "Enterprise-grade consensus algorithms (we vote in the office)",
        "Decentralized architecture (our servers are in different rooms)"
      ]
    },
    {
      id: "ai",
      title: "AI & Machine Learning",
      description: "We use sophisticated algorithms to predict things that don't matter and analyze data you didn't need to collect.",
      icon: <Cpu className="h-12 w-12 text-accent" />,
      features: [
        "Neural networks that mostly just recognize cats",
        "Deep learning models trained on our CEO's emails",
        "Natural language processing that misunderstands in 50+ languages",
        "Computer vision that occasionally works when the lights are on"
      ]
    },
    {
      id: "cloud",
      title: "Cloud Integration",
      description: "Move your on-premises problems to our overpriced cloud where they become someone else's problems (still yours legally).",
      icon: <Cloud className="h-12 w-12 text-accent" />,
      features: [
        "Multi-cloud strategy (we don't know which one works best)",
        "Serverless architecture (the servers are just hidden better)",
        "Enterprise-grade SLAs that we've creatively worded to avoid liability",
        "Microservices that are actually just monoliths in disguise"
      ]
    },
    {
      id: "security",
      title: "Cybersecurity",
      description: "Our security solutions protect your data from everyone except us, our partners, and anyone who really wants it.",
      icon: <Shield className="h-12 w-12 text-accent" />,
      features: [
        "End-to-end encryption* (*some assembly required)",
        "Zero-trust architecture (we don't trust our own code either)",
        "Advanced threat detection (we'll alert you after the breach)",
        "Comprehensive security audits conducted by our intern"
      ]
    }
  ];

  return (
    <section id="solutions" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-2 px-3 py-1 bg-primary/10 rounded-full text-xs font-semibold uppercase tracking-wider text-primary">
            Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <JargonTooltip term="Enterprise-Grade">Enterprise-Grade</JargonTooltip> <JargonTooltip term="Solutions">Solutions</JargonTooltip> for <JargonTooltip term="Digital Transformation">Digital Transformation</JargonTooltip>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive suite of services that we'll describe with impressive-sounding jargon rather than explaining what they actually do.
          </p>
        </div>

        <Tabs defaultValue="blockchain" className="mb-16">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent h-auto">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="data-[state=active]:bg-accent data-[state=active]:text-white py-3 px-4 rounded-xl flex flex-col items-center gap-2 h-auto"
              >
                {React.cloneElement(service.icon, { className: "h-6 w-6" })}
                <span>{service.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-8">
              <div className="glass-panel rounded-2xl overflow-hidden">
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="bg-accent/10 p-4 rounded-2xl">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <ul className="space-y-3">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <Zap className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-accent/5 p-6 border-t border-border">
                  <p className="text-sm font-medium text-center">
                    72% of our clients can't explain what this service does, but they keep paying for it.
                  </p>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Used By Companies You've Never Heard Of</h3>
          <div className="flex flex-wrap justify-center gap-8 opacity-50">
            {['Alpha', 'BetaCorp', 'Gamma Tech', 'Delta Solutions', 'Epsilon AI'].map((company) => (
              <div key={company} className="text-xl font-mono font-bold">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
