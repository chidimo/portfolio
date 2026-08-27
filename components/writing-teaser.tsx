import Link from "next/link";
import { publications } from "lib/publications";
import { yearOf } from "utils/format-date";

const latest = [...publications]
  .sort(
    (a, b) => new Date(b.pub_date).getTime() - new Date(a.pub_date).getTime()
  )
  .slice(0, 5);

export const WritingTeaser = () => {
  return (
    <section>
      <div className="flex items-baseline justify-between border-b border-line pb-4">
        <h2 className="text-xl font-bold sm:text-2xl">Writing</h2>
        <Link href="/publications" className="link text-sm">
          All publications <span aria-hidden="true">→</span>
        </Link>
      </div>

      <ul className="mt-2 divide-y divide-line">
        {latest.map((pub) => (
          <li key={pub.title}>
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-baseline justify-between gap-4 py-4"
            >
              <span className="text-sm font-medium text-ink transition-colors group-hover:text-accent">
                {pub.title}
              </span>
              <span className="shrink-0 font-mono text-xs text-faint">
                {yearOf(pub.pub_date)}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
