import { Certificate } from "types/index";
import { certificates } from "data/certifications";
import { SectionHeader } from "components/section-header";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { PlatformBadge } from "components/platform-badge";

export default function Certifications() {
  return (
    <div>
      <ul className="divide-y divide-gray-200">
        {certificates.map((cert: Certificate) => {
          return (
            <li key={cert.id} className="py-4 space-y-4">
              <SectionHeader
                title={cert.title}
                description={cert.about}
                imageURl={`https://ui-avatars.com/api/?name=${cert.platform}`}
              />

              <Link
                href={`${cert.certificate_url}/${cert.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-l leading-5 default-body-text"
              >
                View certificate
                <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-1.5" />
              </Link>

              <PlatformBadge platform={cert.platform} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
