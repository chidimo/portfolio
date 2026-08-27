import { mergeClasses } from "utils/class-merge";

type Props = {
  name: string;
  className?: string;
};

const initialsOf = (name: string) =>
  name
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("") || "—";

/** A serif initial set in a ruled box, like a printer's ornament. */
export const Monogram = ({ name, className }: Props) => (
  <span
    aria-hidden="true"
    className={mergeClasses(
      "grid shrink-0 place-items-center border border-rule bg-paper font-serif font-bold text-ink/70 select-none",
      className
    )}
  >
    {initialsOf(name)}
  </span>
);
