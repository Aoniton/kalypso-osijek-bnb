import React from 'react';
import AboutCTA from './AboutCTA';

export default function AboutHero() {
  return (
    <div className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Welcome to The Monk AI!
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          We are your trusted partner in building smarter, faster, and more efficient businesses through the power of AI. Our mission is simple: to help you save time, grow your business, and achieve more by integrating the latest in AI automation technology.
        </p>
        <p className="text-lg text-gray-300 mb-12">
          At The Monk AI, we believe in making cutting-edge solutions accessible to everyone, no matter your business size or industry. Whether you're a small business owner looking to streamline operations or a growing company wanting to scale with ease, we're here to help you every step of the way.
        </p>
        <AboutCTA />
      </div>
    </div>
  );
}