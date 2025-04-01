
import React from 'react';
import { motion } from 'framer-motion';

const TrustedBySection = () => {
  const logos = [
    { logo: 'https://www.vectorlogo.zone/logos/google/google-ar21.svg' },
    { logo: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg' },
    { logo: 'https://www.vectorlogo.zone/logos/apple/apple-ar21.svg' },
    { logo: 'https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg' },
    { logo: 'https://www.vectorlogo.zone/logos/facebook/facebook-ar21.svg' },
    { logo: 'https://www.vectorlogo.zone/logos/netflix/netflix-ar21.svg' },
    { logo: 'https://www.vectorlogo.zone/logos/tesla/tesla-ar21.svg' },
    { logo: 'https://www.vectorlogo.zone/logos/nvidia/nvidia-ar21.svg' },
    { logo: 'https://www.vectorlogo.zone/logos/adobe/adobe-ar21.svg' },
    { logo: 'https://www.vectorlogo.zone/logos/salesforce/salesforce-ar21.svg' },
    { logo: 'https://www.vectorlogo.zone/logos/oracle/oracle-ar21.svg' },
    { logo: 'https://www.vectorlogo.zone/logos/ibm/ibm-ar21.svg' },
    { logo: 'https://www.vectorlogo.zone/logos/intel/intel-ar21.svg' },
    { logo: 'https://www.vectorlogo.zone/logos/hp/hp-ar21.svg' }, // Replaced Cisco with HP
    { logo: 'https://www.vectorlogo.zone/logos/spotify/spotify-ar21.svg' },
    { logo: 'https://www.vectorlogo.zone/logos/twitter/twitter-ar21.svg' },
    { logo: 'https://www.vectorlogo.zone/logos/pinterest/pinterest-ar21.svg' },
    { logo: 'https://www.vectorlogo.zone/logos/slack/slack-ar21.svg' },
    { logo: 'https://www.vectorlogo.zone/logos/samsung/samsung-ar21.svg' }, // Replaced Uber with Samsung
    { logo: 'https://www.vectorlogo.zone/logos/airbnb/airbnb-ar21.svg' },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Trusted By</h2>
        
        <div className="relative w-full overflow-hidden">
          {/* Fade effect on left side */}
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
          
          <div className="flex flex-wrap justify-center gap-6 py-4">
            {logos.map((item, index) => (
              <motion.div 
                key={index}
                className="w-32 h-16 flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <img 
                  src={item.logo} 
                  alt="Company logo" 
                  className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
          
          {/* Fade effect on right side */}
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
