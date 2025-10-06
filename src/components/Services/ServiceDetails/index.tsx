import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from './serviceData';

export default function ServiceDetails() {
  return (
    <div className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}