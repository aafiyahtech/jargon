
import React from 'react';
import { Database, Cpu, Cloud, Shield } from 'lucide-react';
import { ServiceType } from './types';

export const services: ServiceType[] = [
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
