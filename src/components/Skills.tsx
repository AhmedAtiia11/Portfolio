import {
  Server,
  GitBranch,
  Shield,
  Cloud,
  Activity,
  Code
} from "lucide-react";
const Skills = () => {
  const skillCategories = [
    {
      icon: <Server className="w-8 h-8 text-green-600" />,
      title: "Containers & Kubernetes",
      skills: ["Kubernetes", "Helm", "Docker"]
    },
    {
      icon: <GitBranch className="w-8 h-8 text-purple-600" />,
      title: "CI/CD & GitOps",
      skills: ["Jenkins", "GitHub Actions", "ArgoCD", "GitLab CI", "GitLab Operator"]
    },
    {
      icon: <Shield className="w-8 h-8 text-pink-600" />,
      title: "DevSecOps",
      skills: ["SonarQube", "Trivy", "OPA Conftest", "Talisman", "Falco", "Istio", "Vault", "Keycloak"]
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-600" />,
      title: "Cloud & Infrastructure",
      skills: ["AWS", "Terraform", "Ansible", "Linux (L1/L2)", "MetalLB", "Longhorn", "MinIO"]
    },
    {
      icon: <Activity className="w-8 h-8 text-orange-500" />,
      title: "Monitoring & Observability",
      skills: ["Prometheus", "Grafana", "Loki", "OpenTelemetry"]
    },
    {
      icon: <Code className="w-8 h-8 text-indigo-600" />,
      title: "Programming & Scripting",
      skills: ["Golang", "Python", "Bash"]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {skillCategories.map((category, index) => (
        <div
          key={index}
          className="p-5 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center gap-3 mb-4">
            {category.icon}
            <h3 className="text-xl font-semibold text-gray-800">
              {category.title}
            </h3>
          </div>

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
  );
};

export default Skills;
