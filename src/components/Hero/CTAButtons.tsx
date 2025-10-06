import React from 'react';
import { Calendar } from 'lucide-react';

export default function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <a
        href="https://calendly.com/pacaricantonio/ai-consultation-call"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-all"
      >
        <Calendar className="w-5 h-5" />
        <span>Book My Free Call</span>
      </a>
    </div>
  );
}