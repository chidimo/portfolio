import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
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
        eyebrow="Side projects"
        title="Applications"
        intro="Small products I build and maintain for fun — on the web, in editor marketplaces, and on mobile."
      />

      <ul className="grid gap-4 sm:grid-cols-2 sm:auto-rows-fr">
        {applications.map((app) => {
          const links: AppLink[] = [
            app.webUrl && { label: "Web app", href: app.webUrl },
            app.vsCode && { label: "VS Code Marketplace", href: app.vsCode },
            app.openVsx && { label: "Open VSX Registry", href: app.openVsx },
            app.playStoreUrl && {
              label: "Google Play",
              href: app.playStoreUrl,
            },
          ].filter(Boolean) as AppLink[];

          return (
            <li key={app.name} className="card flex flex-col gap-4">
              <SectionHeader title={app.name} description={app.description} />

              {links.length ? (
                <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-4">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link text-sm"
                    >
                      {link.label}
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="mt-auto pt-4 text-sm text-faint">
                  In development
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
