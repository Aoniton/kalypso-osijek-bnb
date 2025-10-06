import React from 'react';
import { Building2, Infinity, Zap } from 'lucide-react';

const stats = [
  {
    label: 'Businesses Transformed',
    value: '100+',
    icon: Building2,
  },
  {
    label: 'Processes Automated',
    value: 'Millions',
    icon: Zap,
  },
  {
    label: 'Potential Unlocked',
    value: 'Infinite',
    icon: Infinity,
  },
];

export default function Stats() {
  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
                <stat.icon className="w-12 h-12 text-purple-500 mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}