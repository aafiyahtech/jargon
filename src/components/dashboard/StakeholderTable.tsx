
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StakeholderData } from './types';

interface StakeholderTableProps {
  data: StakeholderData[];
}

const StakeholderTable: React.FC<StakeholderTableProps> = ({ data }) => {
  return (
    <div className="bg-card rounded-lg p-6 border">
      <h3 className="text-lg font-medium mb-6">Stakeholder Analysis</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Stakeholder</TableHead>
            <TableHead className="text-right">Annual Compensation</TableHead>
            <TableHead className="text-right">Contribution %</TableHead>
            <TableHead className="text-right">ROI</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell className="text-right">${row.compensation.toLocaleString()}</TableCell>
              <TableCell className="text-right">{row.contribution}%</TableCell>
              <TableCell className={`text-right ${row.contribution > (row.compensation / 10000) ? 'text-green-500' : 'text-red-500'}`}>
                {(row.contribution / (row.compensation / 10000)).toFixed(2)}x
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StakeholderTable;
