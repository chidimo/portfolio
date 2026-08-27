/**
 * Best-effort "Mon YYYY" formatting for the loosely-typed date strings in the
 * content files (e.g. "july 29 2020"). Falls back to the raw string.
 */
export const formatMonthYear = (input: string): string => {
  const parsed = new Date(input);
  if (Number.isNaN(parsed.getTime())) return input;
  return parsed.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

export const yearOf = (input: string): string => {
  const parsed = new Date(input);
  if (Number.isNaN(parsed.getTime())) return input;
  return String(parsed.getFullYear());
};
