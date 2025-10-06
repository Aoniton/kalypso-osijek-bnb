import React from 'react';
import CaseStudy from './CaseStudy';
import Testimonial from './Testimonial';
import { caseStudies, testimonials } from './caseStudyData';

export default function ProofResults() {
  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Results Speak for Themselves
          </h2>
          <p className="text-gray-400 text-lg">
            See how we've helped businesses transform their operations and achieve remarkable growth
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <CaseStudy key={index} {...study} />
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}