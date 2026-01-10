export type AppInfo = {
  slug: string;
  name: string;
  description: string;
};

export const applications: AppInfo[] = [
  {
    slug: "series-movie-tracker",
    name: "Series Movie Tracker",
    description:
      "Track TV series and movies, manage watched/next episodes, and get recommendations.",
  },
  {
    slug: "github-ideas-pad",
    name: "GitHub Ideas Pad",
    description:
      "Capture and organize ideas for repositories and projects, ready to action later.",
  },
  {
    slug: "savings-challenge-creator",
    name: "Savings Challenge Creator",
    description:
      "Design savings challenges with flexible schedules and progress tracking.",
  },
  {
    slug: "choral-central",
    name: "Choral Central",
    description:
      "A central place for choral resources, arrangements, and rehearsal planning.",
  },
];

export const appHref = (slug: string) => `/applications/${slug}`;

export const getAppBySlug = (slug: string) =>
  applications.find((a) => a.slug === slug);
