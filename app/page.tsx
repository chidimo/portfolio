import { Hero } from "components/hero";
import { SelectedWork } from "components/selected-work";
import { WritingTeaser } from "components/writing-teaser";
import { ToptalBadge } from "components/toptal-badge";

const CASE_STUDY_URL =
  "https://www.toptal.com/case-study/training-app-upgrades-codebase-cost-savings";

const Recognition = () => (
  <section>
    <h2 className="font-serif text-2xl font-bold sm:text-3xl">Recognition</h2>
    <hr className="rule mt-4" />
    <div className="mt-6 flex flex-col gap-8 sm:flex-row sm:items-center">
      <div className="shrink-0">
        <ToptalBadge />
      </div>
      <div className="max-w-prose">
        <p className="font-serif text-lg font-bold">
          Top 3% engineering talent, vetted by Toptal
        </p>
        <p className="mt-2 text-muted">
          For a niche dog-training platform, I rebuilt the interface, made it
          fully responsive, and shipped a sponsorship feature that opened an
          advertising revenue stream — then restructured the codebase into an
          Nx monorepo on React&nbsp;19 and Next.js, consolidating front- and
          back-end deployment to cut hosting costs. Toptal published the work
          as a case study.
        </p>
        <a
          href={CASE_STUDY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="more mt-3 inline-block"
        >
          Read the case study →
        </a>
      </div>
    </div>
  </section>
);

export default function Page() {
  return (
    <div className="space-y-16 sm:space-y-20">
      <Hero />
      <Recognition />
      <SelectedWork />
      <WritingTeaser />
    </div>
  );
}
