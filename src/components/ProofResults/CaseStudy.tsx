import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface CaseStudyProps {
  title: string;
  description: string;
  metrics: {
    before: string;
    after: string;
    label: string;
    icon: LucideIcon;
  }[];
  image: string;
  logo: string;
  company: string;
}

export default function CaseStudy({ title, description, metrics, image, logo, company }: CaseStudyProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative bg-gray-800/50 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm hover:border-purple-500/50 transition-colors">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 rounded-lg bg-white/10 p-2">
            <img src={logo} alt={company} className="w-full h-full object-contain" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-gray-400">{company}</p>
          </div>
        </div>
        
        <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        </div>

        <p className="text-gray-300 mb-6">{description}</p>

        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white/5 p-4 rounded-xl">
              <metric.icon className="w-5 h-5 text-purple-400 mb-2" />
              <div className="flex items-baseline space-x-2">
                <span className="text-red-400 line-through text-sm">{metric.before}</span>
                <span className="text-green-400 font-semibold">{metric.after}</span>
              </div>
              <p className="text-gray-400 text-sm">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}