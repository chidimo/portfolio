"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const resolveTheme = (): Theme => {
  const el = document.documentElement;
  if (el.classList.contains("theme-dark")) return "dark";
  if (el.classList.contains("theme-light")) return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const apply = (theme: Theme) => {
  const el = document.documentElement;
  el.classList.remove("theme-dark", "theme-light");
  el.classList.add(`theme-${theme}`);
  try {
    localStorage.setItem("theme", theme);
  } catch {
    /* storage unavailable — the choice just won't persist */
  }
};

const Sun = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

const Moon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(resolveTheme());
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    apply(next);
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        theme ? `Switch to ${theme === "dark" ? "light" : "dark"} theme` : "Toggle theme"
      }
      className="grid h-8 w-8 place-items-center text-faint transition-colors hover:text-ink"
    >
      {/* Render the icon only once mounted, to avoid a hydration mismatch. */}
      {theme === "dark" ? <Sun /> : theme === "light" ? <Moon /> : null}
    </button>
  );
};
