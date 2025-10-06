import React from 'react';
import Header from '../components/Header';
import BlogHero from '../components/Blog/BlogHero';
import BlogGrid from '../components/Blog/BlogGrid';
import Footer from '../components/Footer';

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <BlogHero />
      <BlogGrid />
      <Footer />
    </div>
  );
}