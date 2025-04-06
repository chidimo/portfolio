"use client";

import clsx from "clsx";
import { BadgeColor, TechnologyStack, type TBadgeColor } from "types";

export const getColorFromStack = (stack: TechnologyStack) => {
  if (!stack) return null;

  let color: unknown = "";

  if (stack === TechnologyStack.reactNative) color = BadgeColor.blue;
  if (stack === TechnologyStack.redux) color = BadgeColor.purple;
  if (stack === TechnologyStack.javascript) color = BadgeColor.yellow;
  if (stack === TechnologyStack.web3) color = BadgeColor.green;
  if (stack === TechnologyStack.nextJs) color = BadgeColor.gray;
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

const getBadgeColor = (color: TBadgeColor) => {
  switch (color) {
    case BadgeColor.gray:
      return "bg-gray-100 text-gray-800 border-gray-400";
    case BadgeColor.red:
      return "bg-red-100 text-red-700 border-red-400";
    case BadgeColor.blue:
      return "bg-blue-100 text-blue-700 border-blue-400";
    case BadgeColor.green:
      return "bg-green-100 text-green-700 border-green-400";
    case BadgeColor.yellow:
      return "bg-yellow-100 text-yellow-800 border-yellow-400";
    case BadgeColor.indigo:
      return "bg-indigo-100 text-indigo-700 border-indigo-400";
    case BadgeColor.purple:
      return "bg-purple-100 text-purple-700 border-purple-400";
    case BadgeColor.pink:
      return "bg-pink-100 text-pink-700 border-pink-400";
    case BadgeColor.solidjsblue:
      return "bg-[#4e88c6]/10 text-[#4e88c6] border-[#4e88c6]";
    case BadgeColor.tailwindcssblue:
      return "bg-[#00b4d8]/10 text-[#00b4d8] border-[#00b4d8]";
    case BadgeColor.typescriptblue:
      return "bg-[#3178C6]/10 text-[#3178C6] border-[#3178C6]";
    case BadgeColor.reactblue:
      return "bg-[#58c4dc]/5 text-[#58c4dc] border-[#58c4dc]";
    case BadgeColor.pythonblue:
      return "bg-[#2d618c]/10 text-[#2d618c] border-[#2d618c]";
    case BadgeColor.drfred:
      return "bg-[#A30000]/10 text-[#A30000] border-[#A30000]";
    case BadgeColor.djangogreen:
      return "bg-[#0b4b33]/10 text-[#0b4b33] border-[#0b4b33]";
    case BadgeColor.mongogreen:
      return "bg-[#00684A]/10 text-[#00684A] border-[#00684A]";
  }
};

interface Props {
  text: string;
  color?: TBadgeColor;
  onClick?: () => void;
  isSelected?: boolean;
}

export const TechStackBadge = (props: Props) => {
  const { text, color = "blue", onClick, isSelected } = props;

  return (
    <button
      type="button"
      onClick={onClick || (() => null)}
      className={clsx(
        "inline-flex w-fit text-center items-center justify-center border rounded-full px-2 py-1 text-xs font-medium whitespace-nowrap",
        onClick ? "cursor-pointer" : "cursor-default",
        getBadgeColor(color)
      )}
      title={text}
    >
      {text}
    </button>
  );
};
