
export interface Metric {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  color: string;
}

export interface RevenueData {
  name: string;
  projected: number;
  actual: number;
}

export interface MarketShareData {
  name: string;
  value: number;
}

export interface PerformanceData {
  name: string;
  value: number;
}

export interface StakeholderData {
  name: string;
  compensation: number;
  contribution: number;
}
