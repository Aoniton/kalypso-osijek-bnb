import React from 'react';
import { Bot, LineChart, Workflow } from 'lucide-react';

const services = [
  {
    title: 'AI-Powered Automation',
    description: 'Streamline repetitive tasks and free up resources with customized automation solutions.',
    icon: Bot,
  },
  {
    title: 'Data-Driven Insights',
    description: 'Leverage AI to uncover actionable insights that drive decision-making.',
    icon: LineChart,
  },
  {
    title: 'End-to-End Solutions',
    description: 'From strategy to implementation, we provide holistic AI services tailored to your needs.',
    icon: Workflow,
  },
];

export default function Services() {
  return (
    <div className="bg-gray-900 py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all">
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}