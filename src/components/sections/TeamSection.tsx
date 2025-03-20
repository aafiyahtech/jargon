
import React, { useState } from 'react';
import TeamHeader from './team/TeamHeader';
import TeamMember from './team/TeamMember';
import TeamCta from './team/TeamCta';
import { TeamMemberType } from './team/types';

const TeamSection = () => {
  const team: TeamMemberType[] = [
    {
      name: "Alex Morgan",
      title: "Chief Disruption Officer",
      bio: "Former barista who pivoted to tech after watching a YouTube video on blockchain. Now leads our disruptive non-strategies.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&auto=format&fit=crop&q=80",
      initial: "AM"
    },
    {
      name: "Jamie Chen",
      title: "VP of Artificial Hype",
      bio: "Has read half a book on machine learning. Loves to use 'algorithm' in sentences where it doesn't belong.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&auto=format&fit=crop&q=80",
      initial: "JC"
    },
    {
      name: "Taylor Reed",
      title: "Head of Buzzword Integration",
      bio: "Creates innovative-sounding job titles for the team. Specializes in making simple concepts sound revolutionary.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&q=80",
      initial: "TR"
    },
    {
      name: "Morgan Smith",
      title: "Director of Quantum Confusion",
      bio: "Adds 'quantum' to every product we offer. Isn't entirely sure what quantum means, but neither are our clients.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&auto=format&fit=crop&q=80",
      initial: "MS"
    }
  ];
  
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section id="team" className="py-28 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <TeamHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {team.map((member, index) => (
            <TeamMember 
              key={index}
              member={member}
              index={index}
              isHovered={hoveredMember === index}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            />
          ))}
        </div>

        <TeamCta />
      </div>
    </section>
  );
};

export default TeamSection;
