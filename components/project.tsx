"use client";

import type { Project as ProjectType, TechnologyStack } from "types/index";
import { TechStackBadge } from "./tech-stack-badge";
import { stackReadableNames } from "lib/constants";

type Props = {
  onClick: () => void;
  projectItem: ProjectType;
  index: number;
};

export const Project = ({ projectItem, onClick, index }: Props) => (
  <li>
    <button
      type="button"
      onClick={onClick}
      className="clip group flex h-full w-full flex-col gap-3 text-left transition-colors hover:border-ink"
    >
      <div className="flex items-baseline gap-3">
        <span className="font-serif text-lg text-faint">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-serif text-lg font-bold leading-snug">
          {projectItem.name}
        </h3>
      </div>

      {projectItem.description ? (
        <p className="line-clamp-3 text-sm text-muted">
          {projectItem.description}
        </p>
      ) : null}

      {projectItem.stack.length ? (
        <p className="flex flex-wrap gap-x-3 gap-y-1">
          {projectItem.stack.map((st) => (
            <TechStackBadge
              key={st}
              text={stackReadableNames[st as TechnologyStack]}
            />
          ))}
        </p>
      ) : null}

      <span className="more mt-auto">
        Read entry <span className="transition-transform group-hover:translate-x-0.5 inline-block">→</span>
      </span>
    </button>
  </li>
);
