import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "./serviceData";

export default function ServicesOverview() {
  return (
    <div className="bg-gray-900 py-24" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Comprehensive AI Solutions for Modern Business
          </h2>
          <p className="text-gray-400 text-lg">
            Transform your operations with our suite of AI-powered services designed to scale your business
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}