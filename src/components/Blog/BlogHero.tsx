import React from 'react';

export default function BlogHero() {
  return (
    <div className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          The Monk AI Blog
        </h1>
        <p className="text-xl text-gray-300">
          Insights, updates, and expert advice on AI automation, digital marketing, and business growth.
        </p>
      </div>
    </div>
  );
}