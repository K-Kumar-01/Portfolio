import React from "react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Tech-focused background with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 opacity-90 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-40" />

        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Kushal Kumar</span>
            <span className="block text-gray-200 text-2xl sm:text-3xl mt-3">
              Software Developer | Open Source Contributor
            </span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            Software developer with expertise in full-stack development,
            Javascript, Python, and a track record of successful open-source
            contributions.
          </p>

          <div className="mt-10 flex justify-center space-x-6">
            <a
              href="https://github.com/k-kumar-01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/kushal-kumar-979575170/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:kushalkumargupta4@gmail.com"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Email Contact"
            >
              <Mail className="w-8 h-8" />
            </a>
            <a
              href="https://drive.google.com/file/d/16TSLMpbrmkk9NQl9d6GMgqmhzk00Zxcd/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Download Resume"
            >
              <FileText className="w-8 h-8" />
            </a>
          </div>

          <div className="mt-10">
            <a
              href="#about"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 transition-colors duration-200"
            >
              Learn More About Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-1 h-8 rounded-full bg-white/50 mx-auto" />
        </div>
      </div>
    </div>
  );
}
