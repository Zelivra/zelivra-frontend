import { NextResponse } from 'next/server';
import { Area } from '@/lib/types';

// Dummy area data
const areas: Area[] = [
  {
    id: '1',
    name: 'North Field',
    size: 10,
    unit: 'hectare',
    location: 'Northern Section',
  },
  {
    id: '2',
    name: 'South Field',
    size: 15,
    unit: 'hectare',
    location: 'Southern Section',
  },
  {
    id: '3',
    name: 'Greenhouse A',
    size: 500,
    unit: 'sqm',
    location: 'Greenhouse Complex',
  },
  {
    id: '4',
    name: 'East Field',
    size: 8.5,
    unit: 'hectare',
    location: 'Eastern Section',
  },
];

export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 400));

  return NextResponse.json({
    success: true,
    data: areas,
    message: 'Areas retrieved successfully',
  });
}

export async function POST(request: Request) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 600));

  try {
    const body = await request.json();
    
    const newArea: Area = {
      id: String(areas.length + 1),
      ...body,
    };
    
    areas.push(newArea);

    return NextResponse.json({
      success: true,
      data: newArea,
      message: 'Area created successfully',
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Failed to create area',
      message: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 400 });
  }
}
