import { myEmail } from "lib/constants";
import { SocialLinks } from "./social-links";

const lead =
  "I'm a full-stack engineer with a frontend focus. I craft responsive, pixel-perfect interfaces that balance aesthetics with performance — grounded in design systems and scalable architecture — and I align engineering decisions with the outcomes a business actually cares about.";

const skills = ["AI", "React", "Next.js", "Node.js", "TypeScript", "Django"];

export const Hero = () => (
  <section className="grid gap-10 md:grid-cols-[1fr_15rem] md:items-start md:gap-14">
    <div>
      <p className="label">Product-Focused Software Engineer</p>
      <h1 className="mt-4 font-serif text-5xl font-bold leading-[1.02] sm:text-6xl">
        Chidi Orji
      </h1>
      <hr className="rule my-7" />

      <p className="dropcap max-w-prose text-[1.15rem] leading-[1.75]">{lead}</p>

      <p className="mt-6 text-muted">{skills.join("  ·  ")}</p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a href={`mailto:${myEmail}`} className="btn btn-fill">
          Get in touch
        </a>
        <a href="/portfolio" className="btn btn-line">
          View work
        </a>
      </div>

      <SocialLinks className="mt-8" />
    </div>

    <figure className="md:pt-2">
      <img
        src="/images/headshot.JPG"
        alt="Chidi Orji"
        className="w-full border border-rule object-cover"
      />
      <figcaption className="mt-2 font-serif text-sm italic text-faint">
        Chidi Orji.
      </figcaption>
    </figure>
  </section>
);
