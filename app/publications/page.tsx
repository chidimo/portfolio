import type { Publication } from "types/index";
import { publications } from "lib/publications";
import { PageHeader } from "components/page-header";
import { getMetadata } from "lib/constants";
import { formatMonthYear } from "utils/format-date";

export const metadata = getMetadata({ title: "Publications" });

export default function Publications() {
  const sorted = [...publications].sort(
    (a, b) => new Date(b.pub_date).getTime() - new Date(a.pub_date).getTime()
  );

  return (
    <div>
      <PageHeader
        eyebrow="Writing"
        title="Publications"
        intro="Articles I've written for Smashing Magazine and elsewhere, mostly on React, testing, and frontend architecture."
      />

      <ul className="divide-y divide-line">
        {sorted.map((pub: Publication) => (
          <li key={pub.title}>
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <span className="font-medium text-ink transition-colors group-hover:text-accent">
                {pub.title}
              </span>
              <span className="shrink-0 font-mono text-xs text-faint">
                {pub.platform} · {formatMonthYear(pub.pub_date)}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
