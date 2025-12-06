import { NextResponse } from 'next/server';
import { DashboardStats } from '@/lib/types';

export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const stats: DashboardStats = {
    totalAreas: 4,
    totalCrops: 5,
    averageProfitMargin: 18.5,
    totalCalculations: 12,
  };

  return NextResponse.json({
    success: true,
    data: stats,
    message: 'Dashboard stats retrieved successfully',
  });
}
