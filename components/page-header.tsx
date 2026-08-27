import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
};

export const PageHeader = ({ eyebrow, title, intro }: Props) => {
  return (
    <header className="mb-12 border-b border-line pb-8">
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
      {intro ? (
        <p className="prose-muted mt-4 max-w-2xl">{intro}</p>
      ) : null}
    </header>
  );
};
