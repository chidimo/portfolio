"use client";

import clsx from "clsx";

import type { Project as ProjectType } from "types/index";
import { SectionHeader } from "./section-header";
import { ResourceLink } from "./resource-link";

type Props = {
  projectItem: ProjectType;
 };

export const Project = (props: Props) => {
  const { projectItem,   } = props;

  return (
    <li className="flex flex-col mb-5 pt-3">
      <div className="flex flex-col gap-x-4 col-span-2">
        <SectionHeader
          title={projectItem.name}
          description={projectItem.description}
          imageURl={`https://ui-avatars.com/api/name=${projectItem.name}`}
        />

        <div className="mt-5">
          {projectItem.stack.map((st, idx) => {
            return (
              <p
                key={st}
                 className={clsx(
                  { "ml-1": idx !== 0 },
                  "my-1 mr-1",
                  "inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                )}
              >
                {st}
              </p>
            );
          })}
        </div>

        <ResourceLink
          title="View project details"
          href={`/portfolio/${projectItem.name}`}
        />
      </div>
    </li>
  );
};
