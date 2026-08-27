import type { ReactNode } from "react";

type Props = {
  kicker?: string;
  title: string;
  intro?: ReactNode;
};

/** A magazine section opener. */
export const PageHeader = ({ kicker, title, intro }: Props) => (
  <header className="mb-12">
    {kicker ? <p className="label mb-4">{kicker}</p> : null}
    <h1 className="font-serif text-4xl font-bold leading-[1.05] sm:text-5xl">
      {title}
    </h1>
    <hr className="rule mt-6" />
    {intro ? (
      <p className="mt-6 max-w-prose text-[1.05rem] text-muted">{intro}</p>
    ) : null}
  </header>
);
