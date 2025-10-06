import React from 'react';
import { Brain, Facebook, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Brain className="w-8 h-8 text-purple-500" />
              <span className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
                The Monk AI
              </span>
            </div>
            <p className="text-gray-400">
              Empowering businesses through intelligent automation and AI-driven solutions.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI Automation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Data Analytics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Custom Solutions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6">Stay Updated</h3>
            <form className="mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
              />
              <button className="w-full mt-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg">
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} The Monk AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}