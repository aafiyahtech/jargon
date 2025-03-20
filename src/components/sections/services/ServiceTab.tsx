
import React from 'react';
import { TabsTrigger } from "@/components/ui/tabs";

interface ServiceTabProps {
  id: string;
  title: string;
  icon: React.ReactElement;
}

const ServiceTab = ({ id, title, icon }: ServiceTabProps) => {
  return (
    <TabsTrigger
      value={id}
      className="data-[state=active]:bg-accent data-[state=active]:text-white py-3 px-4 rounded-xl flex flex-col items-center gap-2 h-auto"
    >
      {React.cloneElement(icon, { className: "h-6 w-6" })}
      <span>{title}</span>
    </TabsTrigger>
  );
};

export default ServiceTab;
