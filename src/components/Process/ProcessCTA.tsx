import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ProcessCTA() {
  return (
    <div className="text-center mt-16">
      <button className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-semibold hover:opacity-90 transition-all group">
        <span>Let's Get Started</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}