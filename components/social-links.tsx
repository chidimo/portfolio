import { mySocial } from "lib/social";
import { myEmail } from "lib/constants";
import { mergeClasses } from "utils/class-merge";

const rows = [
  ...mySocial.map((s) => ({ label: s.title, href: s.url })),
  { label: "Email", href: `mailto:${myEmail}` },
];

type Props = { className?: string };

export const SocialLinks = ({ className }: Props) => (
  <ul className={mergeClasses("flex flex-wrap gap-x-5 gap-y-1", className)}>
    {rows.map((row) => (
      <li key={row.label}>
        <a
          href={row.href}
          target={row.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="a-link"
        >
          {row.label}
        </a>
      </li>
    ))}
  </ul>
);
