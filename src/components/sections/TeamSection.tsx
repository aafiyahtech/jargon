
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
      image: "/placeholder.svg",
      initial: "AM"
    },
    {
      name: "Jamie Chen",
      title: "VP of Artificial Hype",
      bio: "Has read half a book on machine learning. Loves to use 'algorithm' in sentences where it doesn't belong.",
      image: "/placeholder.svg",
      initial: "JC"
    },
    {
      name: "Taylor Reed",
      title: "Head of Buzzword Integration",
      bio: "Creates innovative-sounding job titles for the team. Specializes in making simple concepts sound revolutionary.",
      image: "/placeholder.svg",
      initial: "TR"
    },
    {
      name: "Morgan Smith",
      title: "Director of Quantum Confusion",
      bio: "Adds 'quantum' to every product we offer. Isn't entirely sure what quantum means, but neither are our clients.",
      image: "/placeholder.svg",
      initial: "MS"
    }
  ];
  
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section id="team" className="py-20 px-6 bg-secondary">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-2 px-3 py-1 bg-primary/10 rounded-full text-xs font-semibold uppercase tracking-wider text-primary">
            Our Team
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our Pretentious Visionaries
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team of ex-something professionals with inflated titles and questionable expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-6 text-center hover-lift"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="relative mb-6 mx-auto">
                <Avatar className="w-24 h-24 mx-auto border-4 border-background">
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
              <h3 className="font-bold text-lg mb-1">{member.name}</h3>
              <p className="text-accent text-sm mb-3">{member.title}</p>
              <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-3 text-muted-foreground">
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

        <div className="glass-panel rounded-xl overflow-hidden">
          <div className="px-8 py-10 text-center">
            <h3 className="text-xl font-bold mb-4">Want to Join Our Team?</h3>
            <p className="mb-6 text-muted-foreground">
              We're always looking for people who can create complex solutions for simple problems. Must be fluent in buzzwords and comfortable with ambiguity (we don't know what we're doing either).
            </p>
            <div className="inline-block px-5 py-2 bg-primary/10 rounded-full text-primary font-medium">
              We're totally hiring (but not really)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
