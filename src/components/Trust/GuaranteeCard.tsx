import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface GuaranteeCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function GuaranteeCard({ icon: Icon, title, description }: GuaranteeCardProps) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors">
        <div className="p-3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg w-fit mb-4">
          <Icon className="w-6 h-6 text-purple-400" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}