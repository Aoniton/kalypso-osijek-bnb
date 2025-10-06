import React from 'react';

const brands = [
  { name: 'Forbes', logo: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&q=80&w=100&h=40&blur=50' },
  { name: 'LinkedIn', logo: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&q=80&w=100&h=40&blur=50' },
  { name: 'TechCrunch', logo: 'https://images.unsplash.com/photo-1621768216002-5ac171876625?auto=format&fit=crop&q=80&w=100&h=40&blur=50' },
  { name: 'Microsoft', logo: 'https://images.unsplash.com/photo-1642132652075-2b0f6e5a1e65?auto=format&fit=crop&q=80&w=100&h=40&blur=50' },
];

export default function SocialProof() {
  return (
    <div className="mt-12">
      <p className="text-gray-400 text-sm text-center mb-6">Trusted by industry leaders</p>
      <div className="flex justify-center items-center space-x-8">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="relative w-24 h-10 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${brand.logo})` }}
              aria-label={brand.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}