import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Current Role",
      position: "DevOps Engineer",
      period: "Present",
      location: "Egypt",
      achievements: [
        "Implementing cloud infrastructure solutions using AWS services",
        "Managing containerized applications with Docker and Kubernetes",
        "Building and maintaining CI/CD pipelines for automated deployments",
        "Developing infrastructure as code using modern DevOps tools"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2024"
    },
    {
      name: "Docker Certified Associate",
      issuer: "Docker",
      year: "2023"
    },
    {
      name: "Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      year: "2023"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience & Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and industry-recognized certifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-6">
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-gray-800">{exp.position}</h4>
                    <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                    <div className="flex items-center gap-4 text-gray-600 mt-2">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-700 flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Certifications</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-gray-600">{cert.issuer}</p>
                      <p className="text-sm text-gray-500 mt-1">Earned in {cert.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;