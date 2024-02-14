"use client";

import clsx from "clsx";

import type { Project as ProjectType } from "types/index";

import { Badge } from "./badge";
import { SectionHeader } from "./section-header";

type Props = {
  onClick: () => void;
  projectItem: ProjectType;
};

export const Project = (props: Props) => {
  const { projectItem, onClick } = props;

  return (
    <>
      <li className="flex flex-col mb-5 pt-5">
        <div className="flex flex-col gap-x-4 col-span-2">
          <SectionHeader
            title={projectItem.name}
            description={projectItem.description}
            imageURl={`https://ui-avatars.com/api/name=${projectItem.name}`}
          />

          <div className="mt-5">
            {projectItem.stack.map((st, idx) => {
              return (
                <Badge
                  key={st}
                  text={st}
                  containerClassNames={clsx({ "mx-1 my-1": idx !== 0 })}
                />
              );
            })}
          </div>

          <p
            onClick={onClick}
            className="flex items-center text-l leading-5 text-gray-500 cursor-pointer mt-5"
          >
            View project information
          </p>
        </div>
      </li>
    </>
  );
};
