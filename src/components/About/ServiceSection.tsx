import React from 'react';
import { services } from './aboutData';

export default function ServiceSection() {
  return (
    <div className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12">What We Do</h2>
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
              <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                <ul className="space-y-4">
                  {service.points.map((point, i) => (
                    <li key={i} className="text-gray-300">{point}</li>
                  ))}
                </ul>
              </div>
              <div className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-8 rounded-2xl border border-white/10">
                  <service.icon className="w-12 h-12 text-purple-400 mb-4" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full rounded-xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}