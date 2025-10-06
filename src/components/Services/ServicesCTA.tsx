import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

export default function ServicesCTA() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Save Time and Grow Smarter?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Let's make it happen. Whether you're ready to dive into a specific service or want to explore how AI can transform your business, we're just a message away.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-all">
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold flex items-center justify-center space-x-2 hover:bg-white/20 transition-all">
            <Calendar className="w-5 h-5" />
            <span>Book a Free Consultation</span>
          </button>
        </div>
      </div>
    </div>
  );
}