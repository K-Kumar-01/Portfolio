import React from "react";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Payment Integration",
    description: "Integrated Stripe payment feature into various web-apps.",
    image:
      "data:image/jpeg;base64,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",
    technologies: ["Stripe", "Next.js", "React", "Go", "Webhooks", "REST APIs"],
  },
  {
    title: "SecretsFoundry CLI",
    description:
      "Command-line tool for secure secrets management in development environments.",
    image:
      "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Click", "Cryptography"],
    github: "https://github.com/truefoundry/secretsfoundry",
  },
  {
    title: "OOXML Transformer",
    description: "Transform the OOXML<->CiceroMark JSON and vice versa.",
    image:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "XML", "Testing"],
    github:
      "https://github.com/accordproject/markdown-transform/tree/algoo-ooxml",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl text-center mb-16">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      <Github className="w-5 h-5 mr-1" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      <ExternalLink className="w-5 h-5 mr-1" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
