
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Coffee, Github, Linkedin, Twitter } from 'lucide-react';

const TeamSection = () => {
  const team = [
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
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=80",
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
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&auto=format&fit=crop&q=80",
      initial: "MS"
    }
  ];
  
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section id="team" className="py-24 px-6 bg-gradient-to-b from-background to-secondary/50">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1.5 bg-accent/15 rounded-full text-sm font-semibold uppercase tracking-wider text-accent">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {team.map((member, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-8 text-center hover-lift"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="relative mb-6 mx-auto">
                <Avatar className="w-28 h-28 mx-auto border-4 border-background shadow-xl">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="text-xl bg-primary text-primary-foreground">
                    {member.initial}
                  </AvatarFallback>
                </Avatar>
                {hoveredMember === index && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="bg-accent text-white rounded-full p-1.5">
                          <Coffee className="h-4 w-4" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">This person writes code after watching a 5-minute tutorial</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                )}
              </div>
              <h3 className="font-bold text-xl mb-2">{member.name}</h3>
              <p className="text-accent text-sm mb-4">{member.title}</p>
              <p className="text-muted-foreground text-sm mb-5">{member.bio}</p>
              <div className="flex justify-center space-x-4 text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-panel rounded-xl overflow-hidden shadow-lg">
          <div className="px-10 py-12 text-center">
            <h3 className="text-2xl font-bold mb-5">Want to Join Our Team?</h3>
            <p className="mb-8 text-muted-foreground text-lg">
              We're always looking for people who can create complex solutions for simple problems. Must be fluent in buzzwords and comfortable with ambiguity (we don't know what we're doing either).
            </p>
            <div className="inline-block px-6 py-3 bg-primary/10 rounded-full text-primary font-medium">
              We're totally hiring (but not really)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
