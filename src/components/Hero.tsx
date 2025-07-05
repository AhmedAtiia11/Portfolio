import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-gray-600">
              Photo
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Ahmed Atiia
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 mb-6">
              DevOps Engineer / Site Reliability Engineer
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-600 mb-8">
              <MapPin size={20} />
              <span>Egypt</span>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            I'm a results-driven DevOps Engineer with a strong focus on reliability, automation, and cloud-native technologies.
            I specialize in designing scalable infrastructure, building CI/CD pipelines, and managing production environments 
            
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://linkedin.com/in/ahmed-atiia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="mailto:ahmed.atiia@gmail.com"
              className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
            >
              <Mail size={20} />
              Email
            </a>
            <a
              href="https://github.com/ahmed-atiia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-blue-600 hover:text-blue-700 transition-colors animate-bounce"
            >
              <div className="w-8 h-8 border-2 border-blue-600 rounded-full flex items-center justify-center">
                ↓
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;