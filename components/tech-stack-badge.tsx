"use client";

import { mergeClasses } from "utils/class-merge";

interface Props {
  text: string;
  onClick?: () => void;
  isSelected?: boolean;
  className?: string;
}

const base =
  "inline-flex w-fit items-center font-sans text-[11px] font-semibold uppercase tracking-[0.12em]";

export const TechStackBadge = ({
  text,
  onClick,
  isSelected,
  className,
}: Props) => {
  if (!onClick) {
    return (
      <span className={mergeClasses(base, "text-faint", className)}>{text}</span>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={mergeClasses(
        base,
        "border px-2.5 py-1 transition-colors",
        isSelected
          ? "border-accent bg-accent text-accent-ink"
          : "border-rule text-muted hover:border-ink hover:text-ink",
        className
      )}
    >
      {text}
    </button>
  );
};
