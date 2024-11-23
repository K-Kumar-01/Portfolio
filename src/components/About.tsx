import React from "react";
import { Code2, Layout, Database, Code, Binary, Globe } from "lucide-react";

type Skill = {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  items: string[];
};

const skills: Skill[] = [
  {
    id: "web",
    title: "Web Design & Development",
    icon: <Layout className="h-6 w-6" />,
    description: "Modern web design and development practices",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Responsive Design",
      "Web APIs",
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: <Code2 className="h-6 w-6" />,
    description: "Frontend development with modern frameworks",
    items: ["React", "Next.js", "Gatsby.js", "Redux", "Tailwind CSS"],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: <Globe className="h-6 w-6" />,
    description: "Backend development and REST APIs",
    items: ["Node.js", "Express.js", "Flask", "REST APIs"],
  },
  {
    id: "database",
    title: "Database Management System",
    icon: <Database className="h-6 w-6" />,
    description: "Database management and ORM",
    items: ["PostgreSQL", "MongoDB", "Knex", "Mongoose", "Gorm"],
  },
  {
    id: "data",
    title: "Data Processing & Generative AI",
    icon: <Binary className="h-6 w-6" />,
    description: "R, scikit-learn, TensorFlow, Keras",
    items: ["Python", "Pandas", "Numpy", "RAG", "Langchain"],
  },
  {
    id: "code",
    title: "Programming languages",
    icon: <Code className="h-6 w-6" />,
    description: "Proficient in various programming languages",
    items: ["Javascript", "TypeScript", "Python", "C++", "Java"],
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 lg:mx-auto">
            Mathematics and Computing graduate from IIT (BHU), Varanasi with a
            passion for problem-solving and software development.
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {/* Education */}
            <div className="rounded-lg bg-gray-50 p-6 shadow-md dark:bg-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                    B. Tech + M. Tech in Mathematics and Computing
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Indian Institute of Technology (BHU), Varanasi
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">CPI: 9.52</p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="rounded-lg bg-gray-50 p-6 shadow-md dark:bg-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Key Achievements
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                <li>• JEE Advanced AIR 3962</li>
                <li>• Codejam Global Rank 297</li>
                <li>• Expert rating on Codeforces</li>
                <li>• 50+ Open Source Contributions</li>
                <li>• Department Rank 3</li>
              </ul>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="mt-16">
            <h3 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
              Skills
            </h3>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className={`skill-${skill.id} skill-card group flex flex-col rounded-lg bg-gray-50 p-6 shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-800`}
                >
                  <div className="mb-4 flex items-center space-x-3">
                    <div className="rounded-lg bg-black p-2 text-white dark:bg-white dark:text-black">
                      {skill.icon}
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {skill.title}
                    </h4>
                  </div>
                  <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                    {skill.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
