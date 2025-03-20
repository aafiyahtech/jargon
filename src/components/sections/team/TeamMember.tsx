
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Coffee, Github, Linkedin, Twitter } from 'lucide-react';
import { TeamMemberType } from './types';

interface TeamMemberProps {
  member: TeamMemberType;
  index: number;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  member, 
  index, 
  isHovered, 
  onMouseEnter, 
  onMouseLeave 
}) => {
  return (
    <div 
      className="glass-card rounded-xl p-8 text-center hover-lift group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative mb-6 mx-auto">
        <Avatar className="w-28 h-28 mx-auto border-4 border-background shadow-xl transition-transform duration-300 group-hover:scale-105">
          <AvatarImage src={member.image} alt={member.name} />
          <AvatarFallback className="text-xl bg-primary text-primary-foreground">
            {member.initial}
          </AvatarFallback>
        </Avatar>
        {isHovered && (
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
      <h3 className="font-bold text-xl mb-2 font-bricolage">{member.name}</h3>
      <p className="text-accent text-sm mb-4">{member.title}</p>
      <p className="text-muted-foreground text-sm mb-5">{member.bio}</p>
      <div className="flex justify-center space-x-4 text-muted-foreground">
        <a href="#" className="hover:text-accent transition-colors">
          <Twitter className="h-4 w-4" />
        </a>
        <a href="#" className="hover:text-accent transition-colors">
          <Linkedin className="h-4 w-4" />
        </a>
        <a href="#" className="hover:text-accent transition-colors">
          <Github className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default TeamMember;
