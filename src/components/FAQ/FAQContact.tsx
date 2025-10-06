import React from 'react';
import { Calendar } from 'lucide-react';

export default function FAQContact() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Still Have Questions?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          We're here to help! Book a free consultation call with our team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://calendly.com/pacaricantonio/ai-consultation-call"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-all"
          >
            <Calendar className="w-5 h-5" />
            <span>Book My Free Call</span>
          </a>
        </div>
      </div>
    </div>
  );
}