import React from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Cloud Infrastructure Automation",
      description: "Automated AWS infrastructure deployment using Terraform and CloudFormation for scalable, repeatable infrastructure provisioning.",
      tech: ["AWS", "Terraform", "CloudFormation", "EC2", "S3"],
      highlights: [
        "Automated infrastructure provisioning",
        "Reduced deployment time by 70%",
        "Implemented infrastructure as code"
      ],
      featured: true
    },
    {
      title: "Containerized Application Platform",
      description: "Built a comprehensive containerization platform using Docker and Kubernetes for microservices deployment and orchestration.",
      tech: ["Docker", "Kubernetes", "Container Orchestration", "Microservices"],
      highlights: [
        "Containerized 20+ applications",
        "Implemented auto-scaling",
        "Zero-downtime deployments"
      ],
      featured: true
    },
    {
      title: "CI/CD Pipeline Implementation",
      description: "Developed automated CI/CD pipelines using Jenkins and GitLab CI for continuous integration and deployment workflows.",
      tech: ["Jenkins", "GitLab CI", "GitHub Actions", "Automation"],
      highlights: [
        "Automated testing and deployment",
        "Reduced manual errors by 90%",
        "Integrated security scanning"
      ],
      featured: false
    },
    {
      title: "Monitoring & Alerting System",
      description: "Implemented comprehensive monitoring solution with Prometheus and Grafana for real-time system monitoring and alerting.",
      tech: ["Prometheus", "Grafana", "Monitoring", "Alerting"],
      highlights: [
        "Real-time system monitoring",
        "Custom alerting rules",
        "Improved system reliability"
      ],
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Key projects that demonstrate my expertise in DevOps engineering and cloud infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden ${
                project.featured ? 'border-2 border-blue-200' : ''
              }`}
            >
              {project.featured && (
                <div className="bg-blue-600 text-white px-4 py-2 text-sm font-medium flex items-center gap-2">
                  <Star size={16} />
                  Featured Project
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;