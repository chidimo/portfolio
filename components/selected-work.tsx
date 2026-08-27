import Link from "next/link";
import { portfolio_projects } from "lib/portfolio";
import { stackReadableNames } from "lib/constants";
import type { TechnologyStack } from "types/index";

const featured = portfolio_projects.slice(0, 4);

export const SelectedWork = () => {
  return (
    <section>
      <div className="flex items-baseline justify-between border-b border-line pb-4">
        <h2 className="text-xl font-bold sm:text-2xl">Selected work</h2>
        <Link href="/portfolio" className="link text-sm">
          All projects <span aria-hidden="true">→</span>
        </Link>
      </div>

      <ul className="mt-2 divide-y divide-line">
        {featured.map((project) => {
          const primary = project.links[0];
          return (
            <li key={project.name} className="group py-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-base font-semibold text-ink">
                  {project.name}
                </h3>
                {primary ? (
                  <a
                    href={primary.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link text-xs"
                  >
                    {primary.name} <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </div>
              {project.description ? (
                <p className="prose-muted mt-1.5 max-w-2xl text-sm">
                  {project.description}
                </p>
              ) : null}
              {project.stack.length ? (
                <p className="mt-2 font-mono text-xs text-faint">
                  {project.stack
                    .map((s) => stackReadableNames[s as TechnologyStack])
                    .join("  ·  ")}
                </p>
              ) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
