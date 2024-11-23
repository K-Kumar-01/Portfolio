import React from "react";
import { Calendar, MapPin } from "lucide-react";

type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  description: string[];
  technologies: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: "AQR Capital Management",
    role: "Software Developer",
    duration: "Jul 2024 - Present",
    description: [
      "Developed real-time dashboard for monitoring database synchronization status",
      "Implemented automated data validation system using Python and AWS",
      "Optimized database queries resulting in 40% performance improvement",
    ],
    technologies: ["Python", "AWS", "Flask", "Angular", "PostgreSQL", "MSSQL"],
  },
  {
    company: "TurboDocx",
    role: "Software Developer",
    duration: "Jan 2024 - Jun 2024",
    description: [
      "Built live document renderer with React and TypeScript",
      "Integrated OpenAI APIs for intelligent document processing",
      "Developed MS Word add-in for seamless document management",
    ],
    technologies: ["React", "TypeScript", "OpenAI", "Langchain"],
  },
  {
    company: "Cloud Native Computing Foundation",
    role: "Software Developer",
    duration: "May 2021 - Aug 2021",
    description: [
      "Optimized OOXML transformer for improved performance",
      "Implemented CLI integration for automated document processing",
      "Achieved 95% test coverage with comprehensive test suite",
    ],
    technologies: ["Python", "XML", "CLI", "Testing"],
  },
  {
    company: "Google Summer of Code",
    role: "Software Developer",
    duration: "May 2021 - Aug 2021",
    description: [
      "Optimized OOXML transformer for improved performance",
      "Implemented CLI integration for automated document processing",
      "Achieved 95% test coverage with comprehensive test suite",
    ],
    technologies: ["Python", "XML", "CLI", "Testing"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl text-center mb-16">
          Professional Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 transition-all hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.company}
                  </h3>
                  <p className="text-lg text-indigo-600 dark:text-indigo-400">
                    {exp.role}
                  </p>
                </div>
                <div className="mt-2 md:mt-0 flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-400 text-sm">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {exp.duration}
                  </span>
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    {desc}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
