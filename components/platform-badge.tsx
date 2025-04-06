"use client";

import { BadgeColor, LearningPlatform } from "types";
import { platformReadableNames } from "lib/constants";
import clsx from "clsx";

interface Props {
  platform?: LearningPlatform;
}

export const PlatformBadge = (props: Props) => {
  const { platform } = props;

  if (!platform) return null;

  let color: unknown = "";

  if (platform === LearningPlatform.iversity) color = BadgeColor.green;
  if (platform === LearningPlatform.coursera) color = BadgeColor.blue;
  if (platform === LearningPlatform.udacity) color = BadgeColor.indigo;
  return (
    // <Badge text={platformReadableNames[platform]} color={color as undefined} />

    <button
      type="button"
      className={clsx(
        "inline-flex w-fit text-center items-center justify-center border rounded-full px-2 py-1 text-xs font-medium whitespace-nowrap"
      )}
      title={platformReadableNames[platform]}
    >
      {platformReadableNames[platform]}
    </button>
  );
};
