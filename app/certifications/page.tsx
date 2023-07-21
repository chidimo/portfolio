import { Certificate } from "types/index";
import { certificates } from "data/certifications";
import { SectionHeader } from "components/section-header";
import { ResourceLink } from "components/resource-link";

export default function Certifications() {
  return (
    <div>
      <ul role="list" className="divide-y divide-gray-200">
        {certificates.map((cert: Certificate) => {
          return (
            <li key={cert.id} className="py-4">
              <SectionHeader
                title={cert.title}
                description={cert.about}
                imageURl={`https://ui-avatars.com/api/?name=${cert.platform}`}
              />
              <ResourceLink
                title="View certificate"
                href={cert.certificate_url}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
