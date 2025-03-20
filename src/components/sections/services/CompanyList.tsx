
import React from 'react';

const CompanyList = () => {
  return (
    <div className="text-center">
      <h3 className="text-xl font-semibold mb-4">Used By Companies You've Never Heard Of</h3>
      <div className="flex flex-wrap justify-center gap-8 opacity-50">
        {['Alpha', 'BetaCorp', 'Gamma Tech', 'Delta Solutions', 'Epsilon AI'].map((company) => (
          <div key={company} className="text-xl font-mono font-bold">
            {company}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyList;
