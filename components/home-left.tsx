import Link from "next/link";

import { mySocial } from "lib/social";
import type { Social } from "types/index";
// import { ToptalBadge } from "./toptal-badge";

const about = [
  "Experienced full-stack engineer with a frontend focus.",
  "I craft responsive, pixel-perfect UIs that balance aesthetics and performance, with a strong focus on design systems and scalable architecture.",
  "I deliver high ROI through technical depth, cross-functional collaboration, and aligning engineering decisions with business goals.",
];
const myEmail = "orjichidi95@gmail.com";

const techs = [
  { title: "React", className: "text-[#087EA4]" },
  { title: "Next.js", className: "text-[#087EA4]" },
  { title: "Node.js", className: "text-[#1F7A1F]" },
  { title: "Django", className: "text-[#1F4E79]" },
];

export const HomeLeft = () => {
  return (
    <div>
      <div className="space-y-4">
        <div>
          <p className="text-4xl font-bold text-blue-800">Chidi Orji</p>
          <p className="mt-1 text-lg text-blue-700">
            Product-Focused Software Engineer
          </p>
        </div>

        <p className="text-2xl text-blue-800">
          I help teams build scalable web applications that drive engagement and
          conversions.
        </p>
        <p className="">
          {techs.map((tech, i) => (
            <span key={tech.title} className={tech.className}>
              {tech.title}
              {i < techs.length - 1 && (
                <span className="mx-1 text-slate-400">•</span>
              )}
            </span>
          ))}
        </p>
      </div>

      <div className="my-5 h-px w-full bg-slate-200" />

      <div className="space-y-3">
        {about.map((a) => {
          return (
            <p key={a} className="text-md leading-7 text-slate-700">
              {a}
            </p>
          );
        })}
      </div>

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
          className="text-md font-semibold leading-6 text-blue-800"
        >
          Let&apos;s work together <span aria-hidden="true">→</span>
        </a>
      </div>

      {/* <ToptalBadge /> */}
    </div>
  );
};
