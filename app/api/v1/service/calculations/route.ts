import { NextResponse } from 'next/server';
import { CostCalculation, CalculationRequest } from '@/lib/types';

// Store calculation history
const calculationHistory: CostCalculation[] = [];

export async function POST(request: Request) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  try {
    const body: CalculationRequest = await request.json();
    
    // Calculate total cost
    const totalCost = body.inputs.reduce((sum, input) => sum + input.cost, 0);
    
    // Simulate yield and revenue calculation (dummy logic)
    // In real app, this would come from backend based on crop type and area
    const expectedYield = Math.random() * 5000 + 3000; // Random between 3000-8000 kg
    const pricePerKg = Math.random() * 2 + 1; // Random between $1-3 per kg
    const expectedRevenue = expectedYield * pricePerKg;
    const profitLoss = expectedRevenue - totalCost;
    const profitMargin = (profitLoss / expectedRevenue) * 100;

    const calculation: CostCalculation = {
      cropId: body.cropId,
      areaId: body.areaId,
      inputs: body.inputs,
      totalCost,
      expectedYield,
      expectedRevenue,
      profitLoss,
      profitMargin,
      calculatedAt: new Date(),
    };

    calculationHistory.push(calculation);

    return NextResponse.json({
      success: true,
      data: calculation,
      message: 'Calculation completed successfully',
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Failed to perform calculation',
    }, { status: 400 });
  }
}
