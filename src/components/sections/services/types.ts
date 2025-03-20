
import { ReactElement } from 'react';

export interface ServiceType {
  id: string;
  title: string;
  description: string;
  icon: ReactElement;
  features: string[];
}
