

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Area {
  id: string;
  name: string;
  coordinates: Coordinates[];
  createdAt: string;
}

export interface CreateAreaRequest {
  name: string;
  coordinates: Coordinates[];
}

// Dummy API call to save area coordinates
export const saveArea = async (areaData: CreateAreaRequest): Promise<Area> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log('Sending coordinates to backend:', areaData);
  
  // Dummy response
  const response: Area = {
    id: `area-${Date.now()}`,
    name: areaData.name,
    coordinates: areaData.coordinates,
    createdAt: new Date().toISOString(),
  };
  
  return response;
};

// Dummy API call to get areas
export const getAreas = async (): Promise<Area[]> => {
  await new Promise(resolve => setTimeout(resolve, 600));
  
  // Dummy data
  return [
    {
      id: 'area-1',
      name: 'Production Zone A',
      coordinates: [
        { lat: 52.2297, lng: 21.0122 },
        { lat: 52.2287, lng: 21.0132 },
        { lat: 52.2277, lng: 21.0112 },
      ],
      createdAt: '2024-01-15T10:00:00Z',
    },
    {
      id: 'area-2',
      name: 'Production Zone B',
      coordinates: [
        { lat: 52.2317, lng: 21.0142 },
        { lat: 52.2307, lng: 21.0152 },
        { lat: 52.2297, lng: 21.0132 },
      ],
      createdAt: '2024-01-16T14:30:00Z',
    },
  ];
};

// Dummy API call to delete area
export const deleteArea = async (areaId: string): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log('Deleting area:', areaId);
};
