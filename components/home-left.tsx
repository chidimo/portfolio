import Link from "next/link";

import { mySocial } from "lib/social";
import { Social, TBadgeColor } from "types/index";
import { Badge } from "components/badge";

const about = [
  "Experienced full-stack engineer specializing in frontend development, with a track record of delivering bespoke software for the past 6 years. Possessing a strong passion for design, I excel at delivering pixel-perfect UIs with impeccable attention to detail and creating awe-inspiring UX. I am committed to providing exceptional value for your investment and thrive on leveraging technology to fulfill business requirements.",
  "I write tech articles in my spare time and you can find some of my writings on smashingmagazine https://www.smashingmagazine.com/author/chidi-orji/",
  "You can reach me on my personal email at orjichidi95@gmail.com",
];
const myEmail = "orjichidi95@gmail.com";

const techs = [
  { title: "TypeScript/React/Next.js", color: "blue" },
  { title: "Node.js/Express", color: "green" },
  { title: "Python/Django", color: "gray" },
];

export const HomeLeft = () => {
  return (
    <div className="space-y-5">
      <p className="text-4xl font-semibold default-header-text sm:text-6xl">
        Chidi Orji
      </p>
      <p className="text-2xl default-header-text">Software Engineer</p>
      <div className="flex flex-wrap items-center gap-4">
        {techs.map((t) => {
          return (
            <Badge
              key={t.title}
              text={t.title}
              color={t.color as TBadgeColor}
            />
          );
        })}
      </div>

      <p className="text-md leading-8 default-header-text text-opacity-80">
        {about[0]}
      </p>

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
          className="text-md font-semibold leading-6 default-header-text"
        >
          Hire me <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
};
