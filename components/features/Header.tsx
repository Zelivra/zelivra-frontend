'use client';

import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 group">
            <div className="text-3xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
              🌱
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Zelivra
              </h1>
              <p className="text-xs text-gray-500">Farming Cost Control</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a 
              href="#calculator" 
              className="text-gray-600 hover:text-green-600 transition-colors duration-200 font-medium hover:scale-105 transform"
            >
              Calculator
            </a>
            <a 
              href="#results" 
              className="text-gray-600 hover:text-green-600 transition-colors duration-200 font-medium hover:scale-105 transform"
            >
              Results
            </a>
            <a 
              href="#about" 
              className="text-gray-600 hover:text-green-600 transition-colors duration-200 font-medium hover:scale-105 transform"
            >
              About
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-110">
              <span className="text-xl">🔔</span>
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-110">
              <span className="text-xl">👤</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
