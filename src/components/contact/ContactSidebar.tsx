
import React from 'react';
import ContactInfo from './ContactInfo';
import WorkingHours from './WorkingHours';

const ContactSidebar = () => {
  return (
    <div className="space-y-8">
      <ContactInfo />
      <WorkingHours />
    </div>
  );
};

export default ContactSidebar;
