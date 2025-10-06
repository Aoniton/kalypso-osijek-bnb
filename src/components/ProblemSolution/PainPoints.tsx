import React from 'react';
import { Clock, UserX, TrendingDown } from 'lucide-react';

const painPoints = [
  {
    icon: Clock,
    text: 'Manual processes slow you down.',
  },
  {
    icon: UserX,
    text: 'Inconsistent customer engagement costs you sales.',
  },
  {
    icon: TrendingDown,
    text: 'Scaling digital outreach feels overwhelming.',
  },
];

export default function PainPoints() {
  return (
    <div className="space-y-6 mt-8">
      {painPoints.map((point, index) => (
        <div
          key={index}
          className="flex items-center space-x-4 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all group"
        >
          <div className="p-3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all">
            <point.icon className="w-6 h-6 text-purple-400" />
          </div>
          <p className="text-gray-300 text-lg">{point.text}</p>
        </div>
      ))}
    </div>
  );
}