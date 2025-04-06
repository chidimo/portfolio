import Link from "next/link";

import { mySocial } from "lib/social";
import type { Social, TBadgeColor } from "types/index";
import { TechStackBadge } from "components/tech-stack-badge";

const about = [
  `
  Experienced full-stack engineer with a frontend focus.
  Known for crafting responsive, pixel-perfect UIs and exceptional user experiences that strikes a fine balance between aesthetics and performance.
  Passionate about design systems and scalable architecture.
  Delivers high ROI through a mix of technical depth, cross-functional collaboration, product thinking, and aligning technical solutions with business goals.
  `,
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
            <TechStackBadge
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
