
import React from 'react';

const WorkingHours = () => {
  return (
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
  );
};

export default WorkingHours;
