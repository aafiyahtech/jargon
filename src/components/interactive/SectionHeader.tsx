
import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center mb-12">
      <div className="inline-block mb-4 px-4 py-1.5 bg-primary/15 rounded-full text-sm font-medium text-primary uppercase tracking-wider">
        Interactive
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
