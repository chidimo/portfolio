import type { Publication } from "types/index";
import { publications } from "lib/publications";
import { SectionHeader } from "components/section-header";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { getMetadata } from "lib/constants";

export const metadata = getMetadata({ title: "Chidi Orji | Publications" });

export default function Publications() {
  publications.sort((a, b) => {
    return new Date(b.pub_date).getTime() - new Date(a.pub_date).getTime();
  });

  return (
    <div>
      <ul className="divide-y divide-gray-200">
        {publications.map((pub: Publication) => {
          return (
            <li key={pub.title} className="py-4 space-y-4">
              <SectionHeader
                title={pub.title}
                imageURl={`https://ui-avatars.com/api/?name=${pub.platform}`}
              />

              <Link
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-l leading-5 default-body-text"
              >
                View publication
                <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-1.5" />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
