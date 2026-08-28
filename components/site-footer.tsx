import Link from "next/link";
import { SocialLinks } from "./social-links";

const links = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "ML Projects", href: "/ml" },
  { name: "Certifications", href: "/certifications" },
  { name: "Publications", href: "/publications" },
  { name: "Applications", href: "/applications" },
];

export const SiteFooter = () => (
  <footer className="mt-20 border-t border-rule">
    <div className="measure grid gap-10 py-12 sm:grid-cols-[1.5fr_1fr_1fr]">
      <div>
        <p className="font-serif text-lg font-bold text-ink">Chidi Orji</p>
        <p className="mt-2 max-w-xs text-muted">
          Full-stack ML engineer building production machine learning systems and the
          applications around them.
        </p>
      </div>

      <div>
        <p className="label mb-3">Index</p>
        <ul className="space-y-1.5">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="a-link">
                {l.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="label mb-3">Elsewhere</p>
        <SocialLinks className="flex-col gap-1.5" />
      </div>
    </div>

    <div className="measure flex flex-col gap-1 border-t border-rule py-5 font-sans text-[11px] uppercase tracking-[0.14em] text-faint sm:flex-row sm:justify-between">
      <span>© {new Date().getFullYear()} Chidi Orji</span>
      <span>Set in Georgia · Built with Next.js</span>
    </div>
  </footer>
);
