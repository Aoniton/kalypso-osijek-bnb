import React from 'react';
import { HelpCircle } from 'lucide-react';

export default function FAQHero() {
  return (
    <div className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <HelpCircle className="w-16 h-16 text-purple-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-300">
          Get answers to common questions about our AI solutions and how they can transform your business
        </p>
      </div>
    </div>
  );
}