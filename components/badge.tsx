import clsx from "clsx";

type Props = {
  text: string;
  onBadgeClick?: () => void;
  containerClassNames?: string;
};

export const Badge = (props: Props) => {
  const { onBadgeClick, text, containerClassNames = "" } = props;
  return (
    <p
      onClick={onBadgeClick}
      className={clsx(
        { "cursor-pointer": onBadgeClick },
        "text-center mt-1 w-fit",
        "inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10",
        containerClassNames,
      )}
    >
      {text}
    </p>
  );
};
