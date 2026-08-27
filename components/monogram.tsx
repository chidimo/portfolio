import { mergeClasses } from "utils/class-merge";

type Props = {
  /** Text to derive initials + colour from (e.g. a name or platform). */
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
    .map((word) => word[0]!.toUpperCase())
    .join("") || "•";

const hueOf = (name: string) => {
  let hash = 0;
  for (let i = 0; i < name.length; i += 1) {
    hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  }
  return hash % 360;
};

/**
 * A deterministic, self-contained avatar. Renders initials on a tinted tile,
 * with the tint derived from the name — no network request.
 */
export const Monogram = ({ name, className }: Props) => {
  const hue = hueOf(name);

  return (
    <span
      aria-hidden="true"
      className={mergeClasses(
        "grid shrink-0 place-items-center rounded-lg border border-line font-semibold text-ink/75 select-none",
        className
      )}
      style={{ backgroundColor: `hsl(${hue} 55% 50% / 0.14)` }}
    >
      {initialsOf(name)}
    </span>
  );
};
