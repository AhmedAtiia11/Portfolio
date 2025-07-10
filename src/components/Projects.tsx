import React from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Connection Test App",
      description: "Orchestrated the deployment of back-end and front-end applications on Kubernetes, achieved a reduction in deployment time and enhanced system stability and productivity through a comprehensive CI/CD pipeline and proactive monitoring tools.",
      tech: ["Kubernetes", "Django", "Jenkins", "ArgoCD", "Prometheus", "Grafana", "Ngrok"],
      githubUrls: [
        {
          label: "CI-Repo",
          url: "https://github.com/AhmedAtiia11/Online-Test-App-CI"
        },
        {
          label: "CD-Repo",
          url: "https://github.com/AhmedAtiia11/Online_Test_App_CD"
        }
      ],
      featured: false
    },
    {
      title: "EKS Cluster Autoscaler",
      description: "Designed and deployed an Amazon EKS cluster with integrated autoscaling features; optimized resource allocation during peak loads, Leading to reduction in response time and significantly enhancing user experience.",
      tech: ["Amazon EKS", "Kubernetes", "Autoscaling"],
      githubUrls: [
        {
          label: "Cluster Autoscaler",
          url: "https://github.com/AhmedAtiia11/EKS-Cluster-AutoScaller"
        }
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
            Key projects that demonstrate my expertise in DevOps and cloud infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow overflow-hidden ${
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
                
                {/* <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div> */}
                
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
                  {project.githubUrls.map((repo, rIndex) => (
                    <a
                      key={rIndex}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm">{repo.label}</span>
                    </a>
                  ))}
                  {/* <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </button> */}
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