
import React, { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface JargonProps {
  term: string;
  children: React.ReactNode;
}

const jargonDefinitions: Record<string, string> = {
  "blockchain": "Something about immutable ledgers that we don't fully understand either.",
  "ai": "If-else statements with a fancy name and a higher price tag.",
  "machine learning": "When computers learn from data, like how we learn nothing from our mistakes.",
  "synergy": "Corporate-speak for \"it might work together, we're not sure.\"",
  "disruption": "Making things worse, but with an app.",
  "scalable": "It works for 10 users. Beyond that, we make no promises.",
  "agile": "Moving deadlines frequently while using sticky notes.",
  "paradigm shift": "A complete change in approach that somehow changes nothing at all.",
  "vertical integration": "Doing everything ourselves because no one else gets our vision.",
  "quantum": "Adding this word makes any technology sound 10x more impressive and expensive.",
  "leverage": "Using something that already exists and pretending we invented it.",
  "ecosystem": "A bunch of incompatible products we're forcing to work together.",
  "cloud-native": "It's someone else's computer, but we're charging you for it.",
  "digital transformation": "Expensive consultants tell you to use Slack.",
  "deep tech": "Technology so advanced that it doesn't need to exist yet.",
  "revolutionary": "Slightly different from the last version.",
  "cutting-edge": "The bugs haven't been found yet.",
  "proprietary algorithm": "We added a random number generator.",
  "neural network": "Math that gives unpredictable results, just like our business model.",
  "thought leadership": "Opinions we wrote down and called content.",
  "stealth mode": "We don't have a product yet.",
  "mvp": "The bare minimum we could build and still ask for funding.",
  "next-generation": "The same as the current generation, but with a new logo.",
  "robust": "It crashes less than half the time.",
  "enterprise-grade": "Unnecessarily complicated and expensive.",
  "hyper-converged": "We put everything into one box and tripled the price.",
  "silicon valley-tested": "Twenty-somethings in hoodies said it was \"cool.\"",
  "disintermediate": "Cut out the middleman and become the middleman.",
  "growth hacking": "Marketing, but we don't call it that because it sounds boring.",
  "pivot": "Our original idea failed spectacularly.",
  "big data": "More information than our spreadsheet can handle.",
  "web3": "Like the regular web, but with more scams.",
  "decentralized": "No one is in charge, especially when things go wrong.",
  "synergize": "When two useless products combine to form one slightly less useless product.",
  "blockchain-enabled": "Regular software but with a blockchain somewhere in the background doing nothing useful.",
  "digital-first": "We have a website.",
  "iot": "Everyday objects connected to the internet for no good reason.",
  "revolutionary algorithm": "We run basic calculations but do them on expensive servers.",
  "mission-critical": "It would be nice if it worked, but we'll survive when it doesn't.",
  "paradigms": "Things we pretend to understand during meetings.",
  "proprietary": "We added a login screen to open-source code.",
  "venture capital": "Money given to us by people who heard we used the word 'blockchain'."
};

const JargonTooltip: React.FC<JargonProps> = ({ term, children }) => {
  const normalizedTerm = term.toLowerCase();
  const definition = jargonDefinitions[normalizedTerm] || "Even we don't know what this means, but it sounds impressive!";

  return (
    <TooltipProvider>
      <Tooltip delayDuration={200}>
        <TooltipTrigger className="jargon inline-block" asChild>
          <span>{children}</span>
        </TooltipTrigger>
        <TooltipContent side="top" className="max-w-xs p-4 text-sm glass-panel">
          <p className="tracking-normal leading-relaxed"><strong>{term}:</strong> {definition}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default JargonTooltip;
