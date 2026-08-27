"use client";

import type {
  Project as ProjectType,
  TBadgeColor,
  TechnologyStack,
} from "types/index";
import { Monogram } from "./monogram";
import { TechStackBadge, getColorFromStack } from "./tech-stack-badge";
import { stackReadableNames } from "lib/constants";

type Props = {
  onClick: () => void;
  projectItem: ProjectType;
};

export const Project = ({ projectItem, onClick }: Props) => {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className="card card-hover group flex h-full w-full flex-col text-left"
      >
        <div className="flex items-start gap-4">
          <Monogram name={projectItem.name} className="h-11 w-11 text-sm" />
          <div className="min-w-0">
            <p className="font-semibold text-ink">{projectItem.name}</p>
            {projectItem.description ? (
              <p className="prose-muted mt-1 line-clamp-3 text-sm">
                {projectItem.description}
              </p>
            ) : null}
          </div>
        </div>

        {projectItem.stack.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {projectItem.stack.map((st) => (
              <TechStackBadge
                key={st}
                text={stackReadableNames[st as TechnologyStack]}
                color={getColorFromStack(st as TechnologyStack) as TBadgeColor}
              />
            ))}
          </div>
        ) : null}

        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
          View details
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </span>
      </button>
    </li>
  );
};
