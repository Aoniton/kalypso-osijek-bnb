import React from 'react';
import ProcessStep from './ProcessStep';
import ProcessCTA from './ProcessCTA';
import { processSteps } from './processData';

export default function Process() {
  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-gray-400 text-lg">
            Getting started with AI automation is easier than you think
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              step={index + 1}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>

        <ProcessCTA />
      </div>
    </div>
  );
}