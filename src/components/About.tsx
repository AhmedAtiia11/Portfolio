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
          I specialize in Kubernetes orchestration, GitOps workflows, and secure CI/CD automation—designing platforms that are resilient, observable, and built for high performance. I enjoy tackling complex infrastructure challenges end-to-end, simplifying operations, reducing deployment friction, and improving overall system reliability.          </p>
          <p className="text-lg text-gray-900 max-w-4xl mx-auto mt-4">
            I’m passionate about continuous learning, DevSecOps practices, and finding smarter ways to design and automate modern infrastructure. Every challenge is an opportunity to build something cleaner, faster, and more reliable.                  </p>
          <p>
          You can reach me at{' '}
          <a href="mailto:ahmedatya1288@gmail.com" className="text-blue-600 hover:underline">
            ahmedatya1288@gmail.com
          </a>{' '}
          for opportunities or collaborations.
        </p>
        </div>

      </div>
    </section>
  );
};

export default About;