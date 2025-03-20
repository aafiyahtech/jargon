
import React from 'react';
import { Award, CheckCircle, Star } from 'lucide-react';

const AsFeaturedinSection = () => {
  const publications = [
    {
      name: "Tech Nonsense",
      quote: "Revolutionary approach to doing absolutely nothing.",
      icon: <Star className="h-6 w-6 text-yellow-500" />
    },
    {
      name: "Startup Fairytales",
      quote: "The most innovative company with zero product-market fit.",
      icon: <Award className="h-6 w-6 text-blue-400" />
    },
    {
      name: "VC Daydreams",
      quote: "We invested because their deck had great animations.",
      icon: <CheckCircle className="h-6 w-6 text-green-500" />
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
              className="glass-card rounded-xl p-8 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                {pub.icon}
                <h3 className="text-xl font-bold ml-3">{pub.name}</h3>
              </div>
              <blockquote className="text-muted-foreground italic">"{pub.quote}"</blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AsFeaturedinSection;
