"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Briefcase } from "lucide-react";

const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Go", "Java", "HTML", "CSS", "SQL"],
  },
  {
    label: "Frameworks",
    skills: ["Next.js", "React", "React Native", "FastAPI", "Gin", "Expo", "Tailwind CSS", "Prisma"],
  },
  {
    label: "Tools",
    skills: ["PostgreSQL", "SQLite", "Supabase", "Docker", "Auth0", "Clerk", "Git", "Linux"],
  },
];

const experience = [
  {
    role: "Software Engineer Intern",
    company: "Early-Stage Stealth Startup",
    type: "Scheduling Services · Remote",
    period: "Apr 2025 - Jul 2025",
    bullets: [
      "Built Clockwork, a cross-platform React Native + TypeScript app unifying shift viewing and time-off requests for a 30-person team.",
      "Engineered a Go (Gin) + PostgreSQL backend with Auth0 and role-based access control for admins, managers, and employees.",
      "Designed a relational schema with reusable shift templates that cut managers' scheduling time in half.",
    ],
  },
];

const education = [
  {
    school: "Old Dominion University",
    degree: "B.S. Computer Science",
    sub: "Minor: Cybersecurity · 4.0 GPA",
    period: "2025 - 2027",
    note: "Dean's List",
  },
  {
    school: "Germanna Community College",
    degree: "A.S. Computer Science",
    sub: "3.8 GPA · Graduated May 2025",
    period: "2023 - 2025",
    note: "Dean's List",
  },
];

const achievements = [
  { title: "1st Place - ODU CSGS Hackathon", year: "2026" },
  { title: "1st Place - VCU RAM CTF", year: "2025" },
  { title: "Dean's List", year: "Germanna, ODU" },
];

function SectionReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-6 bg-canvas dark:bg-canvas-dark">
      <div className="max-w-5xl mx-auto space-y-12">

        <div>
          <SectionReveal>
            <p className="section-label mb-6">About</p>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
            {/* Bio */}
            <SectionReveal delay={0.05}>
              <p className="font-sans font-light text-base text-text-secondary dark:text-text-dark-secondary leading-relaxed max-w-prose">
                I&apos;m a full-stack developer studying Computer Science at Old Dominion Uiversity. I build web and mobile applications
                with a focus on clean architecture, intuitive UX, and thoughtful design. I also enjoy exploring new technology
                when a project calls for it.
              </p>
              <p className="font-sans font-light text-base text-text-secondary dark:text-text-dark-secondary leading-relaxed max-w-prose mt-4">
                Outside of projects I participate in events, study algorithms, and take on the
                occasional side project that&apos;s more for curiosity than necessity.
                Like a CPU-only 3D renderer in a terminal.
              </p>
            </SectionReveal>

            {/* Skills */}
            <SectionReveal delay={0.08}>
              <div className="space-y-4">
                {skillGroups.map((group) => (
                  <div key={group.label}>
                    <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-text-hint dark:text-text-dark-hint mb-3">
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="font-mono text-[11px] font-light px-2.5 py-1 rounded-sm bg-surface-secondary dark:bg-surface-dark-secondary border-[0.5px] border-border dark:border-border-dark text-text-secondary dark:text-text-dark-secondary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>

        <div className="border-t-[0.5px] border-t-border dark:border-t-border-dark" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">

          {/* Experience */}
          <SectionReveal delay={0.04}>
            <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-text-hint dark:text-text-dark-hint mb-3">
              Experience
            </p>
            <div className="space-y-3">
              {experience.map((job) => (
                <div
                  key={job.company}
                  className="p-4 rounded-lg bg-surface dark:bg-surface-dark border-[0.5px] border-border dark:border-border-dark shadow-card dark:shadow-none hover:border-border-hover dark:hover:border-border-dark-hover transition-colors duration-150"
                >
                  <div className="flex items-start justify-between gap-2 mb-0.5">
                    <p className="font-sans font-medium text-sm text-text-primary dark:text-text-dark-primary leading-snug">
                      {job.role}
                    </p>
                    <Briefcase size={12} className="text-text-hint dark:text-text-dark-hint shrink-0 mt-0.5" />
                  </div>
                  <p className="font-sans font-light text-xs text-text-secondary dark:text-text-dark-secondary">
                    {job.company}
                  </p>
                  <p className="font-mono text-[10px] text-text-muted dark:text-text-dark-muted mt-0.5 mb-3">
                    {job.type}
                  </p>
                  <ul className="space-y-2">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="font-mono text-[10px] text-text-hint dark:text-text-dark-hint mt-[3px] shrink-0">-</span>
                        <span className="font-sans font-light text-[12px] text-text-secondary dark:text-text-dark-secondary leading-relaxed">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-mono text-[10px] text-text-muted dark:text-text-dark-muted mt-3">
                    {job.period}
                  </p>
                </div>
              ))}
            </div>
          </SectionReveal>

          {/* Education */}
          <SectionReveal delay={0.08}>
            <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-text-hint dark:text-text-dark-hint mb-3">
              Education
            </p>
            <div className="space-y-3">
              {education.map((edu) => (
                <div
                  key={edu.school}
                  className="p-4 rounded-lg bg-surface dark:bg-surface-dark border-[0.5px] border-border dark:border-border-dark shadow-card dark:shadow-none hover:border-border-hover dark:hover:border-border-dark-hover transition-colors duration-150"
                >
                  <p className="font-sans font-medium text-sm text-text-primary dark:text-text-dark-primary">
                    {edu.school}
                  </p>
                  <p className="font-sans font-light text-xs text-text-secondary dark:text-text-dark-secondary mt-0.5">
                    {edu.degree}
                  </p>
                  <p className="font-mono text-[10px] text-text-muted dark:text-text-dark-muted mt-0.5">
                    {edu.sub}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-mono text-[10px] text-text-muted dark:text-text-dark-muted">
                      {edu.period}
                    </span>
                    {edu.note && (
                      <span className="font-mono text-[10px] text-accent">
                        {edu.note}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>

          {/* Achievements */}
          <SectionReveal delay={0.12}>
            <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-text-hint dark:text-text-dark-hint mb-3">
              Achievements
            </p>
            <div className="space-y-2">
              {achievements.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between p-3 rounded-md bg-surface dark:bg-surface-dark border-[0.5px] border-border dark:border-border-dark shadow-card dark:shadow-none hover:border-border-hover dark:hover:border-border-dark-hover transition-colors duration-150"
                >
                  <div className="flex items-center gap-3">
                    <Trophy size={13} className="text-accent shrink-0" />
                    <span className="font-sans font-light text-[13px] text-text-secondary dark:text-text-dark-secondary">
                      {item.title}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-text-muted dark:text-text-dark-muted shrink-0 ml-3">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </SectionReveal>

        </div>
      </div>
    </section>
  );
}
