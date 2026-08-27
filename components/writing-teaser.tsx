import Link from "next/link";
import { publications } from "lib/publications";
import { yearOf } from "utils/format-date";

const latest = [...publications]
  .sort(
    (a, b) => new Date(b.pub_date).getTime() - new Date(a.pub_date).getTime()
  )
  .slice(0, 5);

export const WritingTeaser = () => (
  <section>
    <div className="flex items-baseline justify-between gap-4">
      <h2 className="font-serif text-2xl font-bold sm:text-3xl">Writing</h2>
      <Link href="/publications" className="more">
        All publications →
      </Link>
    </div>
    <hr className="rule mt-4" />

    <ul className="divide-y divide-rule">
      {latest.map((pub) => (
        <li key={pub.title}>
          <a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid gap-x-6 py-4 sm:grid-cols-[3rem_1fr]"
          >
            <span className="font-serif text-faint">
              {yearOf(pub.pub_date)}
            </span>
            <span className="font-serif transition-colors group-hover:text-accent">
              {pub.title}
            </span>
          </a>
        </li>
      ))}
    </ul>
  </section>
);
