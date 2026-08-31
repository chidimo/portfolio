"use client";

import { useMemo, useState } from "react";
import type { MlDomain, MlProject } from "lib/ml-projects";
import { mergeClasses } from "utils/class-merge";

const DOMAIN_ORDER: MlDomain[] = [
  "NLP",
  "Computer Vision",
  "Big Data",
  "Classical ML",
];

const chip =
  "border px-2.5 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors";
const chipOn = "border-accent bg-accent text-accent-ink";
const chipOff = "border-rule text-muted hover:border-ink hover:text-ink";

export const MlProjectList = ({ projects }: { projects: MlProject[] }) => {
  const [active, setActive] = useState<MlDomain | null>(null);

  const domains = useMemo(() => {
    const counts = new Map<MlDomain, number>();
    for (const p of projects) {
      for (const d of p.domains) counts.set(d, (counts.get(d) ?? 0) + 1);
    }
    return DOMAIN_ORDER.filter((d) => counts.has(d)).map((d) => ({
      name: d,
      count: counts.get(d) as number,
    }));
  }, [projects]);

  const visible = active
    ? projects.filter((p) => p.domains.includes(active))
    : projects;

  return (
    <div>
      <p className="label mb-3">Filter by domain</p>
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive(null)}
          className={mergeClasses(chip, active === null ? chipOn : chipOff)}
        >
          All · {projects.length}
        </button>
        {domains.map(({ name, count }) => (
          <button
            key={name}
            type="button"
            onClick={() =>
              setActive((cur) => (cur === name ? null : name))
            }
            className={mergeClasses(chip, active === name ? chipOn : chipOff)}
          >
            {name} · {count}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {visible.map((p) => (
          <article key={p.slug} className="clip">
            <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-1">
              <div>
                <p className="label">{p.typeLabel}</p>
                <h2 className="mt-1.5 font-serif text-xl font-bold leading-snug">
                  {p.title}
                </h2>
                <p className="mt-1 text-sm text-faint">
                  {p.context}
                  {p.status ? ` · ${p.status}` : ""}
                </p>
              </div>
              {p.link ? (
                <a
                  href={p.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="more shrink-0"
                >
                  {p.link.label} ↗
                </a>
              ) : null}
            </div>

            <p className="mt-4 max-w-prose text-muted">{p.description}</p>

            {p.results.length ? (
              <div className="mt-5 border-l-2 border-accent pl-4">
                <p className="label mb-1.5">Results</p>
                <ul className="space-y-1 text-sm text-ink">
                  {p.results.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            <p className="mt-5 font-sans text-[11px] uppercase tracking-[0.14em] text-faint">
              {p.tech.join(" · ")}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};
