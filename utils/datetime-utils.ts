export const isWithinDays = (iso?: string, days = 3) => {
  if (!iso) return false;
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return false;
  const diff = t - Date.now();
  return diff >= 0 && diff <= days * 24 * 60 * 60 * 1000;
};
