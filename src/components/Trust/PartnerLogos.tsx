import React from 'react';
import { partners } from './trustData';

export default function PartnerLogos() {
  return (
    <div className="mt-16">
      <p className="text-center text-gray-400 mb-8">Featured In</p>
      <div className="flex justify-center items-center space-x-12">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="relative w-32 h-12 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${partner.logo})` }}
              aria-label={partner.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}