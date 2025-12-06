// DTOs for the farming cost control application

export interface CropType {
  id: string;
  name: string;
  category: string;
  description: string;
  imagePath: string;
}

export interface AgriculturalInput {
  id: string;
  name: string;
  type: 'fertilizer' | 'pesticide' | 'seed' | 'water' | 'labor' | 'equipment';
  unit: string;
  pricePerUnit: number;
  description: string;
}

export interface Area {
  id: string;
  name: string;
  size: number;
  unit: 'hectare' | 'acre' | 'sqm';
  location?: string;
}

export interface CostCalculation {
  cropId: string;
  areaId: string;
  inputs: InputUsage[];
  totalCost: number;
  expectedYield: number;
  expectedRevenue: number;
  profitLoss: number;
  profitMargin: number;
  calculatedAt: Date;
}

export interface InputUsage {
  inputId: string;
  quantity: number;
  cost: number;
}

export interface CostBreakdown {
  category: string;
  amount: number;
  percentage: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface CalculationRequest {
  cropId: string;
  areaId: string;
  inputs: InputUsage[];
}

export interface DashboardStats {
  totalAreas: number;
  totalCrops: number;
  averageProfitMargin: number;
  totalCalculations: number;
}
