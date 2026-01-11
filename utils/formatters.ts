export const getPaddedNumber = (n?: number) => {
  return typeof n === "number" ? String(n).padStart(2, "0") : undefined;
};

export const formatTentative = (iso: string) => {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = d.getDate();
  const suffix = (n: number) => {
    const j = n % 10,
      k = n % 100;
    if (j === 1 && k !== 11) return "st";
    if (j === 2 && k !== 12) return "nd";
    if (j === 3 && k !== 13) return "rd";
    return "th";
  };
  return `${weekdays[d.getDay()]} ${day}${suffix(day)} ${
    months[d.getMonth()]
  }, ${d.getFullYear()}`;
};
