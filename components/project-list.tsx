"use client";

import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { portfolio_projects, techStacks } from "lib/portfolio";
import type {
  ProjectNameAndImage,
  Project as ProjectType,
  TBadgeColor,
  TechnologyStack,
} from "types/index";
import { Project } from "components/project";
import Modal from "./Modal";
import { TechStackBadge, getColorFromStack } from "./tech-stack-badge";
import { stackReadableNames } from "lib/constants";

type Props = {
  projectImages: ProjectNameAndImage[];
};

export const ProjectList = ({ projectImages }: Props) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedStack, setSelectedStack] = useState<string[]>([]);

  const selectedProject = portfolio_projects.find(
    (pp) => pp.name === selectedId
  );

  const images = projectImages.filter((pImg) => {
    if (pImg.projectName === selectedProject?.screenshotsFolder) {
      return true;
    }
  })[0]?.fileData;

  const [visibleProjects, setVisibleProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    let visibleProjects = portfolio_projects;

    if (selectedStack.length > 0) {
      visibleProjects = visibleProjects.filter((pf) => {
        return selectedStack.some((el) =>
          pf.stack.includes(el as TechnologyStack)
        );
      });
    }

    setVisibleProjects(visibleProjects);
  }, [selectedStack]);

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
                text={stackReadableNames[stack as TechnologyStack]}
                color={
                  getColorFromStack(stack as TechnologyStack) as TBadgeColor
                }
                isSelected={selectedStack.includes(stack)}
                onClick={() => {
                  if (selectedStack.includes(stack)) {
                    setSelectedStack((prev) => prev.filter((s) => s !== stack));
                  } else {
                    setSelectedStack((prev) => [...prev, stack]);
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
                <h2 className="mb-2 text-xl font-semibold leading-6 text-blue-900">
                  {selectedProject.name}
                </h2>
                <p className="mb-2">{selectedProject.description}</p>

                <div className="mb-2 flex flex-wrap gap-2 items-center">
                  Made with{" "}
                  {selectedProject.stack?.map((st) => {
                    return (
                      <TechStackBadge
                        key={st}
                        text={stackReadableNames[st as TechnologyStack]}
                        color={
                          getColorFromStack(
                            st as TechnologyStack
                          ) as TBadgeColor
                        }
                      />
                    );
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
