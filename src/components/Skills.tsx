import React from 'react';
import { Server, Cloud, Code, Database, Shield, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Server className="w-8 h-8 text-green-600" />,
      title: "Containerization",
      skills: ["Kubernetes" , "Docker", "Helm"]
    },
    {
      icon: <GitBranch className="w-8 h-8 text-purple-600" />,
      title: "CI/CD & Automation",
      skills: ["Jenkins", "GitLab CI", "GitHub Actions", "ArgoCD"], 
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-600" />,
      title: "Cloud and Infrastructure",
      skills: ["AWS", "Terraform", "Ansible"]
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Monitoring & Security",
      skills: ["Prometheus", "Grafana", "Loki","SonarQube", "Trivy"]
    },
    {
      icon: <Code className="w-8 h-8 text-indigo-600" />,
      title: "Programming & Scripting",
      skills: ["Python", "Bash"]
    },
    {
      icon: <Database className="w-8 h-8 text-orange-600" />,
      title: "Web Frameworks",
      skills: ["Django", "Flask", "HTML", "CSS"]
    }
    

  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for modern DevOps practices and cloud-native solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-6">{category.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;