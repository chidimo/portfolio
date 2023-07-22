"use client";

import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";

import type { Project as ProjectType, Screenshot } from "types/index";
import { SectionHeader } from "./section-header";
import Modal from "./Modal";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

type Props = {
  images: Screenshot[];
  projectItem: ProjectType;
};

export const Project = (props: Props) => {
  const { projectItem, images } = props;

  const [modalOpen, setModalOpen] = useState(false);
  const onCloseModal = () => setModalOpen(false);

  const [selectedProject, setSelectedProject] = useState<ProjectType>(
    {} as ProjectType
  );

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
                <p
                  key={st}
                  className={clsx(
                    { "ml-1": idx !== 0 },
                    "my-1 mr-1",
                    "inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                  )}
                >
                  {st}
                </p>
              );
            })}
          </div>

          <p
            className="flex items-center text-l leading-5 text-gray-500 cursor-pointer mt-5"
            onClick={() => {
              setSelectedProject(projectItem);
              setModalOpen(true);
            }}
          >
            View project information
          </p>
        </div>
      </li>

      <Modal
        title=""
        isOpen={modalOpen}
        onClose={onCloseModal}
        content={
          <div>
            <div className="mb-5">
              <h2 className="mb-2 text-xl font-semibold leading-6 text-gray-900">
                {selectedProject.name}
              </h2>
              <p className="mb-2">{selectedProject.description}</p>

              <p className="mb-2">
                Built with {selectedProject.stack?.join(", ")}
              </p>

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
    </>
  );
};
