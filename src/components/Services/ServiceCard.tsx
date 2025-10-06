import React from "react";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative bg-gray-800/50 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm h-full hover:border-purple-500/50 transition-colors">
        <div className="p-4 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl w-fit mb-6">
          <Icon className="w-8 h-8 text-purple-400" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-gray-300 mb-8">{description}</p>
        <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors group/btn">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}