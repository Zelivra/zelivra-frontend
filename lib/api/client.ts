// API client for making requests to the backend
import {
  ApiResponse,
  CropType,
  AgriculturalInput,
  Area,
  CostCalculation,
  CalculationRequest,
  DashboardStats,
} from '@/lib/types';

const API_BASE_URL = '/api/v1/service';

export const api = {
  // Crop endpoints
  crops: {
    getAll: async (): Promise<ApiResponse<CropType[]>> => {
      const response = await fetch(`${API_BASE_URL}/crops`);
      return response.json();
    },
    getById: async (id: string): Promise<ApiResponse<CropType>> => {
      const response = await fetch(`${API_BASE_URL}/crops/${id}`);
      return response.json();
    },
  },

  // Agricultural inputs endpoints
  inputs: {
    getAll: async (): Promise<ApiResponse<AgriculturalInput[]>> => {
      const response = await fetch(`${API_BASE_URL}/inputs`);
      return response.json();
    },
    getById: async (id: string): Promise<ApiResponse<AgriculturalInput>> => {
      const response = await fetch(`${API_BASE_URL}/inputs/${id}`);
      return response.json();
    },
    getByType: async (type: string): Promise<ApiResponse<AgriculturalInput[]>> => {
      const response = await fetch(`${API_BASE_URL}/inputs?type=${type}`);
      return response.json();
    },
  },

  // Area endpoints
  areas: {
    getAll: async (): Promise<ApiResponse<Area[]>> => {
      const response = await fetch(`${API_BASE_URL}/areas`);
      return response.json();
    },
    getById: async (id: string): Promise<ApiResponse<Area>> => {
      const response = await fetch(`${API_BASE_URL}/areas/${id}`);
      return response.json();
    },
    create: async (area: Omit<Area, 'id'>): Promise<ApiResponse<Area>> => {
      const response = await fetch(`${API_BASE_URL}/areas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(area),
      });
      return response.json();
    },
  },

  // Calculation endpoints
  calculations: {
    calculate: async (request: CalculationRequest): Promise<ApiResponse<CostCalculation>> => {
      const response = await fetch(`${API_BASE_URL}/calculations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });
      return response.json();
    },
    getHistory: async (): Promise<ApiResponse<CostCalculation[]>> => {
      const response = await fetch(`${API_BASE_URL}/calculations/history`);
      return response.json();
    },
  },

  // Dashboard endpoints
  dashboard: {
    getStats: async (): Promise<ApiResponse<DashboardStats>> => {
      const response = await fetch(`${API_BASE_URL}/dashboard/stats`);
      return response.json();
    },
  },
};
