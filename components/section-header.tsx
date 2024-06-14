"use client";

import clsx from "clsx";

type Props = {
  title: string;
  description?: string;
  imageURl: string;
};

export const SectionHeader = (props: Props) => {
  const { title, description, imageURl } = props;

  return (
    <div className="flex gap-x-4">
      <img
        className="h-12 w-12 flex-none rounded-md bg-gray-50"
        src={imageURl}
        alt=""
      />
      <div className={clsx({ "flex items-center": !description })}>
        <p className="text-xl font-semibold leading-6 default-header-text">{title}</p>
        {description && (
          <p className="mt-1 text-sm flex leading-5 default-body-text">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
