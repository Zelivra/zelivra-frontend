'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Input';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { api } from '@/lib/api/client';
import { CropType, Area, AgriculturalInput, InputUsage, CostCalculation } from '@/lib/types';

interface CostCalculatorProps {
  onCalculationComplete?: (result: CostCalculation) => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ onCalculationComplete }) => {
  const [crops, setCrops] = useState<CropType[]>([]);
  const [areas, setAreas] = useState<Area[]>([]);
  const [inputs, setInputs] = useState<AgriculturalInput[]>([]);
  const [selectedCrop, setSelectedCrop] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedInputs, setSelectedInputs] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [cropsRes, areasRes, inputsRes] = await Promise.all([
        api.crops.getAll(),
        api.areas.getAll(),
        api.inputs.getAll(),
      ]);

      if (cropsRes.success) setCrops(cropsRes.data || []);
      if (areasRes.success) setAreas(areasRes.data || []);
      if (inputsRes.success) setInputs(inputsRes.data || []);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (inputId: string, quantity: number) => {
    setSelectedInputs(prev => ({
      ...prev,
      [inputId]: quantity,
    }));
  };

  const handleCalculate = async () => {
    if (!selectedCrop || !selectedArea || Object.keys(selectedInputs).length === 0) {
      alert('Please select crop, area, and at least one input');
      return;
    }

    setIsCalculating(true);
    try {
      const inputUsages: InputUsage[] = Object.entries(selectedInputs)
        .filter(([, quantity]) => quantity > 0)
        .map(([inputId, quantity]) => {
          const input = inputs.find(i => i.id === inputId);
          return {
            inputId,
            quantity,
            cost: (input?.pricePerUnit || 0) * quantity,
          };
        });

      const response = await api.calculations.calculate({
        cropId: selectedCrop,
        areaId: selectedArea,
        inputs: inputUsages,
      });

      if (response.success && response.data) {
        onCalculationComplete?.(response.data);
      }
    } catch (error) {
      console.error('Error calculating:', error);
    } finally {
      setIsCalculating(false);
    }
  };

  if (isLoading) {
    return (
      <Card>
        <LoadingSpinner text="Loading calculator..." />
      </Card>
    );
  }

  return (
    <Card className="animate-fade-in">
      <CardHeader 
        title="Cost Calculator" 
        subtitle="Select your crop, area, and inputs to calculate costs"
      />

      <div className="space-y-6">
        {/* Crop Selection */}
        <div className="transform transition-all duration-300 hover:translate-x-1">
          <Select
            label="Select Crop"
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
            options={[
              { value: '', label: 'Choose a crop...' },
              ...crops.map(crop => ({ value: crop.id, label: `${crop.name} (${crop.category})` })),
            ]}
          />
        </div>

        {/* Area Selection */}
        <div className="transform transition-all duration-300 hover:translate-x-1">
          <Select
            label="Select Area"
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
            options={[
              { value: '', label: 'Choose an area...' },
              ...areas.map(area => ({ 
                value: area.id, 
                label: `${area.name} (${area.size} ${area.unit})` 
              })),
            ]}
          />
        </div>

        {/* Inputs Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Agricultural Inputs
          </label>
          <div className="space-y-3">
            {inputs.map((input) => (
              <div 
                key={input.id}
                className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition-all duration-200"
              >
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{input.name}</p>
                  <p className="text-sm text-gray-500">
                    ${input.pricePerUnit} per {input.unit}
                  </p>
                </div>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  placeholder="0"
                  value={selectedInputs[input.id] || ''}
                  onChange={(e) => handleInputChange(input.id, parseFloat(e.target.value) || 0)}
                  className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"
                />
              </div>
            ))}
          </div>
        </div>

        <Button 
          onClick={handleCalculate}
          isLoading={isCalculating}
          className="w-full"
          size="lg"
        >
          Calculate Costs
        </Button>
      </div>
    </Card>
  );
};
