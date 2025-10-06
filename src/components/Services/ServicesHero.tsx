import React from 'react';
import CTAButtons from '../Hero/CTAButtons';

export default function ServicesHero() {
  return (
    <div className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Our Services
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          At The Monk AI, we believe in making life easier for businesses like yours by providing smart, tailored AI solutions that save time, boost productivity, and let you focus on what truly matters.
        </p>
        <CTAButtons />
      </div>
    </div>
  );
}