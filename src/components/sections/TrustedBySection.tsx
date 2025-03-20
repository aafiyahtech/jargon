
import React from 'react';
import { motion } from 'framer-motion';

const TrustedBySection = () => {
  const companies = [
    { 
      name: 'Google', 
      logo: 'https://www.vectorlogo.zone/logos/google/google-ar21.svg'
    },
    { 
      name: 'Microsoft', 
      logo: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg'
    },
    { 
      name: 'Apple', 
      logo: 'https://www.vectorlogo.zone/logos/apple/apple-ar21.svg'
    },
    { 
      name: 'Amazon', 
      logo: 'https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg'
    },
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
              <div className="w-full h-16 flex items-center justify-center mb-4">
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="max-h-12 max-w-full object-contain" 
                />
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
