import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import CTAButtons from './CTAButtons';
import CTAImage from './CTAImage';

export default function FinalCTA() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your AI Journey Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the businesses that have transformed their operations with AI automation. Your future starts here.
            </p>
            <CTAButtons />
          </div>
          <CTAImage />
        </div>
      </div>
    </div>
  );
}