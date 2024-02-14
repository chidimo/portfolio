"use client";

import clsx from "clsx";
import { Project } from "components/project";
import { portfolio_projects, techStacks } from "data/portfolio";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { ProjectNameAndImage, Project as ProjectType } from "types/index";
import { Badge } from "./badge";

type Props = {
  projectImages: ProjectNameAndImage[];
};

export const ProjectList = ({ projectImages }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const tch = searchParams.get("stack");

  const techs = useMemo(
    () => (tch ?? "").split(",").filter((n) => n !== ""),
    [tch]
  );

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams as unknown as string);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const [visibleProjects, setVisibleProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    let visibleProjects = portfolio_projects;

    if (techs.length > 0) {
      visibleProjects = visibleProjects.filter((pf) => {
        return techs.some((el) => pf.stack.includes(el));
      });
    }

    setVisibleProjects(visibleProjects);
  }, [techs]);

  return (
    <div>
      <div className="mb-10">
        <p className="text-gray-500">
          Below is a list of my projects. I have worked with quite a number of
          technologies before settling for a full-stack developer role.
        </p>
        <p className="text-gray-500">
          You can filter by the technologies shown on the right.
        </p>
        <p className="text-gray-500">
          Click on a technology to show all projects for which I used said
          technology.
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between gap-x-8">
        <ul role="list" className="divide-y divide-gray-100">
          {visibleProjects.map((projectItem) => (
            <Project
              key={projectItem.name}
              projectItem={projectItem}
              images={
                projectImages.filter((pImg) => {
                  if (pImg.projectName === projectItem.screenshotsFolder) {
                    return true;
                  }
                })[0]?.fileData
              }
            />
          ))}
        </ul>
        <div className="bg-white px-1 flex flex-col h-40 md:h-full overflow-y-auto md:overflow-y-visible">
          {techStacks.map((stack) => {
            return (
              <Badge
                key={stack}
                text={stack}
                containerClassNames={clsx(
                  { "text-md font-bold": stack === tch },
                  { "text-xs font-medium": stack !== tch }
                )}
                onBadgeClick={() => {
                  if (stack === tch) {
                    router.push(pathname as unknown as string);
                  } else {
                    router.push(
                      `${pathname}?${createQueryString("stack", stack)}`
                    );
                  }
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
