import { NextResponse } from 'next/server';
import { AgriculturalInput } from '@/lib/types';

// Dummy agricultural input data
const inputs: AgriculturalInput[] = [
  {
    id: '1',
    name: 'NPK Fertilizer',
    type: 'fertilizer',
    unit: 'kg',
    pricePerUnit: 2.5,
    description: 'Balanced NPK fertilizer (10-10-10)',
  },
  {
    id: '2',
    name: 'Organic Compost',
    type: 'fertilizer',
    unit: 'kg',
    pricePerUnit: 1.2,
    description: 'Organic compost for soil enrichment',
  },
  {
    id: '3',
    name: 'Pesticide Spray',
    type: 'pesticide',
    unit: 'liter',
    pricePerUnit: 15.0,
    description: 'General purpose pesticide',
  },
  {
    id: '4',
    name: 'Herbicide',
    type: 'pesticide',
    unit: 'liter',
    pricePerUnit: 12.5,
    description: 'Selective herbicide for weed control',
  },
  {
    id: '5',
    name: 'Premium Seeds',
    type: 'seed',
    unit: 'kg',
    pricePerUnit: 8.0,
    description: 'High-quality certified seeds',
  },
  {
    id: '6',
    name: 'Irrigation Water',
    type: 'water',
    unit: 'm³',
    pricePerUnit: 0.5,
    description: 'Water for irrigation',
  },
  {
    id: '7',
    name: 'Farm Labor',
    type: 'labor',
    unit: 'hour',
    pricePerUnit: 12.0,
    description: 'Skilled farm labor',
  },
  {
    id: '8',
    name: 'Tractor Hours',
    type: 'equipment',
    unit: 'hour',
    pricePerUnit: 45.0,
    description: 'Tractor rental per hour',
  },
];

export async function GET(request: Request) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 400));

  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  let filteredInputs = inputs;
  if (type) {
    filteredInputs = inputs.filter(input => input.type === type);
  }

  return NextResponse.json({
    success: true,
    data: filteredInputs,
    message: 'Agricultural inputs retrieved successfully',
  });
}
