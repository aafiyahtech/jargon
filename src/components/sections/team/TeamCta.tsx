
import React from 'react';

const TeamCta = () => {
  return (
    <div className="glass-panel rounded-xl overflow-hidden shadow-lg">
      <div className="px-10 py-12 text-center">
        <h3 className="text-2xl font-bold mb-5 font-bricolage">Want to Join Our Team?</h3>
        <p className="mb-8 text-muted-foreground text-lg">
          We're always looking for people who can create complex solutions for simple problems. Must be fluent in buzzwords and comfortable with ambiguity (we don't know what we're doing either).
        </p>
        <div className="inline-block px-6 py-3 bg-primary/10 rounded-full text-primary font-medium">
          We're totally hiring (but not really)
        </div>
      </div>
    </div>
  );
};

export default TeamCta;
