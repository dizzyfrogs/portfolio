"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard, { type Project } from "./ProjectCard";

const projects: Project[] = [
  {
    name: "AlgoJournal",
    description: "DSA spaced repetition app for practicing algorithms with intelligent scheduling.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma", "Supabase", "Clerk"],
    live: "https://algojournal.dev/",
    image: "/projects/algojournal.png",
  },
  {
    name: "Clockwork",
    description: "Employee scheduling platform with real-time shift management and conflict resolution.",
    tech: ["React Native", "Expo", "TypeScript", "Go", "Gin", "PostgreSQL", "Auth0"],
    image: "/projects/clockwork.png",
  },
  {
    name: "ChunkLog",
    description: "Calorie and weight tracking app with a minimal interface and local-first data storage.",
    tech: ["FastAPI", "React", "SQLite", "Docker"],
    code: "https://github.com/dizzyfrogs/chunklog",
    image: "/projects/chunklog.png",
  },
  {
    name: "Stagstation",
    description: "Cross-platform save file manager for organizing and backing up game saves.",
    tech: ["Electron", "React", "JavaScript"],
    code: "https://github.com/dizzyfrogs/stagstation",
    image: "/projects/stagstation.png",
  },
  {
    name: "CoordBoard",
    description: "PaperMC plugin for in-game coordinate sharing between players.",
    tech: ["Java"],
    code: "https://github.com/dizzyfrogs/CoordBoard",
    image: "/projects/coordboard.png",
  },
  {
    name: "Hevy Engagement Bot",
    description: "Modular CLI automation tool for interacting with the Hevy fitness API.",
    tech: ["Python", "CLI", "API"],
    code: "https://github.com/dizzyfrogs/hevy-engagement-bot",
    image: "/projects/hevy.png",
  },
  {
    name: "No GPU, Just Math",
    description: "CPU-only 3D renderer that runs entirely in the terminal using raw math.",
    tech: ["Python", "CLI"],
    code: "https://github.com/dizzyfrogs/no-gpu-just-math",
    image: "/projects/nogpu.png",
  },
  {
    name: "BrainPy",
    description: "A BF interpreter written in Python with CLI support.",
    tech: ["Python", "CLI"],
    code: "https://github.com/dizzyfrogs/brainpy",
    image: "/projects/brainpy.png",
  },
  {
    name: "MineZora Landing Page",
    description: "Landing page for a Hytale community server.",
    tech: ["HTML", "CSS", "JS"],
    code: "https://github.com/1stDestroyer/minezora-website",
    live: "https://minezora.com",
    image: "/projects/minezora.png",
  },
  {
    name: "Encrypted Tic-Tac-Toe",
    description: "CLI tic-tac-toe game with encrypted board state using cryptographic primitives.",
    tech: ["Python", "CLI"],
    code: "https://github.com/dizzyfrogs/encrypted-tic-tac-toe",
    image: "/projects/tictactoe.png",
  },
  {
    name: "MCAT Mentor Landing Page",
    description: "Marketing landing page for an MCAT tutoring service.",
    tech: ["HTML", "CSS", "JS"],
    code: "https://github.com/mcatmentor/website",
    live: "https://mcatmentor.org",
    image: "/projects/mcatmentor.png",
  },
];

function ProjectReveal({ children, delay }: { children: React.ReactNode; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 md:px-6 bg-surface-secondary dark:bg-surface-dark-secondary">
      <div className="max-w-5xl mx-auto">
        <ProjectReveal delay={0}>
          <p className="section-label mb-8">Projects</p>
        </ProjectReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectReveal key={project.name} delay={Math.min(i * 0.04, 0.25)}>
              <ProjectCard project={project} />
            </ProjectReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
