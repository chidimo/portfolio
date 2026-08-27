"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { portfolio_projects, techStacks } from "lib/portfolio";
import type {
  ProjectNameAndImage,
  TBadgeColor,
  TechnologyStack,
} from "types/index";
import { Project } from "components/project";
import Modal from "./Modal";
import { Monogram } from "./monogram";
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

  const images = projectImages.find(
    (pImg) => pImg.projectName === selectedProject?.screenshotsFolder
  )?.fileData;

  const visibleProjects = useMemo(() => {
    if (selectedStack.length === 0) return portfolio_projects;
    return portfolio_projects.filter((project) =>
      selectedStack.some((tech) =>
        project.stack.includes(tech as TechnologyStack)
      )
    );
  }, [selectedStack]);

  const toggle = (stack: string) =>
    setSelectedStack((prev) =>
      prev.includes(stack)
        ? prev.filter((s) => s !== stack)
        : [...prev, stack]
    );

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center gap-2">
        <span className="mr-1 text-sm font-medium text-muted">
          Filter by tech
        </span>
        {techStacks.map((stack) => (
          <TechStackBadge
            key={stack}
            text={stackReadableNames[stack as TechnologyStack]}
            color={getColorFromStack(stack as TechnologyStack) as TBadgeColor}
            isSelected={selectedStack.includes(stack)}
            onClick={() => toggle(stack)}
          />
        ))}
        {selectedStack.length > 0 ? (
          <button
            type="button"
            onClick={() => setSelectedStack([])}
            className="ml-1 text-sm font-medium text-accent hover:underline"
          >
            Clear
          </button>
        ) : null}
      </div>

      <p className="mb-6 text-sm text-faint">
        {visibleProjects.length} project
        {visibleProjects.length === 1 ? "" : "s"}
      </p>

      <ul className="grid gap-4 sm:grid-cols-2 sm:auto-rows-fr">
        {visibleProjects.map((projectItem) => (
          <Project
            key={projectItem.name}
            projectItem={projectItem}
            onClick={() => setSelectedId(projectItem.name)}
          />
        ))}
      </ul>

      {selectedId && selectedProject ? (
        <Modal
          title=""
          isOpen={!!selectedId}
          onClose={() => setSelectedId(null)}
          content={
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Monogram
                  name={selectedProject.name}
                  className="h-12 w-12 text-base"
                />
                <div>
                  <h2 className="text-xl font-bold text-ink">
                    {selectedProject.name}
                  </h2>
                  {selectedProject.description ? (
                    <p className="prose-muted mt-1.5">
                      {selectedProject.description}
                    </p>
                  ) : null}
                </div>
              </div>

              {selectedProject.stack?.length ? (
                <div className="flex flex-wrap items-center gap-2">
                  {selectedProject.stack.map((st) => (
                    <TechStackBadge
                      key={st}
                      text={stackReadableNames[st as TechnologyStack]}
                      color={
                        getColorFromStack(st as TechnologyStack) as TBadgeColor
                      }
                    />
                  ))}
                </div>
              ) : null}

              {selectedProject.links?.length ? (
                <div className="flex flex-col gap-2 border-t border-line pt-4">
                  {selectedProject.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link text-sm"
                    >
                      {link.name}
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              ) : null}

              {images?.length ? (
                <div className="space-y-4 border-t border-line pt-4">
                  {images.map((image) => (
                    <img
                      key={image.imagePublicUrl}
                      src={image.imagePublicUrl}
                      alt=""
                      className="w-full rounded-lg border border-line"
                    />
                  ))}
                </div>
              ) : null}
            </div>
          }
        />
      ) : null}
    </div>
  );
};
