
import React from 'react';
import { Tabs, TabsList } from "@/components/ui/tabs";
import ServiceHeader from './services/ServiceHeader';
import ServiceTab from './services/ServiceTab';
import ServiceContent from './services/ServiceContent';
import CompanyList from './services/CompanyList';
import { services } from './services/servicesData';

const ServicesSection = () => {
  return (
    <section id="solutions" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <ServiceHeader />

        <Tabs defaultValue="blockchain" className="mb-16">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent h-auto">
            {services.map((service) => (
              <ServiceTab
                key={service.id}
                id={service.id}
                title={service.title}
                icon={service.icon}
              />
            ))}
          </TabsList>
          
          {services.map((service) => (
            <ServiceContent key={service.id} service={service} />
          ))}
        </Tabs>

        <CompanyList />
      </div>
    </section>
  );
};

export default ServicesSection;
