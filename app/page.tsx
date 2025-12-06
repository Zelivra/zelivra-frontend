'use client';

import { useState } from 'react';
import { Header } from '@/components/features/Header';
import { DashboardStats } from '@/components/features/DashboardStats';
import { CostCalculator } from '@/components/features/CostCalculator';
import { ResultsDisplay } from '@/components/features/ResultsDisplay';
import { CostCalculation } from '@/lib/types';

export default function Home() {
  const [calculationResult, setCalculationResult] = useState<CostCalculation | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Control Your Farming Costs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate the exact costs of growing your crops with selected agricultural inputs
            and get instant profit/loss estimates for your farming area.
          </p>
        </div>

        {/* Dashboard Stats */}
        <DashboardStats />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Calculator Section */}
          <div id="calculator">
            <CostCalculator onCalculationComplete={setCalculationResult} />
          </div>

          {/* Results Section */}
          <div id="results">
            <ResultsDisplay calculation={calculationResult} />
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="mb-12">
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 transform transition-all duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              About Zelivra
            </h3>
            <div className="prose prose-green max-w-none">
              <p className="text-gray-600 mb-4">
                Zelivra is a comprehensive farming cost control tool designed to help farmers 
                and agricultural businesses make informed decisions about their crop production. 
                Our platform provides:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Accurate cost calculations for various agricultural inputs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Real-time profit and loss estimates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Support for multiple crops and farming areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Detailed cost breakdowns and recommendations</span>
                </li>
              </ul>
              <p className="text-gray-600 mt-4">
                Make smarter farming decisions with Zelivra and optimize your agricultural 
                production for maximum profitability.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">
              © 2024 Zelivra - Farming Cost Control Tool
            </p>
            <p className="text-sm text-gray-500">
              Helping farmers control costs and maximize profits
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
