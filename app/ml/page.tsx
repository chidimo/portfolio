import { PageHeader } from "components/page-header";
import { mlProjects } from "lib/ml-projects";
import { getMetadata } from "lib/constants";

export const metadata = getMetadata({ title: "ML & AI Projects" });

export default function MlProjectsPage() {
  return (
    <div>
      <PageHeader
        kicker="Research & Applied ML"
        title="ML & AI Projects"
        intro="Applied machine learning work from production systems and MSc research at the University of Salford."
      />

      <div className="space-y-4">
        {mlProjects.map((p) => (
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
}
