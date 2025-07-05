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
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a DevOps Engineer driven by self-learning and a constant curiosity to explore new technologies, tools, and methodologies. I enjoy diving deep into systems, understanding how they work, and finding ways to improve them.
            This passion extends to troubleshooting challenges, optimizing workflows, and building automated solutions that enhance efficiency and reliability. I'm always looking for ways to push the boundaries of what's possible.

            My experience spans high-impact projects where I’ve implemented GitOps workflows, enhanced deployment efficiency, and ensured system uptime across multiple sites. I'm passionate about infrastructure as code, observability, and delivering secure, maintainable systems using DevSecOps practices.

            Whether building microservices from the ground up or streamlining operations for existing applications, I bring a problem-solving mindset and an eye for continuous improvement.
          </p>
        </div>
{/* 
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                I'm a DevOps Engineer driven by self-learning and a constant curiosity to explore new technologies, tools, and methodologies. I enjoy diving deep into systems, understanding how they work, and finding ways to improve them. This passion extends to troubleshooting challenges, optimizing workflows, and building automated solutions that enhance efficiency and reliability. I'm always looking for ways to push the boundaries of what's possible.
              </p>
              <p>
                I have hands-on experience with AWS cloud services, Docker containerization, 
                Kubernetes orchestration, and various automation tools. I'm passionate about 
                creating efficient, reliable, and secure infrastructure solutions.
              </p>
              <p>
                My approach combines technical expertise with a focus on collaboration, 
                enabling development teams to deploy faster and more reliably while 
                maintaining high standards of security and performance.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;