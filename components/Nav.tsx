"use client";

import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "/resume.pdf", external: true },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string, external?: boolean) => {
    setOpen(false);
    if (!external && href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ${
          scrolled
            ? "backdrop-blur-[12px] bg-canvas/85 dark:bg-[#0e0c09]/85 border-b-[0.5px] border-b-border dark:border-b-[#2a2520]"
            : "bg-transparent border-b-[0.5px] border-b-transparent"
        }`}
      >
        <nav className="max-w-5xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
          <a
            href="#"
            className="font-sans font-medium text-sm tracking-tight transition-colors duration-150 text-text-primary dark:text-[#ede8e0]"
          >
            suleiman.dev
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                download={link.label === "Resume" ? "Suleiman Mejd Resume.pdf" : undefined}
                onClick={() => handleLink(link.href, link.external)}
                className="font-sans text-[13px] transition-colors duration-150 flex items-center gap-1.5 text-text-muted dark:text-[#8a8278] hover:text-text-primary dark:hover:text-[#ede8e0]"
              >
                {link.label === "Resume" && <FileText size={13} />}
                {link.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden transition-colors duration-150 text-text-muted dark:text-[#8a8278] hover:text-text-primary dark:hover:text-[#ede8e0]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col bg-canvas dark:bg-[#0e0c09] pt-14 px-4 md:px-6">
          <div className="flex flex-col gap-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                download={link.label === "Resume" ? "Suleiman Mejd Resume.pdf" : undefined}
                onClick={() => handleLink(link.href, link.external)}
                className="font-sans text-2xl font-light text-text-secondary dark:text-[#c8c2b8] hover:text-text-primary dark:hover:text-[#ede8e0] transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
