
import React from 'react';
import ContactForm from '../contact/ContactForm';
import ContactSidebar from '../contact/ContactSidebar';

const ContactSection = () => {
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
          <div className="md:col-span-2">
            <ContactSidebar />
          </div>
          
          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
