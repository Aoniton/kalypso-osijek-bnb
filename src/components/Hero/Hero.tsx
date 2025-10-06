import React from 'react';
import CTAButtons from './CTAButtons';
import SocialProof from './SocialProof';
import DashboardPreview from './DashboardPreview';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a')] opacity-10 bg-cover bg-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Tranform Your Business with AI Automation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              From stunning websites to seamless customer support and AI-powered growth strategies — The Monk AI is your partner in scaling success.
            </p>
            <CTAButtons />
            <SocialProof />
          </div>
          <DashboardPreview />
        </div>
      </div>
    </div>
  );
}