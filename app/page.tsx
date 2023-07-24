import clsx from "clsx";
import Link from "next/link";

import { mySocial } from "data/social";
import { Social } from "types/index";
import { Badge } from "components/badge";

const about = [
  "Experienced full-stack engineer specializing in frontend development, with a track record of over 5 years. Possessing a strong passion for design, I excel at delivering pixel-perfect UIs with impeccable attention to detail and creating awe-inspiring UX. I am committed to providing exceptional value for your investment and thrive on leveraging technology to fulfill business requirements.",
  "I write tech articles in my spare time and you can find some of my writings on smashingmagazine https://www.smashingmagazine.com/author/chidi-orji/",
  "You can reach me on my personal email at orjichidi95@gmail.com",
];
const myEmail = "orjichidi95@gmail.com";

export default function Page() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-">
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <div className="max-w-2xl tracking-tight lg:col-span-2 xl:col-auto">
            <p className="text-4xl font-bold text-gray-900 sm:text-6xl">
              Chidi Orji
            </p>
            <p className="text-2xl">Software Engineer</p>
            <div className="flex items-center">
              {[
                "React/Next.js (TypeScript)",
                "Node.js/Express",
                "Django/Python",
              ].map((t, idx) => {
                return (
                  <Badge
                    key={t}
                    text={t}
                    containerClassNames={clsx({ "ml-1": idx > 0 })}
                  />
                );
              })}
            </div>
          </div>

          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="text-lg leading-8 text-gray-600">{about[0]}</p>

            <div className="mt-10 flex items-center gap-x-6">
              {mySocial.map((social: Social) => {
                const src = `${social.badgeUrl}&link=${social.socialUrl}`;

                return (
                  <span key={social.title}>
                    <Link
                      passHref
                      href={social.socialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img className="h-[30px]" src={src} alt={social.title} />
                    </Link>
                  </span>
                );
              })}

              <a
                href={`mailto:${myEmail}`}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Hire me <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <img
            src="/images/headshot.JPG"
            alt=""
            className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
          />
        </div>
      </div>
    </div>
  );
}
