"use client";

import clsx from "clsx";
import { Project } from "components/project";
import { portfolio_projects, techStacks } from "data/portfolio";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { Project as ProjectType } from "types/index";

const intro = [
  "Below is a list of my projects. I have worked with quite a number of technologies before settling for a full-stack developer role. You can filter by the technologies shown on the right.",
  "Click on a technology to show all projects for which I used said technology.",
];

export const ProjectList = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const tch = searchParams.get("stack");

  const techs = useMemo(
    () => (tch ?? "").split(",").filter((n) => n !== ""),
    [tch]
  );
  console.log(techs);

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
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
        {intro.map((item) => {
          return <p key={item}>{item}</p>;
        })}
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between gap-x-8">
        <ul role="list" className="divide-y divide-gray-100">
          {visibleProjects.map((projectItem) => (
            <Project key={projectItem.name} projectItem={projectItem} />
          ))}
        </ul>
        <div className="bg-white px-1 flex flex-col h-40 md:h-full overflow-y-auto md:overflow-y-visible">
          {techStacks.map((stack) => {
            return (
              <p
                key={stack}
                onClick={() =>
                  router.push(
                    pathname + "?" + createQueryString("stack", stack)
                  )
                }
                className={clsx(
                  "cursor-pointer text-center",
                  "my-1 mr-1",
                  "rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                )}
              >
                {stack}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
