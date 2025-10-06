import React from 'react';
import { Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  benefits: string[];
  timeSaved: string;
  benefitsSummary: string;
  icon: LucideIcon;
}

export default function ServiceCard({ title, description, benefits, timeSaved, benefitsSummary, icon: Icon }: ServiceCardProps) {
  return (
    <div className="relative group mb-16">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-colors">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-lg">
            <Icon className="w-8 h-8 text-purple-400" />
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        
        <p className="text-gray-300 mb-6">{description}</p>
        
        <h4 className="text-lg font-semibold text-purple-400 mb-4">What's in it for you?</h4>
        <ul className="space-y-3 mb-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-gray-300 flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              {benefit}
            </li>
          ))}
        </ul>
        
        <div className="grid md:grid-cols-2 gap-4 bg-gray-900/50 p-4 rounded-xl">
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-purple-400" />
            <span className="text-gray-300">Time Saved: {timeSaved}</span>
          </div>
          <div className="text-gray-300">
            <span className="text-purple-400">Benefits:</span> {benefitsSummary}
          </div>
        </div>
      </div>
    </div>
  );
}