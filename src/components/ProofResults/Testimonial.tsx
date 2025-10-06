import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

export default function Testimonial({ quote, author, role, company, image }: TestimonialProps) {
  return (
    <div className="relative">
      <div className="absolute -top-4 -left-4">
        <Quote className="w-8 h-8 text-purple-500/30" />
      </div>
      <blockquote className="bg-white/5 p-6 rounded-xl border border-white/10">
        <p className="text-gray-300 text-lg italic mb-6">{quote}</p>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src={image} alt={author} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-white font-semibold">{author}</p>
            <p className="text-gray-400 text-sm">{role} at {company}</p>
          </div>
        </div>
      </blockquote>
    </div>
  );
}