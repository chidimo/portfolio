import { LearningPlatform } from "types";
import { platformReadableNames } from "lib/constants";

interface Props {
  platform?: LearningPlatform;
}

export const PlatformBadge = ({ platform }: Props) => {
  if (!platform) return null;

  return (
    <span className="inline-flex w-fit items-center rounded-full border border-line bg-surface px-2.5 py-0.5 text-xs font-medium text-muted">
      {platformReadableNames[platform]}
    </span>
  );
};
