import React from "react";
import { ArrowRight, Clock, Tag } from "lucide-react";

type Blog = {
  title: string;
  description: string;
  tags: string[];
  link: string;
};

const blogs: Blog[] = [
  {
    title: "Google Summer of Code 2021",
    description:
      "Highlights the Google summer of code program and my experience working on the project.",
    tags: ["OOXML", "React", "Node.js"],
    link: "https://accordproject.org/news/gsoc-2021-ciceromark-ooxml-roundtrip-conversion/",
  },
  {
    title: "LFX Journey 2022",
    description:
      "My journey with the LFX mentorship program and the project I worked on.",
    tags: ["Go", "yacc", "Parser Development"],
    link: "https://vitess.io/blog/2022-06-01-lfx-experience/",
  },
];

export default function Blogs() {
  return (
    <section id="blog" className="bg-gray-50 py-20 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Latest Blog Posts
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
            Sharing insights and experiences from my journey in software
            development
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl dark:bg-gray-900"
            >
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-sm font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                    >
                      <Tag className="mr-1 h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
                  {blog.title}
                </h3>
                <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
                  {blog.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <a
                    href={blog.link}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    Read more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
