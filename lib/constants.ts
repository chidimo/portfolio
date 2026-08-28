import type { Metadata } from "next";
import { LearningPlatform, TechnologyStack } from "types";

export const siteUrl = "https://chidiorji.com";
export const twitterHandle = "@chidiorji";

/** localStorage key holding the viewer's chosen theme ("light" | "dark"). */
export const THEME_STORAGE_KEY = "chidi-website";

export const siteDescription =
  "Chidi Orji — full-stack ML engineer with an MSc in Artificial Intelligence, building production machine learning systems and the applications around them.";

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
  /** Page title, prefixed onto the brand. Omit for the site default. */
  title?: string;
  /** Page-specific description. Falls back to the site description. */
  description?: string;
  /** Route path, e.g. "/portfolio". Used for canonical + og:url. */
  path?: string;
};

const defaultTitle =
  "Chidi Orji · Full-Stack ML Engineer — MSc Artificial Intelligence";

export const getMetadata = ({
  title,
  description,
  path = "/",
}: MetaArgs): Metadata => {
  const fullTitle = title ? `${title} – Chidi Orji` : defaultTitle;
  const desc = description ?? siteDescription;
  const url = new URL(path, siteUrl).toString();

  return {
    metadataBase: new URL(siteUrl),
    applicationName: "Chidi Orji",
    title: fullTitle,
    description: desc,
    keywords: [
      "Chidi Orji",
      "Full-Stack ML Engineer",
      "Machine Learning Engineer",
      "MSc Artificial Intelligence",
      "University of Salford",
      "NLP",
      "Semantic Search",
      "React",
      "Next.js",
      "Python",
    ],
    authors: [{ name: "Chidi Orji", url: siteUrl }],
    creator: "Chidi Orji",
    publisher: "Chidi Orji",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "Chidi Orji",
      locale: "en_GB",
      url,
      title: fullTitle,
      description: desc,
    },
    twitter: {
      card: "summary_large_image",
      site: twitterHandle,
      creator: twitterHandle,
      title: fullTitle,
      description: desc,
    },
  };
};
