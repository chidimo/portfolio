import Link from "next/link";
import { applications } from "lib/applications";
import { SectionHeader } from "components/section-header";
import { PageHeader } from "components/page-header";
import { getMetadata } from "lib/constants";

export const metadata = getMetadata({ title: "Applications" });

type AppLink = { label: string; href: string };

export default function ApplicationsPage() {
  return (
    <div>
      <PageHeader
        kicker="Side Projects"
        title="Applications"
        intro="Small products I build and maintain for fun — on the web, in editor marketplaces, and on mobile."
      />

      <ul className="grid gap-4 sm:auto-rows-fr sm:grid-cols-2">
        {applications.map((app) => {
          const links: AppLink[] = [
            app.webUrl && { label: "Web app", href: app.webUrl },
            app.vsCode && { label: "VS Code Marketplace", href: app.vsCode },
            app.openVsx && { label: "Open VSX", href: app.openVsx },
            app.playStoreUrl && { label: "Google Play", href: app.playStoreUrl },
          ].filter(Boolean) as AppLink[];

          return (
            <li key={app.name} className="clip flex flex-col gap-4">
              <SectionHeader title={app.name} description={app.description} />
              <div className="mt-auto border-t border-rule pt-4">
                {links.length ? (
                  <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
                    {links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="more"
                        >
                          {link.label} ↗
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-faint">
                    In development
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
