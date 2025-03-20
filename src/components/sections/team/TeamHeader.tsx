
import React from 'react';

const TeamHeader = () => {
  return (
    <div className="text-center mb-20">
      <div className="inline-block mb-4 px-4 py-1.5 bg-accent/15 rounded-full text-sm font-medium uppercase tracking-wider text-accent">
        Our Team
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
        <span className="relative z-10">Meet Our Pretentious Visionaries</span>
        <div className="absolute -bottom-3 left-0 w-full h-3 bg-primary/20 rounded-full transform -rotate-1"></div>
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg mt-6">
        Our team of ex-something professionals with inflated titles and questionable expertise.
      </p>
    </div>
  );
};

export default TeamHeader;
