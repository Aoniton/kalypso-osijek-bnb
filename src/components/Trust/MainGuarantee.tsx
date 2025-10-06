import React from 'react';
import { Shield } from 'lucide-react';

export default function MainGuarantee() {
  return (
    <div className="relative mt-12">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-3xl" />
      <div className="relative bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
        <div className="flex items-center space-x-4 mb-4">
          <Shield className="w-8 h-8 text-purple-400" />
          <h3 className="text-xl font-bold text-white">Our 30-Day Guarantee</h3>
        </div>
        <p className="text-lg text-gray-200">
          We're confident in our services — if you don't see results in 30 days, we'll work for free until you do!
        </p>
      </div>
    </div>
  );
}