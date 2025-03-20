
import React from 'react';

const AsFeaturedinSection = () => {
  const publications = [
    {
      name: "TechCrunch",
      quote: "Revolutionary approach to doing absolutely nothing.",
      logo: "https://www.vectorlogo.zone/logos/techcrunch/techcrunch-ar21.svg"
    },
    {
      name: "Wired",
      quote: "The most innovative company with zero product-market fit.",
      logo: "https://cdn.worldvectorlogo.com/logos/wired-1.svg"
    },
    {
      name: "Forbes",
      quote: "We invested because their deck had great animations.",
      logo: "https://www.vectorlogo.zone/logos/forbes/forbes-ar21.svg"
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          As Featured In <span className="text-sm align-top">(our dreams)</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {publications.map((pub, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 transition-all duration-300 hover:shadow-xl border border-border/40"
            >
              <div className="flex items-center mb-4">
                <div className="h-10 w-32 relative flex items-center justify-start">
                  <img 
                    src={pub.logo} 
                    alt={`${pub.name} logo`} 
                    className="max-h-8 max-w-full object-contain" 
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{pub.name}</h3>
              <blockquote className="text-muted-foreground italic">"{pub.quote}"</blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AsFeaturedinSection;
