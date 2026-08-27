"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mergeClasses } from "utils/class-merge";

const nav = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Certifications", href: "/certifications" },
  { name: "Publications", href: "/publications" },
  { name: "Applications", href: "/applications" },
];

const active = (path: string | null, href: string) =>
  path === href || (href !== "/" && !!path?.startsWith(`${href}/`));

export function AppHeader() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-rule">
      <div className="measure flex items-baseline justify-between gap-6 py-5">
        <Link
          href="/"
          className="font-serif text-lg font-bold tracking-tight text-ink"
        >
          Chidi&nbsp;Orji
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="label sm:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav className="hidden items-baseline gap-6 sm:flex" aria-label="Global">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={mergeClasses(
                "font-sans text-xs font-semibold uppercase tracking-[0.16em] transition-colors",
                active(path, item.href)
                  ? "text-accent"
                  : "text-faint hover:text-ink"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {open ? (
        <nav className="measure flex flex-col gap-3 border-t border-rule py-4 sm:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={mergeClasses(
                "font-sans text-sm font-semibold uppercase tracking-[0.16em]",
                active(path, item.href) ? "text-accent" : "text-faint"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
