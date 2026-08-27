import { Hero } from "components/hero";
import { SelectedWork } from "components/selected-work";
import { WritingTeaser } from "components/writing-teaser";
import { ToptalBadge } from "components/toptal-badge";

const CASE_STUDY_URL =
  "https://www.toptal.com/case-study/training-app-upgrades-codebase-cost-savings";

const Recognition = () => (
  <section className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
    <div className="flex flex-col items-center gap-8 sm:flex-row">
      <div className="shrink-0">
        <ToptalBadge />
      </div>
      <div className="text-center sm:text-left">
        <p className="eyebrow">Recognition</p>
        <p className="mt-2 text-lg font-semibold text-ink">
          Top 3% engineering talent, vetted by Toptal
        </p>
        <p className="prose-muted mx-auto mt-2 max-w-md sm:mx-0">
          A platform modernization I led — migrating the codebase to an Nx
          monorepo on React&nbsp;19 / Next.js, consolidating deployment and
          cutting hosting costs — is published as a Toptal case study.
        </p>
        <a
          href={CASE_STUDY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="link mt-3 text-sm"
        >
          Read the case study <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </section>
);

export default function Page() {
  return (
    <div className="space-y-20 sm:space-y-24">
      <Hero />
      <Recognition />
      <SelectedWork />
      <WritingTeaser />
    </div>
  );
}
