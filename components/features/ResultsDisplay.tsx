'use client';

import React from 'react';
import { Card, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { CostCalculation } from '@/lib/types';

interface ResultsDisplayProps {
  calculation: CostCalculation | null;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ calculation }) => {
  if (!calculation) {
    return (
      <Card className="bg-gray-50">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🌾</div>
          <p className="text-gray-500">
            Complete the calculator to see your results
          </p>
        </div>
      </Card>
    );
  }

  const isProfit = calculation.profitLoss >= 0;

  return (
    <Card className="animate-slide-up">
      <CardHeader 
        title="Calculation Results" 
        subtitle="Estimated costs and profit/loss analysis"
      />

      <div className="space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 transform transition-all duration-300 hover:scale-105">
            <p className="text-sm text-blue-600 font-medium mb-1">Total Cost</p>
            <p className="text-3xl font-bold text-blue-900">
              ${calculation.totalCost.toFixed(2)}
            </p>
          </div>

          <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200 transform transition-all duration-300 hover:scale-105">
            <p className="text-sm text-green-600 font-medium mb-1">Expected Revenue</p>
            <p className="text-3xl font-bold text-green-900">
              ${calculation.expectedRevenue.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Profit/Loss Card */}
        <div 
          className={`p-6 rounded-lg border-2 transform transition-all duration-500 hover:scale-105 ${
            isProfit 
              ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-300' 
              : 'bg-gradient-to-br from-red-50 to-rose-50 border-red-300'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-gray-600">
              {isProfit ? 'Estimated Profit' : 'Estimated Loss'}
            </p>
            <Badge variant={isProfit ? 'success' : 'danger'}>
              {calculation.profitMargin.toFixed(1)}% Margin
            </Badge>
          </div>
          <p className={`text-4xl font-bold ${isProfit ? 'text-green-700' : 'text-red-700'}`}>
            {isProfit ? '+' : ''}${calculation.profitLoss.toFixed(2)}
          </p>
        </div>

        {/* Expected Yield */}
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 font-medium mb-1">Expected Yield</p>
          <p className="text-2xl font-bold text-gray-900">
            {calculation.expectedYield.toFixed(2)} kg
          </p>
        </div>

        {/* Cost Breakdown */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Cost Breakdown</h4>
          <div className="space-y-2">
            {calculation.inputs.map((input, index) => {
              const percentage = (input.cost / calculation.totalCost) * 100;
              return (
                <div 
                  key={index} 
                  className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        Input #{index + 1}
                      </span>
                      <span className="text-sm font-bold text-gray-900">
                        ${input.cost.toFixed(2)}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                  <Badge variant="default">
                    {percentage.toFixed(1)}%
                  </Badge>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recommendation */}
        <div className={`p-4 rounded-lg border-l-4 ${
          isProfit 
            ? 'bg-green-50 border-green-500' 
            : 'bg-amber-50 border-amber-500'
        }`}>
          <p className="text-sm font-medium text-gray-700 mb-1">
            {isProfit ? '✓ Recommendation' : '⚠ Warning'}
          </p>
          <p className="text-sm text-gray-600">
            {isProfit 
              ? 'This crop selection shows positive returns. Consider proceeding with this plan.'
              : 'This crop selection shows a loss. Review input costs or consider alternative crops.'}
          </p>
        </div>
      </div>
    </Card>
  );
};
