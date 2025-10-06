import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <div className="bg-gradient-to-r from-purple-900 to-blue-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Business with AI?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors">
            <span>Book a Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}