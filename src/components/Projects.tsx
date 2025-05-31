'use client';

import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  status?: 'in-progress' | 'completed';
}

const projects: Project[] = [
  {
    title: "Clockwork",
    description: "A full-stack web application for managing employee schedules.",
    technologies: ["React Native", "Expo", "TypeScript", "Go", "Gin", "PostgreSQL", "Auth0"],
    status: "in-progress",
    imageUrl: "/projects/clockwork.png"
  },
  {
    title: "MCAT Mentor Landing Page",
    description: "A modern, responsive landing page for MCAT Mentor.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/mcatmentor/website",
    liveUrl: "https://mcatmentor.org",
    imageUrl: "/projects/mcatmentor.png",
    status: "completed"
  },
  {
    title: "CoordBoard",
    description: "A PaperMC plugin that allows players to share and manage coordinates.",
    technologies: ["Java", "Plugin Development"],
    githubUrl: "https://github.com/dizzyfrogs/CoordBoard",
    imageUrl: "/projects/coordboard.png",
    status: "completed"
  },
  {
    title: "Encrypted Tic-Tac-Toe",
    description: "Command-line tic-tac-toe that serializes and encrypts every move.",
    technologies: ["Python", "Cryptography"],
    githubUrl: "https://github.com/dizzyfrogs/encrypted-tic-tac-toe",
    imageUrl: "/projects/tictactoe.png",
    status: "completed"
  },
  {
    title: "Hevy Follow Manager",
    description: "Modular automation tool for increasing user engagement on Hevy.",
    technologies: ["Python", "API"],
    imageUrl: "/projects/hevy.png",
    status: "in-progress"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
            >
              {project.imageUrl && (
                <div className="relative h-48 w-full">
                  <Image
                    src={project.imageUrl}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      View Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.status === 'in-progress' && (
                    <span className="inline-flex items-center px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 rounded-lg">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      In Development
                    </span>
                  )}
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