import React from 'react';
import WhyChooseCard from './WhyChooseCard';
import { benefits } from './benefitsData';

export default function WhyChooseUs() {
  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Choose The Monk AI?
          </h2>
          <p className="text-gray-300 text-lg">
            Implementing AI doesn't just save time—it changes the way you live and work
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <WhyChooseCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </div>
  );
}