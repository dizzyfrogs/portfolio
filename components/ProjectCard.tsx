import Image from "next/image";
import { GitBranch, ExternalLink } from "lucide-react";

export interface Project {
  name: string;
  description: string;
  tech: string[];
  code?: string;
  live?: string;
  image?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col rounded-xl bg-surface dark:bg-surface-dark border-[0.5px] border-border dark:border-border-dark shadow-card dark:shadow-none hover:border-border-hover dark:hover:border-border-dark-hover transition-colors duration-150 overflow-hidden">
      {/* Project image */}
      {project.image && (
        <div className="relative w-full h-[200px] overflow-hidden bg-surface-secondary dark:bg-surface-dark-secondary border-b-[0.5px] border-b-border dark:border-b-border-dark">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-150"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Name + links */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-sans font-medium text-[15px] text-text-primary dark:text-text-dark-primary leading-snug">
            {project.name}
          </h3>
          <div className="flex items-center gap-1 shrink-0">
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Source code"
                className="flex items-center justify-center w-7 h-7 rounded-md text-text-muted dark:text-text-dark-muted hover:text-text-secondary dark:hover:text-text-dark-secondary hover:bg-surface-secondary dark:hover:bg-surface-dark-secondary transition-colors duration-150"
              >
                <GitBranch size={14} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live site"
                className="flex items-center justify-center w-7 h-7 rounded-md text-text-muted dark:text-text-dark-muted hover:text-text-secondary dark:hover:text-text-dark-secondary hover:bg-surface-secondary dark:hover:bg-surface-dark-secondary transition-colors duration-150"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="font-sans font-light text-[13px] text-text-secondary dark:text-text-dark-secondary leading-relaxed">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] font-light px-2 py-0.5 rounded-sm bg-accent-surface dark:bg-accent-dark-surface text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
