import { Publication } from "types/index";
import { publications } from "data/publications";
import { SectionHeader } from "components/section-header";
import { ResourceLink } from "components/resource-link";

export default function Publications() {
  publications.sort((a, b) => {
    return new Date(b.pub_date).getTime() - new Date(a.pub_date).getTime();
  });

  return (
    <div>
      <ul role="list" className="divide-y divide-gray-200">
        {publications.map((pub: Publication, idx: number) => {
          return (
            <li key={pub.title} className="py-4">
              <SectionHeader
                title={pub.title}
                imageURl={`https://ui-avatars.com/api/?name=${pub.platform}`}
              />
              <ResourceLink title="View publication" href={pub.link} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
