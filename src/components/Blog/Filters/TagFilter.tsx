import React from 'react';
import { Tag } from 'lucide-react';

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagSelect: (tag: string) => void;
}

export default function TagFilter({ tags, selectedTags, onTagSelect }: TagFilterProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-3">
        <Tag className="w-4 h-4 text-purple-400" />
        <h3 className="text-white font-semibold">Filter by Tags</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => onTagSelect(tag)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              selectedTags.includes(tag)
                ? 'bg-purple-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}