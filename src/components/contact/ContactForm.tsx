
import React, { useState } from 'react';
import FancyButton from '../ui/FancyButton';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from 'lucide-react';
import { showSarcasticToast } from '@/utils/sarcasmUtils';

const ContactForm = () => {
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
  );
};

export default ContactForm;
