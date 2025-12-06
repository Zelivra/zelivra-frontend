import { NextResponse } from 'next/server';
import { CropType } from '@/lib/types';

// Dummy crop data
const crops: CropType[] = [
  {
    id: '1',
    name: 'Wheat',
    category: 'Grain',
    description: 'Winter wheat variety suitable for temperate climates',
    imagePath: '/crops/wheat.jpg',
  },
  {
    id: '2',
    name: 'Corn',
    category: 'Grain',
    description: 'High-yield corn variety',
    imagePath: '/crops/corn.jpg',
  },
  {
    id: '3',
    name: 'Tomatoes',
    category: 'Vegetable',
    description: 'Greenhouse tomato variety',
    imagePath: '/crops/tomatoes.jpg',
  },
  {
    id: '4',
    name: 'Soybeans',
    category: 'Legume',
    description: 'Non-GMO soybean variety',
    imagePath: '/crops/soybeans.jpg',
  },
  {
    id: '5',
    name: 'Potatoes',
    category: 'Vegetable',
    description: 'Russet potato variety',
    imagePath: '/crops/potatoes.jpg',
  },
];

export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json({
    success: true,
    data: crops,
    message: 'Crops retrieved successfully',
  });
}
