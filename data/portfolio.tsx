import { appendFile } from "fs";
import { Project } from "types/index";

export const portfolio_projects: Project[] = [
  {
    title: "Bluelines",
    stack: [
      "React",
      "Redux",
      "ApolloClient",
      "Python",
      "Django",
      "Graphene",
      "GraphQL",
    ],
    links: [
      {
        name: "Android app",
        url: "https://play.google.com/store/apps/details?id=com.bluelines",
      },
      {
        name: "Homepage",
        url: "https://bluelines.io",
      },
      {
        name: "Example organization",
        url: "https://fabsjewelry.bluelines.io/",
      },
    ],
    screenshotsFolder: "bluelines",
    description:
      "Bluelines is a business management solution for SMEs. Bluelines abstracts away the boring paperwork carried out by business owners on a daily basis, allowing them to focus on growing their business.",
  },
  {
    title: "Identify",
    stack: ["React", "Redux"],
    links: [
      {
        name: "Homepage",
        url: "https://beta.identify.softcom.xyz/",
      },
    ],
    screenshotsFolder: "identify",
    description:
      "Identify is a product of Softcom, which is used to control time and access to buildings, offices and apartments. With Identify, organizations can create, authorize and share digital identity cards.",
  },
  {
    title: "Koya Schools",
    stack: ["React", "Redux"],
    links: [
      {
        name: "Homepage",
        url: "https://koya.co/",
      },
    ],
    screenshotsFolder: "koya",
    description:
      "Softcom Learning Management System (SLMS), aka Koya, is a learning management system for schools and organizations.",
  },
  {
    title: "Egbe Igwe",
    stack: ["React", "Redux"],
    links: [
      {
        name: "Homepage",
        url: "https://weather-ten-amber.vercel.app/",
      },
    ],
    screenshotsFolder: "egbe",
    description:
      "A minimal weather app showing current weather conditions of various cities. Also uses Geolocation to get the current user’s location weather information.",
  },
  {
    title: "test x",
    stack: ["React-Native", "Redux"],
    links: [],
    screenshotsFolder: "testx",
    description:
      "I built the Android app for the testX platform owned by Traindemy. The app is being developed as the educational testing platform of the 21st century, to be used remotely. I am the mobile Lead developer, both for Android and iOS, using React Native. The app and its sister site helped the team secure a $5,000 of AWS credit in a startup fare.",
  },
  {
    title: "quick credit",
    stack: ["ExpressJS", "HTML5", "MeteorJS", "CSS3", "JavaScript"],
    links: [
      {
        name: "Homepage",
        url: "https://chidimo.github.io/Quick-Credit/UI/index.html",
      },
      {
        name: "On Github",
        url: "https://github.com/chidimo/Quick-Credit",
      },
      { name: "API Doc", url: "https://qcredit.docs.apiary.io/" },
    ],
    screenshotsFolder: "qcredit",
    description:
      "Quick Credit is an online lending platform that provides short term soft loans to individuals. This helps solve problems of financial inclusion as a way to alleviate poverty and empower low income earners.",
  },
  {
    title: "Ethodoxy",
    stack: ["DjangoRestFramework", "Django", "React"],
    links: [
      {
        name: "Homepage",
        url: "http://chidimo.github.io/Ethodoxy/",
      },
      { name: "On Github", url: "https://github.com/chidimo/Ethodoxy" },
    ],
    screenshotsFolder: "ethodoxy",
    description:
      "The name is a short form for Electronic Orthodoxy. The current database features the Douay-Rheims version of the bible and the Challoner commentary. The app exposes a set of API endpoints, and the frontend app consumes these endpoints. These are still works in progress.",
  },
  {
    title: "react-drag-drop-browser",
    stack: ["React"],
    links: [
      {
        name: "Demo",
        url: "https://codesandbox.io/s/react-drag-and-drop-fs06e",
      },
      {
        name: "NPM Package URL",
        url: "https://www.npmjs.com/package/react-drag-drop-browser",
      },
      {
        name: "On Github",
        url: "https://github.com/chidimo/react-drag-drop-browser",
      },
    ],
    screenshotsFolder: "dragNdrop",
    description:
      "Simple, customizable React drag and drop component. Also comes with a file browser. It is highly configurable in terms of styling. Do checkout the docs on the Github repo.",
  },
  {
    title: "My Reads",
    stack: ["React", "Redux"],
    links: [
      {
        name: "Homepage",
        url: "https://react-shelf.herokuapp.com",
      },
      { name: "On Github", url: "https://github.com/chidimo/My-Reads" },
    ],
    screenshotsFolder: "myread",
    description:
      "A simple book tracking app which I built as part of my React nanodegree program with Udacity.",
  },
  {
    title: "Would You Rather",
    stack: ["React"],
    links: [
      {
        name: "Homepage",
        url: "https://wud-u-rada.herokuapp.com/",
      },
      {
        name: "On Github",
        url: "https://github.com/chidimo/Would-You-Rather",
      },
    ],
    screenshotsFolder: "wudURada",
    description:
      "A would you rather game I built as part of my React nanodegree program at Udacity. Game description is available in the repo.",
  },
  {
    title: "Url shortener",
    stack: ["React", "MeteorJS", "MongoDB"],
    description: "URL shortening service with automatic redirects.",
    screenshotsFolder: "urlShortener",
    links: [
      {
        name: "Homepage",
        url: "https://basic-url-shortener.herokuapp.com",
      },
      { name: "On Github", url: "https://github.com/chidimo/Url-Shortener" },
    ],
  },
  {
    title: "Mobile Flashcards",
    stack: ["React-Native", "Redux"],
    description: "A flashcard app for iOS and Android",
    screenshotsFolder: "",
    links: [
      {
        name: "On Github",
        url: "https://github.com/chidimo/Mobile-Flashcards",
      },
    ],
  },
  {
    title: "Currency Analyzer",
    stack: ["MeteorJS", "React"],
    description: "A currency counting app. Available for web and mobile",
    screenshotsFolder: "",
    links: [],
  },
  {
    title: "choral central",
    stack: ["Django"],
    description:
      "The app is a place for sharing choral music sheets and midi files.",
    screenshotsFolder: "",
    links: [],
  },
  {
    title: "voidcoin",
    stack: ["Python", "Django", "bootstrap"],
    links: [
      {
        name: "Homepage",
        url: "http://voidcoin.herokuapp.com/",
      },
      { name: "On Github", url: "https://github.com/chidimo/voidcoin" },
    ],
    screenshotsFolder: "voidcoin",
    description: "A simple blockchain implementation in Python",
  },
  {
    title: "YouTube and Drive API v3",
    stack: ["Django", "YouTube API v3"],
    description:
      "Request YouTube and/or Google Drive access from within a Django web app",
    screenshotsFolder: "",
    links: [
      {
        name: "On Github",
        url: "https://github.com/chidimo/youtube-drive-api-v3-django",
      },
    ],
  },
  {
    title: "Python-git",
    stack: ["Python"],
    links: [
      {
        name: "On Github",
        url: "https://github.com/chidimo/python-git",
      },
    ],
    screenshotsFolder: "pygit",
    description:
      "This project aims to control git.exe with Python subprocess module.",
  },
  {
    title: "Hack nairaland",
    stack: ["Python"],
    links: [
      {
        name: "On Github",
        url: "https://github.com/chidimo/hack-nairaland",
      },
    ],
    screenshotsFolder: "nairaland",
    description:
      "An exercise in webscraping using nairaland.com as a case study",
  },
  {
    title: "Pywebber",
    stack: ["Python"],
    links: [
      {
        name: "On Github",
        url: "https://github.com/chidimo/pywebber",
      },
    ],
    screenshotsFolder: "",
    description: "Web development tools written in Python",
  },
  {
    title: "Line of Balance",
    stack: ["Python", "Pandas", "Matplotlib"],
    links: [
      {
        name: "On Github",
        url: "https://github.com/chidimo/line_of_balance",
      },
      {
        name: "Sample plot",
        url: "https://github.com/chidimo/line_of_balance/blob/master/graph.pdf",
      },
    ],
    screenshotsFolder: "lob",
    description:
      "Plotting a line of balance plot/curve (in project management) using Matplotlib",
  },
  {
    title: "Olympic medals",
    stack: ["Python", "Pandas"],
    links: [
      {
        name: "Jupyter Notebook",
        url: "https://github.com/chidimo/ds/blob/master/coursera_pandas/Week%202%20solution.ipynb",
      },
    ],
    screenshotsFolder: "olympics",
    description: "Analysing olympic gold medals from a wikipedia dataset",
  },
  {
    title: "Energy and GDP",
    stack: ["Python", "Pandas"],
    links: [
      {
        name: "Jupyter Notebook",
        url: "https://github.com/chidimo/ds/blob/master/coursera_pandas/Week%203%20solution.ipynb",
      },
    ],
    screenshotsFolder: "energyAndGdp",
    description: "Analysing energy and GDP data of various countries",
  },
  {
    title: "Hypothesis testing",
    stack: ["Python", "Pandas"],
    links: [
      {
        name: "Jupyter Notebook",
        url: "https://github.com/chidimo/ds/blob/master/coursera_pandas/Week%204%20solution.ipynb",
      },
    ],
    screenshotsFolder: "hypothesis",
    description: "Testing a hypothesis via data analysis",
  },
  {
    title: "GDP and Inflation by year",
    stack: ["Python", "Pandas", "Matplotlib"],
    links: [
      {
        name: "Plot image(pdf)",
        url: "https://github.com/chidimo/ds/blob/master/coursera_matplotlib/output/comparing_gdp_inflation.pdf",
      },
      {
        name: "Plot image(png)",
        url: "https://github.com/chidimo/ds/blob/master/coursera_matplotlib/output/comparing_gdp_inflation.png",
      },
      {
        name: "Jupyter Notebook",
        url: "https://github.com/chidimo/ds/blob/master/coursera_matplotlib/Week4_solution.ipynb",
      },
    ],
    screenshotsFolder: "gdpAndInflation",
    description:
      "Variation of GDP and Inflation rate of Nigeria and UAE between 2005 and 2016",
  },
  {
    title: "Temperature highs and lows",
    stack: ["Python", "Pandas", "Matplotlib"],
    links: [
      {
        name: "Plot image(pdf)",
        url: "https://github.com/chidimo/ds/blob/master/coursera_matplotlib/output/Temperature_Abu_Dhabi.pdf",
      },
      {
        name: "Plot image(png)",
        url: "https://github.com/chidimo/ds/blob/master/coursera_matplotlib/output/Temperature_Abu_Dhabi.png",
      },
      {
        name: "Jupyter Notebook",
        url: "https://github.com/chidimo/ds/blob/master/coursera_matplotlib/Week2_solution.ipynb",
      },
    ],
    screenshotsFolder: "tempHigh",
    description:
      "Plotting temperature highs and lows for every calendar day of the year in Abu Dhabi, UAE for the ten-year period, 2005 and 2014",
  },
  {
    title: "Visualization of probabilistic data",
    stack: [],
    links: [
      {
        name: "Jupyter Notebook",
        url: "https://github.com/chidimo/ds/blob/master/coursera_matplotlib/Week3_solution.ipynb",
      },
    ],
    screenshotsFolder: "dataVisualization",
    description:
      "Building a custom visualization from probabilistic data generated through samples in Matplotlib",
  },
  {
    title: "Visualizing voting pattern",
    stack: ["ArcGIS Desktop"],
    links: [
      {
        name: "Plot image(pdf)",
        url: "https://s3.amazonaws.com/coursera-uploads/peer-review/hESqA3EhEeWIfhKr_WcYsQ/514eb4ec558f3dea849094aec6a5eec0/California_Counties_Prop37_2012_Voting_Patterns.pdf",
      },
    ],
    screenshotsFolder: "voting",
    description:
      'The "yes" vote patterns in California Counties on Proposition 37 in 2012',
  },
  {
    title: "Moving Valmeyer",
    stack: ["ArcGIS Desktop"],
    links: [
      {
        name: "Homepage",
        url: "http://arcg.is/2cPzy9r",
      },
    ],
    screenshotsFolder: "valmeyer",
    description: "Map showing the location of the new and old Valmeyer towns",
  },
  {
    title: "Visualizing ozone concentrations",
    stack: ["ArcGIS Desktop"],
    links: [
      {
        name: "Plot image(pdf)",
        url: "https://s3.amazonaws.com/coursera-uploads/peer-review/zs3YSHQ6EeWrAxJQXw-8PQ/debaf9f5b41d0fe5707f52283be9ea8c/Ozone_Concentrations.pdf",
      },
    ],
    screenshotsFolder: "ozone",
    description:
      "Map of Hourly Average Ozone Concentrations around California in 2010-2011",
  },
];

let techStacks: string[] = [];
portfolio_projects.forEach((entry: Project) => {
  entry.stack.forEach((ent: string) => {
    if (!techStacks.includes(ent)) {
      techStacks.push(ent);
    }
  });
});

export { techStacks };

export const imageDirectories = portfolio_projects
  .map((mp) => mp.screenshotsFolder)
  .filter((ff) => ff !== "");
