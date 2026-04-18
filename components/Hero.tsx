"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MapPin, Mail, Github, Linkedin } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4 md:px-6 bg-canvas dark:bg-[#0e0c09] border-b-[0.5px] border-b-border dark:border-b-[#1e1b17] transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto w-full py-24">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12 md:gap-16">

          <div className="flex-1 min-w-0">

            <motion.div
              custom={0}
              variants={fade}
              initial="hidden"
              animate="show"
              className="flex items-center gap-3 mb-8"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.17em] text-text-muted dark:text-[#5a5248]">
                Full-Stack Developer
              </span>
              <span className="w-px h-3 bg-border dark:bg-[#2a2520]" />
              <span className="flex items-center gap-1 font-mono text-[9px] text-text-hint dark:text-[#3e3a34]">
                <MapPin size={9} />
                Stafford, VA
              </span>
            </motion.div>

            <motion.h1
              custom={0.08}
              variants={fade}
              initial="hidden"
              animate="show"
              className="font-sans font-light leading-[1.0] tracking-[-0.05em] text-[56px] md:text-[64px] text-text-primary dark:text-[#ede8e0] mb-6"
            >
              Suleiman
              <br />
              <span className="font-medium" style={{ color: "#7c6fff" }}>Mejd</span>
            </motion.h1>

            <motion.div
              custom={0.16}
              variants={fade}
              initial="hidden"
              animate="show"
              className="w-8 h-px bg-border dark:bg-[#2a2520] mb-6"
            />

            {/* Tagline */}
            <motion.p
              custom={0.22}
              variants={fade}
              initial="hidden"
              animate="show"
              className="font-sans font-light text-[15px] leading-[1.75] text-text-secondary dark:text-[#8a8278] max-w-[360px] mb-8"
            >
              I enjoy building across the full stack.
              Keeping things clean, usable, and sometimes making things just because
              they sounded like a good idea at the time.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={0.3}
              variants={fade}
              initial="hidden"
              animate="show"
              className="flex items-center gap-3 mb-12"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 h-10 px-5 rounded-md font-sans font-medium text-[13.5px] bg-text-primary dark:bg-[#ede8e0] text-canvas dark:text-[#14120f] hover:opacity-85 transition-opacity duration-150"
              >
                View Projects
                <ArrowRight size={13} />
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center h-10 px-4 rounded-md font-sans font-medium text-[13.5px] text-text-muted dark:text-[#5a5248] hover:text-text-secondary dark:hover:text-[#8a8278] hover:bg-surface-secondary dark:hover:bg-[#1a1714] transition-colors duration-150"
              >
                About Me
              </a>
            </motion.div>

            <motion.div
              custom={0.38}
              variants={fade}
              initial="hidden"
              animate="show"
              className="flex items-center gap-4"
            >
              <div className="flex items-center gap-1">
                <a
                  href="mailto:symejd@gmail.com"
                  aria-label="Email"
                  className="flex items-center justify-center w-8 h-8 rounded-md text-text-muted dark:text-[#5a5248] hover:text-text-primary dark:hover:text-[#ede8e0] hover:bg-surface-secondary dark:hover:bg-[#1a1714] transition-colors duration-150"
                >
                  <Mail size={14} />
                </a>
                <a
                  href="https://github.com/dizzyfrogs"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex items-center justify-center w-8 h-8 rounded-md text-text-muted dark:text-[#5a5248] hover:text-text-primary dark:hover:text-[#ede8e0] hover:bg-surface-secondary dark:hover:bg-[#1a1714] transition-colors duration-150"
                >
                  <Github size={14} />
                </a>
                <a
                  href="https://www.linkedin.com/in/suleiman-mejd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center w-8 h-8 rounded-md text-text-muted dark:text-[#5a5248] hover:text-text-primary dark:hover:text-[#ede8e0] hover:bg-surface-secondary dark:hover:bg-[#1a1714] transition-colors duration-150"
                >
                  <Linkedin size={14} />
                </a>
              </div>
              <span className="w-px h-3 bg-border dark:bg-[#2a2520]" />
              <span className="font-mono text-[10px] text-text-hint dark:text-[#3e3a34]">
                CS @ ODU · Graduating 2027
              </span>
            </motion.div>

          </div>

          <motion.div
            custom={0.06}
            variants={fade}
            initial="hidden"
            animate="show"
            className="shrink-0 flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="relative w-52 h-52 md:w-[268px] md:h-[268px] rounded-xl overflow-hidden shadow-card dark:shadow-none">
                <Image
                  src="/avatar.jpg"
                  alt="Suleiman Mejd"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 rounded-xl pointer-events-none border-[0.5px] border-border dark:border-[rgba(255,255,255,0.08)]" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
