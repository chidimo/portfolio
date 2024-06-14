"use client";

import type { Project as ProjectType } from "types/index";
import { SectionHeader } from "./section-header";
import { TechStackBadge } from "./tech-stack-badge";

type Props = {
  onClick: () => void;
  projectItem: ProjectType;
};

export const Project = (props: Props) => {
  const { projectItem, onClick } = props;

  return (
    <li className="flex flex-col mb-5 pt-5">
      <div className="flex flex-col gap-x-4 col-span-2">
        <SectionHeader
          title={projectItem.name}
          description={projectItem.description}
          imageURl={`https://ui-avatars.com/api/name=${projectItem.name}`}
        />

        <div className="mt-5 flex flex-wrap gap-4">
          {projectItem.stack.map((st) => {
            return (
              <div key={st}>
                <TechStackBadge key={st} stack={st} />
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={onClick}
          className="flex items-center text-l leading-5 text-gray-500 cursor-pointer mt-5"
        >
          View project information
        </button>
      </div>
    </li>
  );
};
