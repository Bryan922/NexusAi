import React from 'react';
import { Brain, Twitter, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                NexusAI
              </span>
            </div>
            <p className="text-gray-400 max-w-md">
              Next-generation artificial intelligence platform pushing the boundaries of what's possible.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Features', 'Demo', 'Blog', 'About'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center space-x-2">
                  <Twitter className="h-5 w-5" />
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center space-x-2">
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center space-x-2">
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {currentYear} NexusAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}