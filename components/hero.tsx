import { myEmail } from "lib/constants";
import { SocialLinks } from "./social-links";

const lead =
  "I'm a full-stack ML engineer with an MSc in Artificial Intelligence (University of Salford), building production machine learning systems and the applications around them. I work end to end — from NLP pipelines and semantic search to the React frontends and Express APIs that put them in front of users — and I care about getting models into production, not just notebooks.";

const skills = [
  "Python",
  "TensorFlow",
  "SBERT",
  "scikit-learn",
  "React",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
];

export const Hero = () => (
  <section className="grid gap-10 md:grid-cols-[1fr_15rem] md:items-start md:gap-14">
    <div>
      <p className="label">Full-Stack ML Engineer</p>
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
