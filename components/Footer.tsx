import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-4 md:px-6 bg-canvas dark:bg-canvas-dark border-t-[0.5px] border-t-border dark:border-t-border-dark">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <p className="font-mono text-[11px] text-text-hint dark:text-text-dark-hint">
          Suleiman Mejd &copy; {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-1">
          <a
            href="mailto:symejd@gmail.com"
            aria-label="Email"
            className="flex items-center justify-center w-8 h-8 rounded-md text-text-hint dark:text-text-dark-hint hover:text-text-secondary dark:hover:text-text-dark-secondary hover:bg-surface-secondary dark:hover:bg-surface-dark-secondary transition-colors duration-150"
          >
            <Mail size={15} />
          </a>
          <a
            href="https://github.com/dizzyfrogs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center w-8 h-8 rounded-md text-text-hint dark:text-text-dark-hint hover:text-text-secondary dark:hover:text-text-dark-secondary hover:bg-surface-secondary dark:hover:bg-surface-dark-secondary transition-colors duration-150"
          >
            <Github size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/suleiman-mejd/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center w-8 h-8 rounded-md text-text-hint dark:text-text-dark-hint hover:text-text-secondary dark:hover:text-text-dark-secondary hover:bg-surface-secondary dark:hover:bg-surface-dark-secondary transition-colors duration-150"
          >
            <Linkedin size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
