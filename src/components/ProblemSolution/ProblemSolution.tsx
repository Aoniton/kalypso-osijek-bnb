import React from 'react';
import PainPoints from './PainPoints';
import Solution from './Solution';

export default function ProblemSolution() {
  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Struggling to Scale Your Business?
          </h2>
          <p className="text-gray-400 text-lg">
            You're not alone. Here are the common challenges businesses face:
          </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-3xl" />
            <div className="relative">
              <PainPoints />
            </div>
          </div>
          <Solution />
        </div>
      </div>
    </div>
  );
}