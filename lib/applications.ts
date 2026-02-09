export type AppInfo = {
  name: string;
  webUrl?: string;
  playStoreUrl?: string;
  vsCode?: string;
  openVsx?: string;
  description: string;
};

export const applications: AppInfo[] = [
  {
    name: "Mobile Flashcards",
    // webUrl: "https://flashcards.chidiorji.com/",
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
    name: "Scratch (Gists)",
    webUrl: "https://scratch.chidiorji.com/",
    vsCode:
      "https://marketplace.visualstudio.com/items?itemName=chidimo.scratch",
    openVsx: "https://open-vsx.org/extension/chidimo/scratch",
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
