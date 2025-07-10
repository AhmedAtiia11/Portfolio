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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I’m a DevOps Engineer fueled by curiosity and a passion for automation, efficiency, and problem solving. 
            From building microservices to streamlining GitOps workflows. </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-4">
            I thrive on optimizing systems and driving continuous improvement. 
            Whether it’s reducing downtime or boosting deployment speed, I’m always pushing for better.          </p>
        </div>

      </div>
    </section>
  );
};

export default About;