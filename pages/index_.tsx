import clsx from "clsx";
import Link from "next/link";

import { mySocial } from "data/social";
import { Social } from "types/index";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Chidi Orji
        </h2>
        <p>React and Django Developer</p>

        <div className="w-1/2 py-3">
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
          >
            {[
              "JavaScript",
              "React",
              "Redux",
              "GraphQL",
              "Python",
              "Django",
            ].map((t, id) => {
              return (
                <li
                  key={id}
                  className="bg-gray-200 text-sm px-1 py-1 rounded cursor-pointer flex justify-center items-center"
                >
                  {t}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
        <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
          <img
            src={"/images/headshot.JPG"}
            alt="Chidi Orji"
            className="object-center object-cover group-hover:opacity-75"
          />
        </div>
        <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
          <ul role="list" className="flex flex-col justify-center items-center">
            {mySocial.map((social: Social, idx: number) => {
              const src = `${social.badgeUrl}&link=${social.socialUrl}`;

              return (
                <li key={idx} className="mb-4">
                  <Link
                    passHref
                    href={social.socialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx()}
                  >
                    <img className="h-[30px]" src={src} alt={social.title} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
