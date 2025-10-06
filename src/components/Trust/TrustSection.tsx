import React from 'react';
import GuaranteeCard from './GuaranteeCard';
import MainGuarantee from './MainGuarantee';
import PartnerLogos from './PartnerLogos';
import { guarantees } from './trustData';

export default function TrustSection() {
  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Commitment to Your Success
          </h2>
          <p className="text-gray-400 text-lg">
            We stand behind our services with rock-solid guarantees
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {guarantees.map((guarantee, index) => (
            <GuaranteeCard key={index} {...guarantee} />
          ))}
        </div>

        <MainGuarantee />
        <PartnerLogos />
      </div>
    </div>
  );
}