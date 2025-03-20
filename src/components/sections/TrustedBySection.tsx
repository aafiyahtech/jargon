
import React from 'react';
import { motion } from 'framer-motion';
import { Building, Building2, Landmark, Trees } from 'lucide-react';

const TrustedBySection = () => {
  const companies = [
    { name: 'Imaginary Corp', icon: <Building className="h-10 w-10" /> },
    { name: 'Nonexistent LLC', icon: <Building2 className="h-10 w-10" /> },
    { name: 'Fictitious Bank', icon: <Landmark className="h-10 w-10" /> },
    { name: 'Made Up Ventures', icon: <Trees className="h-10 w-10" /> },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Trusted By</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Companies that don't exist but would definitely use our products if they did.
        </p>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {companies.map((company, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center p-6 bg-white/30 backdrop-blur-sm border border-border rounded-xl hover:shadow-md transition-all"
              variants={itemVariants}
            >
              <div className="bg-accent/10 p-4 rounded-full mb-4">
                {company.icon}
              </div>
              <h3 className="font-bold">{company.name}</h3>
              <p className="text-sm text-muted-foreground mt-2">Since {2020 - index}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;
