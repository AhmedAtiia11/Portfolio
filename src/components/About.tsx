import React from 'react';
import { Award, Users, Target, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "DevOps Expertise",
      description: "Proven experience in DevOps and automation practices"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Cross-functional Collaboration",
      description: "Expert in bridging development and operations teams"
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "Cloud Solutions",
      description: "Specialized in AWS, Docker, and Kubernetes deployments"
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      title: "Automation First",
      description: "Focus on CI/CD pipelines and infrastructure automation"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-20">
        <div className="mb-16">
          <h2 className="text-center text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-left text-xl text-gray-800 max-w-4xl mx-auto">
            I'm a DevOps Engineer driven by curiosity and a passion for crafting robust, automated solutions that boost system reliability and efficiency.
             From architecting microservices to streamlining GitOps workflows,
             I dive deep into problem-solving, optimizing infrastructure, and reducing downtime to deliver seamless deployments. </p>
          <p className="text-lg text-gray-900 max-w-4xl mx-auto mt-4">
            I'm excited about exploring DevSecOps to embed security into automation and delving into Site Reliability Engineering (SRE) 
            to enhance system scalability and performance, always seeking new tools and methodologies to drive continuous improvement.</p>
        </div>

      </div>
    </section>
  );
};

export default About;