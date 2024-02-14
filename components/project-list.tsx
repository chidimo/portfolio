"use client";

import clsx from "clsx";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { portfolio_projects, techStacks } from "data/portfolio";

import type { ProjectNameAndImage, Project as ProjectType } from "types/index";
import { Project } from "components/project";

import Modal from "./Modal";
import { Badge } from "./badge";

type Props = {
  projectImages: ProjectNameAndImage[];
};

export const ProjectList = ({ projectImages }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const tch = searchParams.get("stack");
  const projectId = searchParams.get("projectId");

  const [selectedProject, setSelectedProject] = useState<ProjectType>(
    {} as ProjectType
  );

  const images = projectImages.filter((pImg) => {
    if (pImg.projectName === selectedProject.screenshotsFolder) {
      return true;
    }
  })[0]?.fileData;

  const techs = useMemo(
    () => (tch ?? "").split(",").filter((n) => n !== ""),
    [tch]
  );

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === null) {
        params.delete(name);
      } else {
        params.set(name, value);
      }
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

  useEffect(() => {
    if (projectId) {
      setSelectedProject(
        portfolio_projects.filter((pp) => pp.name === projectId)[0]
      );
    }
  }, [projectId]);

  return (
    <div>
      <div className="mb-10">
        <p className="text-gray-500">
          Below is a list (not exhaustive) of projects I&apos;ve done in the
          course of my career.
        </p>
        <p className="text-gray-500">
          You can filter the projects by clicking on any of the technologies
          listed on the right.
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between gap-x-8">
        <ul role="list" className="divide-y divide-gray-100">
          {visibleProjects.map((projectItem) => (
            <Project
              key={projectItem.name}
              projectItem={projectItem}
              onClick={() => {
                router.push(
                  `${pathname}?${createQueryString(
                    "projectId",
                    projectItem.name
                  )}`
                );
              }}
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

      <Modal
        title=""
        isOpen={!!projectId}
        onClose={() => {
          router.push(`${pathname}?${createQueryString("projectId", null)}`);
        }}
        content={
          <div>
            <div className="mb-5">
              <h2 className="mb-2 text-xl font-semibold leading-6 text-gray-900">
                {selectedProject.name}
              </h2>
              <p className="mb-2">{selectedProject.description}</p>

              <div className="mb-2 flex flex-wrap items-center">
                Made with{" "}
                {selectedProject.stack?.map((st) => {
                  return (
                    <Badge key={st} text={st} containerClassNames={"ml-1"} />
                  );
                })}
              </div>

              <h3 className="text-l font-semibold leading-6 text-gray-700">
                Project links
              </h3>
              <div className="">
                {selectedProject.links?.map((link) => {
                  return (
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center leading-5 text-blue-500"
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
    </div>
  );
};
