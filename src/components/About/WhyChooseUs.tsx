import React from 'react';
import { reasons } from './aboutData';

export default function WhyChooseUs() {
  return (
    <div className="py-24 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">
            Why Choose The Monk AI?
          </h2>
          <p className="text-gray-300">
            We know that adopting new technology can feel overwhelming, but that's where we shine. Here's why working with us is a no-brainer:
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gray-800/50 p-6 rounded-xl border border-gray-700 h-full hover:border-purple-500/50 transition-colors">
                <reason.icon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}