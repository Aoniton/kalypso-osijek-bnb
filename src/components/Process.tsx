import React from 'react';
import { ClipboardCheck, Cog, TrendingUp } from 'lucide-react';

const steps = [
  {
    title: 'Assess Your Needs',
    description: 'We analyze your operations to uncover inefficiencies.',
    icon: ClipboardCheck,
  },
  {
    title: 'Implement AI Solutions',
    description: 'Our team integrates cutting-edge automation tailored to your goals.',
    icon: Cog,
  },
  {
    title: 'Scale and Succeed',
    description: 'Watch your business grow with smarter, faster, and more efficient systems.',
    icon: TrendingUp,
  },
];

export default function Process() {
  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-16">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500" />
              )}
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-4">{step.title}</h3>
                <p className="text-gray-400 text-center">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}