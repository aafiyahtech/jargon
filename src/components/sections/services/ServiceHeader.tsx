
import React from 'react';
import JargonTooltip from '@/components/ui/JargonTooltip';

const ServiceHeader = () => {
  return (
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
  );
};

export default ServiceHeader;
