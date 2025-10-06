import React from 'react';
import { LineChart, Users, Globe, MessageSquare } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-3xl blur-3xl" />
      <div className="relative bg-gray-800/50 p-8 rounded-3xl border border-gray-700 backdrop-blur-sm">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2 bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-6 rounded-xl border border-white/10">
            <LineChart className="w-8 h-8 text-purple-400 mb-4" />
            <div className="h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg opacity-50" />
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-6 rounded-xl border border-white/10">
            <Users className="w-6 h-6 text-blue-400 mb-4" />
            <div className="space-y-2">
              <div className="h-3 bg-white/20 rounded-full w-3/4" />
              <div className="h-3 bg-white/20 rounded-full w-1/2" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-6 rounded-xl border border-white/10">
            <Globe className="w-6 h-6 text-purple-400 mb-4" />
            <div className="space-y-2">
              <div className="h-3 bg-white/20 rounded-full w-2/3" />
              <div className="h-3 bg-white/20 rounded-full w-1/2" />
            </div>
          </div>
          <div className="col-span-2 bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-6 rounded-xl border border-white/10">
            <MessageSquare className="w-6 h-6 text-blue-400 mb-4" />
            <div className="space-y-2">
              <div className="h-3 bg-white/20 rounded-full w-5/6" />
              <div className="h-3 bg-white/20 rounded-full w-4/6" />
              <div className="h-3 bg-white/20 rounded-full w-3/6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}