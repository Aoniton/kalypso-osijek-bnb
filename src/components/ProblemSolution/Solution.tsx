import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Solution() {
  return (
    <div className="mt-12">
      <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-8 rounded-2xl border border-white/10">
        <p className="text-xl text-gray-200 leading-relaxed">
          The Monk AI automates, designs, and optimizes your business processes so you can focus on what matters most — growth.
        </p>
        <button className="mt-8 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold flex items-center justify-center space-x-2 hover:bg-white/20 transition-all group">
          <span>See How We Can Help</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}