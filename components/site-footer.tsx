import Link from "next/link";
import { SocialLinks } from "./social-links";

const links = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Certifications", href: "/certifications" },
  { name: "Publications", href: "/publications" },
  { name: "Applications", href: "/applications" },
];

export const SiteFooter = () => {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="container-page flex flex-col gap-10 py-14 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <p className="text-sm font-semibold text-ink">Chidi Orji</p>
          <p className="prose-muted mt-2">
            Product-focused software engineer building scalable, well-crafted
            web applications.
          </p>
          <SocialLinks className="mt-5" />
        </div>

        <nav className="grid grid-cols-2 gap-x-12 gap-y-2.5 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted transition-colors hover:text-ink"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="container-page flex flex-col gap-1 pb-10 text-xs text-faint sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Chidi Orji. All rights reserved.</span>
        <span>Built with Next.js &amp; Tailwind CSS.</span>
      </div>
    </footer>
  );
};
