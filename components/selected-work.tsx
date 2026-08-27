import Link from "next/link";
import { featuredProjects } from "lib/portfolio";
import { techLabel } from "lib/constants";

const featured = featuredProjects;

export const SelectedWork = () => (
  <section>
    <div className="flex items-baseline justify-between gap-4">
      <h2 className="font-serif text-2xl font-bold sm:text-3xl">Selected Work</h2>
      <Link href="/portfolio" className="more">
        All projects →
      </Link>
    </div>
    <hr className="rule mt-4" />

    <ol className="divide-y divide-rule">
      {featured.map((p, i) => {
        const primary = p.links[0];
        return (
          <li
            key={p.name}
            className="grid gap-x-6 gap-y-1 py-6 sm:grid-cols-[2.5rem_1fr]"
          >
            <span className="font-serif text-xl text-faint">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-serif text-lg font-bold">{p.name}</h3>
                {primary ? (
                  <a
                    href={primary.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="more"
                  >
                    {primary.name} ↗
                  </a>
                ) : null}
              </div>
              {p.description ? (
                <p className="mt-1.5 max-w-prose text-muted">{p.description}</p>
              ) : null}
              {p.stack.length ? (
                <p className="mt-2 font-sans text-[11px] uppercase tracking-[0.14em] text-faint">
                  {p.stack.map((s) => techLabel(s)).join(" · ")}
                </p>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  </section>
);
