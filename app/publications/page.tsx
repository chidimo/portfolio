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
        kicker="Writing"
        title="Publications"
        intro="Articles I've written for Smashing Magazine and elsewhere — mostly on React, testing, and frontend architecture."
      />

      <ul className="divide-y divide-rule">
        {sorted.map((pub: Publication) => (
          <li key={pub.title}>
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:gap-8"
            >
              <span className="font-serif text-lg transition-colors group-hover:text-accent">
                {pub.title}
              </span>
              <span className="font-sans text-[11px] uppercase tracking-[0.14em] text-faint sm:text-right">
                {pub.platform} — {formatMonthYear(pub.pub_date)}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
