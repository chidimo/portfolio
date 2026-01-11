import { LearningPlatform, TechnologyStack } from "types";

export const siteDescription =
  "Welcome to the personal website of Orji Chidi Matthew";

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
  [TechnologyStack.typescript]: "TypeScript",
  [TechnologyStack.arcgisDesktop]: "ArchGIS Desktop",
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

type MetaArgs = {
  title?: string;
};
export const getMetadata = ({ title }: MetaArgs) => {
  const fullTitle = title ? `${title} – Chidi Orji` : "Chidi Orji | My Personal Website";
  return {
    title: fullTitle,
    description: siteDescription,
    keywords: ["Chidi Orji", "Chidi Orji's Portfolio", "Chidi Orji's Website"],
    openGraph: {
      title: fullTitle,
      description: siteDescription,
      type: "website",
      url: "https://chidimo.netlify.app",
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
      canonical: "https://chidimo.netlify.app",
    },
  };
};
