/**
 * Best-effort formatting for the loosely-typed date strings in the content
 * files (e.g. "july 29 2020"). Falls back to the raw string.
 */
export const formatMonthYear = (input: string): string => {
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) return input;
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
};

export const yearOf = (input: string): string => {
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) return input;
  return String(d.getFullYear());
};
