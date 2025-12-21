import React from 'react';
import { 
  Server, 
  Cloud, 
  Code, 
  Database, 
  Shield, 
  GitBranch, 
  HardDrive, 
  Network, 
  Layers 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Server className="w-8 h-8 text-green-600" />,
      title: "Containers and Orchestration",
      skills: ["Kubernetes", "Helm", "Docker"]
    },
    {
      icon: <GitBranch className="w-8 h-8 text-purple-600" />,
      title: "CI/CD and Artifact Management",
      skills: ["Jenkins", "GitHub Actions", "ArgoCD", "GitLab CI","GitLab Operator","Nexus Repository", "Harbor"], 
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-600" />,
      title: "Cloud and Infrastructure",
      skills: ["AWS","Oracle Cloud", "Terraform", "Ansible", "Linux (L1/L2)"]
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Monitoring & Observability",
      skills: ["Prometheus", "Grafana", "Loki", "Zipkin", "OpenTelemetry"]
    },
    {
      icon: <Shield className="w-8 h-8 text-pink-600" />,
      title: "DevSecOps",
      skills: ["SonarQube", "Trivy", "OPA Conftest", "Gitleaks", "Falco", "Istio", "Vault" , "Keycloak"]
    },
    {
      icon: <HardDrive className="w-8 h-8 text-orange-600" />,
      title: "Storage & Networking",
      skills: ["Longhorn", "MinIO", "MetalLB"]
    },
    {
      icon: <Code className="w-8 h-8 text-indigo-600" />,
      title: "Programming & Scripting",
      skills: ["Golang", "Python", "Bash"]
    }
    // {
    //   icon: <Database className="w-8 h-8 text-yellow-600" />,
    //   title: "Web Frameworks",
    //   skills: ["Django", "Flask","HTML" ,"CSS" ]
    // },
    // {
    //   icon: <Layers className="w-8 h-8 text-gray-600" />,
    //   title: "Others",
    //   skills: [ "Keycloak", "Linux Administration"]
    // }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for modern DevOps practices, automation, and cloud-native solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-shadow"
            >
              <div className="mb-6">{category.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {category.title}
              </h3>
              {/* <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div> */}
              {/* Smaller skill chips + two columns */}
          <div className="grid grid-cols-2 gap-2">
            {category.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium whitespace-nowrap"
              >
                {skill}
              </span>
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
