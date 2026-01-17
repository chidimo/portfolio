export type AppInfo = {
  name: string;
  webUrl?: string;
  playStoreUrl?: string;
  description: string;
};

export const applications: AppInfo[] = [
  {
    name: "Mobile Flashcards",
    // webUrl: "https://popcorn.chidiorji.com/",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.chidimo.mobileflashcards&hl=en_US",
    description:
      "Create and study flashcards on the go with spaced repetition.",
  },
  {
    name: "Series Movie Tracker",
    webUrl: "https://popcorn.chidiorji.com/",
    // playStoreUrl:
    //   "https://play.google.com/store/apps/details?id=com.chidimo.movie-tracker&hl=en_US",
    description:
      "Track TV series and movies, manage watched/next episodes, and get recommendations.",
  },
  {
    name: "GitHub Ideas Pad",
    description:
      "Capture and organize ideas for repositories and projects, ready to action later.",
  },
  {
    name: "Savings Challenge Creator",
    description:
      "Design savings challenges with flexible schedules and progress tracking.",
  },
  {
    name: "Choral Central",
    description:
      "A central place for choral resources, arrangements, and rehearsal planning.",
  },
];
