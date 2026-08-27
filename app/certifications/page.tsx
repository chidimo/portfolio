import type { Certificate } from "types/index";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { certificates } from "lib/certifications";
import { SectionHeader } from "components/section-header";
import { PlatformBadge } from "components/platform-badge";
import { PageHeader } from "components/page-header";
import { getMetadata } from "lib/constants";

export const metadata = getMetadata({ title: "Certifications" });

export default function Certifications() {
  const sorted = [...certificates].sort((a, b) => a.relevance - b.relevance);

  return (
    <div>
      <PageHeader
        eyebrow="Learning"
        title="Certifications"
        intro="Coursework and credentials, from web and data science to GIS and project management."
      />

      <ul className="grid gap-4 sm:grid-cols-2 sm:auto-rows-fr">
        {sorted.map((cert: Certificate) => (
          <li key={cert.id} className="card flex flex-col gap-4">
            <SectionHeader
              title={cert.title}
              description={cert.about || undefined}
              badge={cert.platform}
            />
            <div className="mt-auto flex items-center justify-between gap-3 pt-1">
              <PlatformBadge platform={cert.platform} />
              <Link
                href={`${cert.certificate_url}/${cert.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="link text-sm"
              >
                Verify
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
