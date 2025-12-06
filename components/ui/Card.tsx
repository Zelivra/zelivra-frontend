'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false,
  onClick,
  style
}) => {
  const hoverClasses = hover 
    ? 'hover:shadow-xl hover:scale-[1.02] cursor-pointer transition-all duration-300 ease-in-out' 
    : '';

  return (
    <div 
      className={`bg-white rounded-xl shadow-md border border-gray-100 p-6 ${hoverClasses} ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ title, subtitle, action }) => {
  return (
    <div className="flex items-start justify-between mb-4">
      <div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
};
