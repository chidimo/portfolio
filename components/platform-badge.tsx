import { LearningPlatform } from "types";
import { platformReadableNames } from "lib/constants";

interface Props {
  platform?: LearningPlatform;
}

export const PlatformBadge = ({ platform }: Props) => {
  if (!platform) return null;
  return (
    <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-faint">
      {platformReadableNames[platform]}
    </span>
  );
};
