import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 pt-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Post not found</h1>
          <Link to="/blog" className="text-purple-400 hover:text-purple-300">
            Return to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <article className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to blog
          </Link>
          
          <div className="aspect-video mb-8 rounded-2xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex gap-2 mb-6">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl font-bold text-white mb-6">{post.title}</h1>

          <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-800">
            <div className="flex items-center space-x-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-white font-medium">{post.author.name}</p>
                <p className="text-gray-400">{post.author.role}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-gray-400">
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

          <div className="prose prose-invert max-w-none text-gray-300 prose-headings:text-white prose-strong:text-white prose-a:text-purple-400">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}