
import React from 'react';
import { TabsContent } from "@/components/ui/tabs";
import { Zap } from 'lucide-react';
import { ServiceType } from './types';

interface ServiceContentProps {
  service: ServiceType;
}

const ServiceContent = ({ service }: ServiceContentProps) => {
  return (
    <TabsContent value={service.id} className="mt-8">
      <div className="glass-panel rounded-2xl overflow-hidden">
        <div className="p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-accent/10 p-4 rounded-2xl">
              {service.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Zap className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-accent/5 p-6 border-t border-border">
          <p className="text-sm font-medium text-center">
            72% of our clients can't explain what this service does, but they keep paying for it.
          </p>
        </div>
      </div>
    </TabsContent>
  );
};

export default ServiceContent;
