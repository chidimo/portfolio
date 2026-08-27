import { LearningPlatform, TechnologyStack } from "types";

export const siteUrl = "https://chidimo.netlify.app";

export const siteDescription =
  "Chidi Orji — full-stack AI engineer with an MSc in Artificial Intelligence, building production ML systems and the applications around them.";

export const myEmail = "orjichidi95@gmail.com";

export const platformReadableNames = {
  [LearningPlatform.iversity]: "Iversity",
  [LearningPlatform.coursera]: "Coursera",
  [LearningPlatform.udacity]: "Udacity",
};

export const stackReadableNames = {
  [TechnologyStack.reactNative]: "React Native",
  [TechnologyStack.redux]: "Redux",
  [TechnologyStack.javascript]: "JavaScript",
  [TechnologyStack.web3]: "Web3",
  [TechnologyStack.react]: "React",
  [TechnologyStack.nextJs]: "NextJS",
  [TechnologyStack.nodeJs]: "Node.js",
  [TechnologyStack.nx]: "Nx",
  [TechnologyStack.typescript]: "TypeScript",
  [TechnologyStack.arcgisDesktop]: "ArcGIS Desktop",
  [TechnologyStack.mongoDb]: "MongoDB",
  [TechnologyStack.meteorJs]: "MeteorJS",
  [TechnologyStack.python]: "Python",
  [TechnologyStack.django]: "Django",
  [TechnologyStack.bootstrap]: "Bootstrap",
  [TechnologyStack.graphene]: "Graphene",
  [TechnologyStack.apolloClient]: "Apollo Client",
  [TechnologyStack.expressJs]: "ExpressJS",
  [TechnologyStack.html5]: "HTML5",
  [TechnologyStack.css3]: "CSS3",
  [TechnologyStack.djangoRestFramework]: "Django Rest Framework",
  [TechnologyStack.pandas]: "Pandas",
  [TechnologyStack.matplotlib]: "Matplotlib",
  [TechnologyStack.youtubeApiV3]: "YouTube API v3",
  [TechnologyStack.solidJs]: "SolidJS",
  [TechnologyStack.tailwindCSS]: "TailwindCSS",
};

/** Display label for a tech tag: a known enum value gets its readable name, anything else passes through. */
export const techLabel = (tag: string): string =>
  (stackReadableNames as Record<string, string>)[tag] ?? tag;

type MetaArgs = {
  title?: string;
};
export const getMetadata = ({ title }: MetaArgs) => {
  const fullTitle = title
    ? `${title} – Chidi Orji`
    : "Chidi Orji · Full-Stack AI Engineer — MSc Artificial Intelligence";
  return {
    metadataBase: new URL(siteUrl),
    title: fullTitle,
    description: siteDescription,
    keywords: ["Chidi Orji", "Chidi Orji's Portfolio", "Chidi Orji's Website"],
    openGraph: {
      title: fullTitle,
      description: siteDescription,
      type: "website",
      url: siteUrl,
      images: ["/images/headshot.JPG"],
    },
    twitter: {
      title: fullTitle,
      description: siteDescription,
      card: "summary_large_image",
      site: "@chidiorji",
      images: ["/images/headshot.JPG"],
    },
    alternates: {
      canonical: siteUrl,
    },
  };
};
