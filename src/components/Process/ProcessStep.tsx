import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
  isLast?: boolean;
}

export default function ProcessStep({ step, title, description, icon: Icon, isLast }: ProcessStepProps) {
  return (
    <div className="relative group">
      {!isLast && (
        <div className="hidden md:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-blue-500/50" />
      )}
      <div className="relative">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
              <Icon className="w-10 h-10 text-white" />
            </div>
          </div>
          <span className="text-sm font-medium text-purple-400 mb-2">Step {step}</span>
          <h3 className="text-xl font-semibold text-white mb-3 text-center">{title}</h3>
          <p className="text-gray-400 text-center max-w-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}