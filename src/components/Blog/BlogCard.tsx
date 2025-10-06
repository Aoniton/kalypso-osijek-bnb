import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <Link to={`/blog/${post.id}`} className="block">
        <div className="relative bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-purple-500/50 transition-colors">
          <div className="aspect-video">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-6">
            <div className="flex gap-2 mb-4">
              {post.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
            <p className="text-gray-300 mb-4">{post.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full" />
                <div>
                  <p className="text-white font-medium">{post.author.name}</p>
                  <p className="text-gray-400 text-sm">{post.author.role}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-gray-400 text-sm">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}