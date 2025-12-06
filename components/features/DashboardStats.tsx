'use client';

import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/Card';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { api } from '@/lib/api/client';
import { DashboardStats as DashboardStatsType } from '@/lib/types';

export const DashboardStats: React.FC = () => {
  const [stats, setStats] = useState<DashboardStatsType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    setIsLoading(true);
    try {
      const response = await api.dashboard.getStats();
      if (response.success) {
        setStats(response.data || null);
      }
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingSpinner size="sm" />;
  }

  if (!stats) {
    return null;
  }

  const statItems = [
    {
      label: 'Total Areas',
      value: stats.totalAreas,
      icon: '🗺️',
      color: 'from-blue-500 to-blue-600',
    },
    {
      label: 'Available Crops',
      value: stats.totalCrops,
      icon: '🌾',
      color: 'from-green-500 to-green-600',
    },
    {
      label: 'Avg. Profit Margin',
      value: `${stats.averageProfitMargin.toFixed(1)}%`,
      icon: '📈',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      label: 'Total Calculations',
      value: stats.totalCalculations,
      icon: '🧮',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {statItems.map((item, index) => (
        <Card 
          key={index}
          hover
          className="transform transition-all duration-300 hover:shadow-2xl"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium mb-1">
                {item.label}
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {item.value}
              </p>
            </div>
            <div className={`text-4xl w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-12`}>
              {item.icon}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
