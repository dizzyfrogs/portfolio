"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

type Theme = "light" | "dark" | "system";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored === "light" || stored === "dark" || stored === "system") {
      setTheme(stored);
    }
  }, []);

  const applyTheme = (t: Theme) => {
    setTheme(t);
    localStorage.setItem("theme", t);
    const root = document.documentElement;
    if (t === "dark") {
      root.classList.add("dark");
    } else if (t === "light") {
      root.classList.remove("dark");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
  };

  if (!mounted) return <div className="w-[88px] h-8" />;

  const options: { value: Theme; icon: React.ReactNode }[] = [
    { value: "light", icon: <Sun size={13} /> },
    { value: "system", icon: <Monitor size={13} /> },
    { value: "dark", icon: <Moon size={13} /> },
  ];

  return (
    <div className="flex items-center gap-0 bg-surface-secondary dark:bg-surface-dark-secondary border-thin border-border dark:border-border-dark rounded-md p-[3px]">
      {options.map(({ value, icon }) => (
        <button
          key={value}
          onClick={() => applyTheme(value)}
          className={`flex items-center justify-center w-7 h-[26px] rounded-[6px] transition-colors duration-150 ${
            theme === value
              ? "bg-surface dark:bg-surface-dark text-text-primary dark:text-text-dark-primary shadow-card"
              : "text-text-muted dark:text-text-dark-muted hover:text-text-secondary dark:hover:text-text-dark-secondary"
          }`}
          aria-label={value}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}
