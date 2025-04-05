"use client";

import clsx from "clsx";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { portfolio_projects, techStacks } from "lib/portfolio";

import type {
  ProjectNameAndImage,
  Project as ProjectType,
  TechnologyStack,
} from "types/index";
import { Project } from "components/project";
import Modal from "./Modal";
import { TechStackBadge } from "./tech-stack-badge";
import { useQueryString } from "lib/use-query-string";

type Props = {
  projectImages: ProjectNameAndImage[];
};

export const ProjectList = ({ projectImages }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const tch = searchParams.get("stack");

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = portfolio_projects.find(
    (pp) => pp.name === selectedId
  );

  const images = projectImages.filter((pImg) => {
    if (pImg.projectName === selectedProject?.screenshotsFolder) {
      return true;
    }
  })[0]?.fileData;

  const techs = useMemo(
    () => (tch ?? "").split(",").filter((n) => n !== ""),
    [tch]
  );

  const { createQueryString } = useQueryString();

  const [visibleProjects, setVisibleProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    let visibleProjects = portfolio_projects;

    if (techs.length > 0) {
      visibleProjects = visibleProjects.filter((pf) => {
        return techs.some((el) => pf.stack.includes(el as TechnologyStack));
      });
    }

    setVisibleProjects(visibleProjects);
  }, [techs]);

  return (
    <div>
      <div className="mb-10 default-body-text">
        <p className="">
          Below is a non-exhaustime list of projects I have done in the course
          of my career.
        </p>
        <p className="">
          You can filter the projects by clicking on any of the technologies
          listed on the right.
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between gap-x-8">
        <ul className="divide-y divide-gray-100">
          {visibleProjects.map((projectItem) => (
            <Project
              key={projectItem.name}
              projectItem={projectItem}
              onClick={() => {
                setSelectedId(projectItem.name);
              }}
            />
          ))}
        </ul>
        <div
          className={clsx(
            "flex flex-wrap",
            "bg-white px-1 h-40 space-y-3",
            "flex-col overflow-y-auto",
            "md:h-full md:overflow-y-visible"
          )}
        >
          {techStacks.map((stack) => {
            return (
              <TechStackBadge
                key={stack}
                stack={stack as TechnologyStack}
                onClick={() => {
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

      {selectedId && selectedProject && (
        <Modal
          title=""
          isOpen={!!selectedId}
          onClose={() => {
            setSelectedId(null);
          }}
          content={
            <div className="space-y-5">
              <div className="space-y-5">
                <h2 className="mb-2 text-xl font-semibold leading-6 default-header-text">
                  {selectedProject.name}
                </h2>
                <p className="mb-2">{selectedProject.description}</p>

                <div className="mb-2 flex flex-wrap gap-2 items-center">
                  Made with{" "}
                  {selectedProject.stack?.map((st) => {
                    return <TechStackBadge key={st} stack={st} />;
                  })}
                </div>
                <hr />

                <div className="">
                  {selectedProject.links?.map((link) => {
                    return (
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center leading-5 default-body-text text-md"
                        key={link.name}
                        href={link.url}
                      >
                        {link.name}{" "}
                        <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-1.5" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="pictures">
                {images?.map((image) => {
                  return (
                    <div
                      key={image.imagePublicUrl}
                      className="mb-5 border border-gray-300 rounded-md"
                    >
                      <img
                        src={image.imagePublicUrl}
                        alt=""
                        className="rounded border border-gray-300"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          }
        />
      )}
    </div>
  );
};
