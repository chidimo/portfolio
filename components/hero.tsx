import { myEmail } from "lib/constants";
import { SocialLinks } from "./social-links";

const summary =
  "I'm a full-stack engineer with a frontend focus. I craft responsive, pixel-perfect interfaces that balance aesthetics with performance — grounded in design systems and scalable architecture — and I align engineering decisions with the outcomes a business actually cares about.";

const techs = ["AI", "React", "Next.js", "Node.js", "TypeScript", "Django"];

export const Hero = () => {
  return (
    <section className="grid animate-fade-up gap-12 md:grid-cols-[1.5fr_1fr] md:items-start">
      <div>
        <p className="eyebrow">Product-Focused Software Engineer</p>
        <h1 className="mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl">
          I help teams build scalable web applications that drive engagement
          and conversions.
        </h1>
        <p className="prose-muted mt-6 max-w-xl">{summary}</p>

        <ul className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-xs text-faint">
          {techs.map((tech, i) => (
            <li key={tech} className="flex items-center gap-2.5">
              <span>{tech}</span>
              {i < techs.length - 1 ? (
                <span className="text-line">/</span>
              ) : null}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={`mailto:${myEmail}`} className="btn btn-primary">
            Get in touch <span aria-hidden="true">→</span>
          </a>
          <a href="/portfolio" className="btn btn-ghost">
            View work
          </a>
        </div>

        <SocialLinks className="mt-8" />
      </div>

      <div className="md:pt-1">
        <img
          src="/images/headshot.JPG"
          alt="Chidi Orji"
          className="aspect-[4/5] w-full max-w-xs rounded-2xl border border-line object-cover md:max-w-none"
        />
      </div>
    </section>
  );
};
