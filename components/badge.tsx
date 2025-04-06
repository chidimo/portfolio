"use client";

import clsx from "clsx";
import { BadgeColor, type TBadgeColor } from "types";

interface Props {
  text: string;
  color?: TBadgeColor;
  onClick?: () => void;
}

export const Badge = (props: Props) => {
  const { text, color = "blue", onClick } = props;

  return (
    <button
      type="button"
      onClick={onClick || (() => null)}
      className={clsx(
        "inline-flex w-fit text-center items-center justify-center border rounded-full px-2 py-1 text-xs font-medium whitespace-nowrap",
        onClick ? "cursor-pointer" : "cursor-default",
        {
          "bg-gray-100 text-gray-800 border-gray-400":
            color === BadgeColor.gray,
          "bg-red-100 text-red-700 border-red-400": color === BadgeColor.red,
          "bg-blue-100 text-blue-700 border-blue-400":
            color === BadgeColor.blue,
          "bg-green-100 text-green-700 border-green-400":
            color === BadgeColor.green,
          "bg-yellow-100 text-yellow-800 border-yellow-400":
            color === BadgeColor.yellow,
          "bg-indigo-100 text-indigo-700 border-indigo-400":
            color === BadgeColor.indigo,
          "bg-purple-100 text-purple-700 border-purple-400":
            color === BadgeColor.purple,
          "bg-pink-100 text-pink-700 border-pink-400":
            color === BadgeColor.pink,
          "bg-white text-[#4e88c6] border-[#4e88c6]":
            color === BadgeColor.solidjsblue,
          "bg-white text-[#00b4d8] border-[#00b4d8]":
            color === BadgeColor.tailwindcssblue,
          "bg-white text-[#3178C6] border-[#3178C6]":
            color === BadgeColor.typescriptblue,
          "bg-blue-100 text-blue-700/90 border-blue-400":
            color === BadgeColor.reactblue,
          "bg-blue-100 text-blue-700/75 border-blue-400":
            color === BadgeColor.pythonblue,
        }
      )}
    >
      {text}
    </button>
  );
};
