import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300">
              © 2024 Ahmed Atiia - DevOps Engineer Portfolio
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-gray-300">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>and</span>
            <Code className="w-4 h-4 text-blue-400" />
            <span>using React & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;