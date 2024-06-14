export enum LearningPlatform {
  udacity = "Udacity",
  coursera = "Coursera",
  iversity = "Iversity",
}

export enum TechnologyStack {
  reactNative = "React Native",
  redux = "Redux",
  javascript = "JavaScript",
  web3 = "Web3",
  react = "React",
  nextJs = "Next.js",
  typescript = "Typescript",
  arcgisDesktop = "ArcGIS Desktop",
  mongoDb = "MongoDB",
  meteorJs = "MeteorJS",
  python = "Python",
  django = "Django",
  bootstrap = "bootstrap",
  graphene = "Graphene",
  apolloClient = "ApolloClient",
  expressJs = "Express.js",
  html5 = "HTML5",
  css3 = "CSS3",
  djangoRestFramework = "DjangoRestFramework",
  pandas = "Pandas",
  matplotlib = "Matplotlib",
  youtubeApiV3 = "YouTube API v3",
}

export interface Certificate {
  id: string;
  relevance: number;
  platform: LearningPlatform;
  title: string;
  about: string;
  certificate_url: string;
}

export interface Project {
  name: string;
  description: string;
  stack: TechnologyStack[];
  screenshotsFolder: string;
  links: {
    name: string;
    url: string;
  }[];
}

export interface Publication {
  title: string;
  platform: string;
  pub_date: string;
  link: string;
}

export interface Screenshot {
  width: number;
  height: number;
  filename: string;
  imagePublicUrl: string;
  imageFullPath: string;
}

export interface ProjectNameAndImage {
  projectName: string;
  fileData: Screenshot[];
}

export interface Social {
  title: string;
  socialUrl: string;
  badgeUrl: string;
}

export enum BadgeColor {
  gray = "gray",
  red = "red",
  blue = "blue",
  green = "green",
  yellow = "yellow",
  indigo = "indigo",
  purple = "purple",
  pink = "pink",
}
export type TBadgeColor = keyof typeof BadgeColor
