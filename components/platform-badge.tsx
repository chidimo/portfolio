'use client'

import { BadgeColor, LearningPlatform } from "types";
import { Badge } from "./badge";
import { platformReadableNames } from "lib/constants";

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
    <Badge text={platformReadableNames[platform]} color={color as undefined} />
  );
};
