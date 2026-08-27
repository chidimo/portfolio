"use client";

import { BadgeColor, TechnologyStack, type TBadgeColor } from "types";
import { mergeClasses } from "utils/class-merge";

export const getColorFromStack = (stack: TechnologyStack) => {
  if (!stack) return null;

  let color: unknown = "";

  if (stack === TechnologyStack.reactNative) color = BadgeColor.blue;
  if (stack === TechnologyStack.redux) color = BadgeColor.purple;
  if (stack === TechnologyStack.javascript) color = BadgeColor.yellow;
  if (stack === TechnologyStack.web3) color = BadgeColor.green;
  if (stack === TechnologyStack.nextJs) color = BadgeColor.gray;
  if (stack === TechnologyStack.nodeJs) color = BadgeColor.green;
  if (stack === TechnologyStack.nx) color = BadgeColor.indigo;
  if (stack === TechnologyStack.arcgisDesktop) color = BadgeColor.blue;
  if (stack === TechnologyStack.meteorJs) color = BadgeColor.indigo;
  if (stack === TechnologyStack.bootstrap) color = BadgeColor.purple;
  if (stack === TechnologyStack.graphene) color = BadgeColor.blue;
  if (stack === TechnologyStack.apolloClient) color = BadgeColor.gray;
  if (stack === TechnologyStack.expressJs) color = BadgeColor.gray;
  if (stack === TechnologyStack.html5) color = BadgeColor.purple;
  if (stack === TechnologyStack.css3) color = BadgeColor.purple;
  if (stack === TechnologyStack.pandas) color = BadgeColor.blue;
  if (stack === TechnologyStack.matplotlib) color = BadgeColor.blue;
  if (stack === TechnologyStack.youtubeApiV3) color = BadgeColor.red;

  if (stack === TechnologyStack.mongoDb) color = BadgeColor.mongogreen;
  if (stack === TechnologyStack.django) color = BadgeColor.djangogreen;
  if (stack === TechnologyStack.react) color = BadgeColor.reactblue;
  if (stack === TechnologyStack.typescript) color = BadgeColor.typescriptblue;
  if (stack === TechnologyStack.python) color = BadgeColor.pythonblue;
  if (stack === TechnologyStack.djangoRestFramework) color = BadgeColor.drfred;
  if (stack === TechnologyStack.solidJs) color = BadgeColor.solidjsblue;
  if (stack === TechnologyStack.tailwindCSS) color = BadgeColor.tailwindcssblue;
  return color;
};

const dotColor = (color: TBadgeColor) => {
  switch (color) {
    case BadgeColor.gray:
      return "text-stone-500 dark:text-stone-300";
    case BadgeColor.red:
      return "text-red-600 dark:text-red-400";
    case BadgeColor.blue:
      return "text-blue-600 dark:text-blue-400";
    case BadgeColor.green:
      return "text-emerald-600 dark:text-emerald-400";
    case BadgeColor.yellow:
      return "text-amber-600 dark:text-amber-400";
    case BadgeColor.indigo:
      return "text-indigo-600 dark:text-indigo-400";
    case BadgeColor.purple:
      return "text-purple-600 dark:text-purple-400";
    case BadgeColor.pink:
      return "text-pink-600 dark:text-pink-400";
    case BadgeColor.solidjsblue:
      return "text-[#4e88c6]";
    case BadgeColor.tailwindcssblue:
      return "text-[#0ca5c9]";
    case BadgeColor.typescriptblue:
      return "text-[#3178C6] dark:text-[#6ea9e6]";
    case BadgeColor.reactblue:
      return "text-[#3f9fb5] dark:text-[#58c4dc]";
    case BadgeColor.pythonblue:
      return "text-[#2d618c] dark:text-[#6fa8cf]";
    case BadgeColor.drfred:
      return "text-[#A30000] dark:text-[#e07a7a]";
    case BadgeColor.djangogreen:
      return "text-[#0b7a53] dark:text-[#5fae8f]";
    case BadgeColor.mongogreen:
      return "text-[#00684A] dark:text-[#4fb894]";
    default:
      return "text-muted";
  }
};

interface Props {
  text: string;
  color?: TBadgeColor;
  onClick?: () => void;
  isSelected?: boolean;
  className?: string;
}

export const TechStackBadge = ({
  text,
  color = "blue",
  onClick,
  isSelected,
  className,
}: Props) => {
  const classes = mergeClasses(
    "inline-flex w-fit items-center gap-1.5 rounded-md border px-2 py-1 text-xs font-medium whitespace-nowrap transition-colors",
    isSelected
      ? "border-accent bg-accent/10 text-accent"
      : "border-line bg-surface text-muted",
    onClick ? "cursor-pointer hover:border-accent/50 hover:text-ink" : "",
    className
  );

  const inner = (
    <>
      <span
        aria-hidden="true"
        className={mergeClasses(
          "h-1.5 w-1.5 rounded-full bg-current",
          isSelected ? "text-accent" : dotColor(color)
        )}
      />
      {text}
    </>
  );

  if (!onClick) {
    return (
      <span className={classes} title={text}>
        {inner}
      </span>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} title={text}>
      {inner}
    </button>
  );
};
