
import React, { useState } from 'react';
import FancyButton from '../ui/FancyButton';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Send, X, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { showSarcasticToast } from '@/utils/sarcasmUtils';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show sarcastic toast
    showSarcasticToast('contact');
    
    // Pretend to submit the form
    setTimeout(() => {
      setIsSubmitted(true);
      
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/50">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-2 px-3 py-1 bg-primary/10 rounded-full text-xs font-semibold uppercase tracking-wider text-primary">
            Contact Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-bricolage">
            Get in Touch (We Might Respond)
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fill out this form and our AI will automatically file your inquiry in our digital paper shredder.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-8">
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
            
            <div className="bg-accent/10 rounded-xl p-7">
              <h3 className="text-lg font-bold mb-3 font-bricolage">Working Hours</h3>
              <p className="text-sm text-muted-foreground mb-4">
                We're very flexible about when we pretend to work.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Thursday:</span>
                  <span className="font-medium">11am - 3pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday:</span>
                  <span className="font-medium">11am - 12pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Weekends:</span>
                  <span className="font-medium">Posting on LinkedIn about hustle</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="glass-panel rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6 font-bricolage">Send Us a Message</h3>
              
              <div className="space-y-5 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full"
                      disabled={isSubmitted}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full"
                      disabled={isSubmitted}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-1">Company</label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Inc."
                    className="w-full"
                    disabled={isSubmitted}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what meaningless buzzwords we're missing..."
                    rows={5}
                    className="w-full"
                    disabled={isSubmitted}
                  />
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-xs text-muted-foreground">
                  * We'll definitely read this message (we won't)
                </div>
                <FancyButton type="submit" disabled={isSubmitted}>
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Sent!
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </FancyButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
