
import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="glass-card rounded-xl p-7">
      <h3 className="text-xl font-bold mb-6 font-bricolage">Where to Find Us</h3>
      
      <div className="space-y-7">
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Office</h4>
            <p className="text-sm text-muted-foreground">
              Floor 42, Imagination Tower<br />
              Silicon Valley Adjacent<br />
              Not Actually Silicon Valley, CA
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Email</h4>
            <p className="text-sm text-muted-foreground">
              contact@quantumsynth.fake<br />
              investors@wehavenoproduct.fake
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Phone</h4>
            <p className="text-sm text-muted-foreground">
              (555) 123-4567<br />
              <span className="text-xs">(Goes straight to voicemail)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
