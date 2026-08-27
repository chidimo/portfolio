"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { portfolio_projects, techStacks } from "lib/portfolio";
import type { ProjectNameAndImage } from "types/index";
import { Project } from "components/project";
import Modal from "./Modal";
import { TechStackBadge } from "./tech-stack-badge";
import { techLabel } from "lib/constants";

type Props = {
  projectImages: ProjectNameAndImage[];
};

export const ProjectList = ({ projectImages }: Props) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedStack, setSelectedStack] = useState<string[]>([]);

  const selectedProject = portfolio_projects.find((p) => p.name === selectedId);

  const images = projectImages.find(
    (p) => p.projectName === selectedProject?.screenshotsFolder
  )?.fileData;

  const visible = useMemo(() => {
    if (selectedStack.length === 0) return portfolio_projects;
    return portfolio_projects.filter((p) =>
      selectedStack.some((t) => p.stack.includes(t))
    );
  }, [selectedStack]);

  const toggle = (s: string) =>
    setSelectedStack((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  return (
    <div>
      <p className="label mb-3">Filter by technology</p>
      <div className="mb-6 flex flex-wrap gap-2">
        {techStacks.map((stack) => (
          <TechStackBadge
            key={stack}
            text={techLabel(stack)}
            isSelected={selectedStack.includes(stack)}
            onClick={() => toggle(stack)}
          />
        ))}
        {selectedStack.length > 0 ? (
          <button
            type="button"
            onClick={() => setSelectedStack([])}
            className="more"
          >
            Clear
          </button>
        ) : null}
      </div>

      <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.14em] text-faint">
        {visible.length} of {portfolio_projects.length} entries
      </p>

      <ul className="grid gap-4 sm:auto-rows-fr sm:grid-cols-2">
        {visible.map((projectItem, i) => (
          <Project
            key={projectItem.name}
            index={i}
            projectItem={projectItem}
            onClick={() => setSelectedId(projectItem.name)}
          />
        ))}
      </ul>

      {selectedId && selectedProject ? (
        <Modal
          isOpen={!!selectedId}
          onClose={() => setSelectedId(null)}
          title={selectedProject.name}
          content={
            <div className="space-y-5">
              <p className="text-muted">
                {selectedProject.description || "—"}
              </p>

              {selectedProject.stack?.length ? (
                <div>
                  <p className="label mb-2">Stack</p>
                  <p className="flex flex-wrap gap-x-3 gap-y-1">
                    {selectedProject.stack.map((st) => (
                      <TechStackBadge key={st} text={techLabel(st)} />
                    ))}
                  </p>
                </div>
              ) : null}

              {selectedProject.links?.length ? (
                <div>
                  <p className="label mb-2">Links</p>
                  <ul className="space-y-1">
                    {selectedProject.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="a-link"
                        >
                          {link.name} ↗
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {images?.length ? (
                <div className="space-y-3 border-t border-rule pt-4">
                  {images.map((image) => (
                    <img
                      key={image.imagePublicUrl}
                      src={image.imagePublicUrl}
                      alt=""
                      className="w-full border border-rule"
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
