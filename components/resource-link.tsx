import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

type Props = {
  href: string;
  title: string;
};

export const ResourceLink = (props: Props) => {
  const { href, title } = props;

  return (
    <p className="mt-3">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-l leading-5 text-gray-500"
      >
        {title}
        <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-1.5" />
      </Link>
    </p>
  );
};
