import { type Project, TechnologyStack } from "types/index";

const portfolio_projects: Project[] = [
  {
    name: "Concord — Expert Matching Platform",
    stack: [
      TechnologyStack.python,
      "FastAPI",
      "SBERT",
      "TF-IDF",
      TechnologyStack.react,
      TechnologyStack.typescript,
      TechnologyStack.expressJs,
      "PostgreSQL",
      "Kysely",
      TechnologyStack.nx,
    ],
    screenshotsFolder: "",
    description:
      "Production platform for The College Collective, a UK Further Education peer-support network, replacing a manual spreadsheet workflow. Matches college Senior Leads with industry experts across 37 capability areas using a three-signal ranker — SBERT (all-MiniLM-L6-v2) embeddings, TF-IDF cosine similarity, and categorical overlap — served from a FastAPI microservice behind a React / Express / PostgreSQL Nx monorepo. Built and maintained as the sole engineer.",
    links: [{ name: "Live app", url: "https://app.collegecollective.co.uk" }],
  },
  {
    name: "Intelligent Matching System (MSc Dissertation)",
    stack: [
      TechnologyStack.python,
      "Sentence-BERT",
      "SBERT",
      "TF-IDF",
      "scikit-learn",
      "NLP",
      TechnologyStack.pandas,
    ],
    screenshotsFolder: "",
    description:
      "MSc Artificial Intelligence dissertation (University of Salford). Research and prototype automating the candidate-identification stage of the College Collective's expert matching. Combines categorical overlap over a 37-label taxonomy, TF-IDF cosine similarity, and Sentence-BERT embeddings into one ranked list, evaluated against 320 historical matching decisions. Achieved Precision@10 of 48.44% and MRR of 0.186, alongside a documented audit of five sequential evaluation-integrity bugs with before/after metrics for each.",
    links: [],
  },
  {
    name: "Sentiment Classification — Nigerian Pidgin English",
    stack: [
      TechnologyStack.python,
      "TensorFlow",
      "NLP",
      "scikit-learn",
      TechnologyStack.pandas,
    ],
    screenshotsFolder: "",
    description:
      "NLP module project (MSc AI, University of Salford). Compared three TensorFlow embedding strategies — a trainable token embedding, NNLM-50, and NNLM-128 with normalisation — for 3-class sentiment on the NaijaSenti Pidgin English corpus (10,556 tweets), handling class imbalance with class weights and stratified splits. The trainable embedding learned from the target corpus won (weighted F1 0.72) over both pre-trained NNLMs, showing that domain-specific embeddings beat general-purpose ones for low-resource creole text.",
    links: [],
  },
  {
    name: "Topic Modelling — Global AI News Coverage",
    stack: [
      TechnologyStack.python,
      "scikit-learn",
      "NLP",
      "Topic Modelling",
      "LDA",
      "NMF",
    ],
    screenshotsFolder: "",
    description:
      "NLP module project (MSc AI, University of Salford). Applied LDA and NMF to a self-collected corpus of global AI news, using grid search over coherence (LDA) and reconstruction error (NMF) to choose K. Both models converged on 10 consistent themes — cross-model validation — with NMF producing sharper, more lexically distinct topics and running far faster, while LDA's probabilistic outputs suit downstream routing. LDA coherence 0.5273; NMF reconstruction error 28.70.",
    links: [],
  },
  {
    name: "Plastic Classification — MobileNetV2 vs InceptionV3",
    stack: [
      TechnologyStack.python,
      "TensorFlow",
      "Keras",
      "Transfer Learning",
      "MobileNetV2",
      "InceptionV3",
    ],
    screenshotsFolder: "",
    description:
      "Deep Learning module project (MSc AI, University of Salford). Fine-tuned MobileNetV2 and InceptionV3 on a small self-collected image dataset (163 train / 71 validation) to classify HDPE against PET. MobileNetV2 outperformed InceptionV3 on precision, recall, and F1 for both classes; both reached at least 80% training accuracy after fine-tuning. The report analyses why the task is hard — plastics differ mainly by texture and transparency — and proposes concrete data-collection changes. Companion project to the YOLO detection study.",
    links: [],
  },
  {
    name: "Plastic Object Detection — YOLOv8 vs YOLOv9",
    stack: [
      TechnologyStack.python,
      "YOLOv8",
      "YOLOv9",
      "Object Detection",
    ],
    screenshotsFolder: "",
    description:
      "Deep Learning module project (MSc AI, University of Salford). Trained and compared YOLOv8 and YOLOv9 (50 epochs) on a self-annotated dataset for HDPE, PET, and PP bounding-box detection. YOLOv8 was the more conservative, higher-precision model (mAP@0.5 0.3364, precision 0.5964) versus YOLOv9's noisier output (mAP@0.5 0.2669); confusion-matrix analysis pinned PET/PP confusion and background misclassification as a shared data-quality issue. YOLOv8 recommended for production. Companion project to the transfer-learning classification study.",
    links: [],
  },
  {
    name: "Field Trial Training Platform",
    stack: [
      TechnologyStack.react,
      TechnologyStack.nextJs,
      TechnologyStack.nodeJs,
      TechnologyStack.typescript,
      TechnologyStack.nx,
    ],
    screenshotsFolder: "",
    description:
      "Modernization of a niche canine field-trial training platform: redesigned the UI, added mobile responsiveness, and built a sponsorship feature to open a new revenue stream. Migrated the codebase to an Nx monorepo on React 19 / Next.js, consolidating front- and back-end deployment and cutting hosting costs. Featured as a Toptal case study.",
    links: [
      {
        name: "Toptal case study",
        url: "https://www.toptal.com/case-study/training-app-upgrades-codebase-cost-savings",
      },
    ],
  },
  {
    name: "TeachShare",
    stack: [TechnologyStack.solidJs, TechnologyStack.tailwindCSS],
    screenshotsFolder: "teachshare",
    description: "The world’s largest platform for Personalized Learning",
    links: [{ name: "Home page", url: "https://www.teachshare.com/" }],
  },
  {
    name: "My portfolio",
    stack: [
      TechnologyStack.react,
      TechnologyStack.typescript,
      TechnologyStack.nextJs,
    ],
    links: [{ name: "Home page", url: "https://chidimo.netlify.app" }],
    screenshotsFolder: "port",
    description: "My portfolio site",
  },
  {
    name: "Autumn AI",
    stack: [
      TechnologyStack.react,
      TechnologyStack.typescript,
      TechnologyStack.nextJs,
    ],
    links: [{ name: "Home page", url: "https://getautumn.com" }],
    description:
      "Autumn AI is an early-stage startup based in Canada working on the future of preventative mental healthcare",
    screenshotsFolder: "autumn",
  },
  {
    name: "Bluelines",
    stack: [
      TechnologyStack.react,
      TechnologyStack.typescript,
      TechnologyStack.apolloClient,
      TechnologyStack.python,
      TechnologyStack.django,
      TechnologyStack.graphene,
    ],
    links: [
      {
        name: "Home page",
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
    name: "Identify",
    stack: [
      TechnologyStack.react,
      TechnologyStack.redux,
      TechnologyStack.typescript,
    ],
    links: [
      {
        name: "Home page",
        url: "https://softcom.xyz/usepass",
      },
    ],
    screenshotsFolder: "identify",
    description:
      "Identify is a product of Softcom, which is used to control time and access to buildings, offices and apartments. With Identify, organizations can create, authorize and share digital identity cards.",
  },
  {
    name: "Koya Schools",
    stack: [
      TechnologyStack.react,
      TechnologyStack.redux,
      TechnologyStack.javascript,
    ],
    links: [
      {
        name: "Home page",
        url: "https://koya.co/",
      },
    ],
    screenshotsFolder: "koya",
    description:
      "Softcom Learning Management System (SLMS), aka Koya, is a learning management system for schools and organizations.",
  },
  {
    name: "Egbe Igwe",
    stack: [
      TechnologyStack.react,
      TechnologyStack.redux,
      TechnologyStack.javascript,
    ],
    links: [
      {
        name: "Home page",
        url: "https://weather-ten-amber.vercel.app/",
      },
    ],
    screenshotsFolder: "egbe",
    description:
      "A minimal weather app showing current weather conditions of various cities. Also uses Geolocation to get the current user’s location weather information.",
  },
  {
    name: "Mobile Flashcards",
    stack: [
      TechnologyStack.react,
      TechnologyStack.reactNative,
      TechnologyStack.typescript,
    ],
    description: "A flashcard app for iOS and Android",
    screenshotsFolder: "",
    links: [
      {
        name: "Google Playstore",
        url: "https://play.google.com/store/apps/details?id=com.chidimo.mobileflashcards&pcampaignid=web_share",
      },
      {
        name: "Github page",
        url: "https://github.com/chidimo/Mobile-Flashcards",
      },
    ],
  },
  {
    name: "Test x",
    stack: [
      TechnologyStack.reactNative,
      TechnologyStack.redux,
      TechnologyStack.javascript,
    ],
    links: [],
    screenshotsFolder: "testx",
    description:
      "I built the Android app for the testX platform owned by Traindemy. The app is being developed as the educational testing platform of the 21st century, to be used remotely. I am the mobile Lead developer, both for Android and iOS, using React Native. The app and its sister site helped the team secure a $5,000 of AWS credit in a startup fare.",
  },
  {
    name: "Quick Credit",
    stack: [
      TechnologyStack.expressJs,
      TechnologyStack.html5,
      TechnologyStack.css3,
      TechnologyStack.javascript,
    ],
    links: [
      {
        name: "Home page",
        url: "https://chidimo.github.io/Quick-Credit/UI/index.html",
      },
      {
        name: "Github page",
        url: "https://github.com/chidimo/Quick-Credit",
      },
      { name: "API Doc", url: "https://qcredit.docs.apiary.io/" },
    ],
    screenshotsFolder: "qcredit",
    description:
      "Quick Credit is an online lending platform that provides short term soft loans to individuals. This helps solve problems of financial inclusion as a way to alleviate poverty and empower low income earners.",
  },
  {
    name: "Ethodoxy",
    stack: [
      TechnologyStack.djangoRestFramework,
      TechnologyStack.django,
      TechnologyStack.react,
    ],
    links: [
      {
        name: "Home page",
        url: "http://chidimo.github.io/Ethodoxy/",
      },
      { name: "Github page", url: "https://github.com/chidimo/Ethodoxy" },
    ],
    screenshotsFolder: "ethodoxy",
    description:
      "The name is a short form for Electronic Orthodoxy. The current database features the Douay-Rheims version of the bible and the Challoner commentary. The app exposes a set of API endpoints, and the frontend app consumes these endpoints. These are still works in progress.",
  },
  {
    name: "react-drag-drop-browser",
    stack: [TechnologyStack.react, TechnologyStack.javascript],
    links: [
      {
        name: "Demo page",
        url: "https://codesandbox.io/s/react-drag-and-drop-fs06e",
      },
      {
        name: "On NPM",
        url: "https://www.npmjs.com/package/react-drag-drop-browser",
      },
      {
        name: "Github page",
        url: "https://github.com/chidimo/react-drag-drop-browser",
      },
    ],
    screenshotsFolder: "dragNdrop",
    description:
      "Simple, customizable React drag and drop component. Also comes with a file browser. It is highly configurable in terms of styling. Do checkout the docs on the Github repo.",
  },
  {
    name: "My Reads",
    stack: [
      TechnologyStack.react,
      TechnologyStack.redux,
      TechnologyStack.javascript,
    ],
    links: [
      {
        name: "Home page",
        url: "https://react-shelf.herokuapp.com",
      },
      { name: "Github page", url: "https://github.com/chidimo/My-Reads" },
    ],
    screenshotsFolder: "myread",
    description:
      "A simple book tracking app which I built as part of my React nanodegree program with Udacity.",
  },
  {
    name: "Would You Rather",
    stack: [
      TechnologyStack.react,
      TechnologyStack.redux,
      TechnologyStack.javascript,
    ],
    links: [
      {
        name: "Home page",
        url: "https://wud-u-rada.herokuapp.com/",
      },
      {
        name: "Github page",
        url: "https://github.com/chidimo/Would-You-Rather",
      },
    ],
    screenshotsFolder: "wudURada",
    description:
      "A would you rather game I built as part of my React nanodegree program at Udacity. Game description is available in the repo.",
  },
  {
    name: "Url shortener",
    stack: [
      TechnologyStack.react,
      TechnologyStack.meteorJs,
      TechnologyStack.mongoDb,
    ],
    description: "URL shortening service with automatic redirects.",
    screenshotsFolder: "urlShortener",
    links: [
      {
        name: "Home page",
        url: "https://basic-url-shortener.herokuapp.com",
      },
      { name: "Github page", url: "https://github.com/chidimo/Url-Shortener" },
    ],
  },
  {
    name: "Currency Analyzer",
    stack: [
      TechnologyStack.meteorJs,
      TechnologyStack.react,
      TechnologyStack.javascript,
    ],
    description: "A currency counting app. Available for web and mobile",
    screenshotsFolder: "",
    links: [],
  },
  {
    name: "choral central",
    stack: [TechnologyStack.django],
    description:
      "The app is a place for sharing choral music sheets and midi files.",
    screenshotsFolder: "",
    links: [],
  },
  {
    name: "voidcoin",
    stack: [
      TechnologyStack.python,
      TechnologyStack.django,
      TechnologyStack.bootstrap,
    ],
    links: [
      {
        name: "Home page",
        url: "http://voidcoin.herokuapp.com/",
      },
      { name: "Github page", url: "https://github.com/chidimo/voidcoin" },
    ],
    screenshotsFolder: "voidcoin",
    description: "A simple blockchain implementation in Python",
  },
  {
    name: "YouTube and Drive API v3",
    stack: [
      TechnologyStack.django,
      TechnologyStack.youtubeApiV3,
      TechnologyStack.python,
    ],
    description:
      "Request YouTube and/or Google Drive access from within a Django web app",
    screenshotsFolder: "",
    links: [
      {
        name: "Github page",
        url: "https://github.com/chidimo/youtube-drive-api-v3-django",
      },
    ],
  },
  {
    name: "Python-git",
    stack: [TechnologyStack.python],
    links: [
      {
        name: "Github page",
        url: "https://github.com/chidimo/python-git",
      },
    ],
    screenshotsFolder: "pygit",
    description:
      "This project aims to control git.exe with Python subprocess module.",
  },
  {
    name: "Hack nairaland",
    stack: [TechnologyStack.python],
    links: [
      {
        name: "Github page",
        url: "https://github.com/chidimo/hack-nairaland",
      },
    ],
    screenshotsFolder: "nairaland",
    description:
      "An exercise in webscraping using nairaland.com as a case study",
  },
  {
    name: "Pywebber",
    stack: [TechnologyStack.python],
    links: [
      {
        name: "Github page",
        url: "https://github.com/chidimo/pywebber",
      },
    ],
    screenshotsFolder: "",
    description: "Web development tools written in Python",
  },
  {
    name: "Line of Balance",
    stack: [
      TechnologyStack.python,
      TechnologyStack.pandas,
      TechnologyStack.matplotlib,
    ],
    links: [
      {
        name: "Github page",
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
    name: "Olympic medals",
    stack: [TechnologyStack.python, TechnologyStack.pandas],
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
    name: "Energy and GDP",
    stack: [TechnologyStack.python, TechnologyStack.pandas],
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
    name: "Hypothesis testing",
    stack: [TechnologyStack.python, TechnologyStack.pandas],
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
    name: "GDP and Inflation by year",
    stack: [
      TechnologyStack.python,
      TechnologyStack.pandas,
      TechnologyStack.matplotlib,
    ],
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
    name: "Temperature highs and lows",
    stack: [
      TechnologyStack.python,
      TechnologyStack.pandas,
      TechnologyStack.matplotlib,
    ],
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
    name: "Visualization of probabilistic data",
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
    name: "Visualizing voting pattern",
    stack: [TechnologyStack.arcgisDesktop],
    links: [
      {
        name: "Plot image(pdf)",
        url: "https://s3.amazonaws.com/coursera-uploads/peer-review/hESqA3EhEeWIfhKr_WcYsQ/514eb4ec558f3dea849094aec6a5eec0/California_Counties_Prop37_2012_Voting_Patterns.pdf",
      },
      {
        name: "Raw map",
        url: "https://www.arcgis.com/home/item.html?id=c73d81e08f654f6a9769e3876065c6ac",
      },
    ],
    screenshotsFolder: "voting",
    description:
      'The "yes" vote patterns in California Counties on Proposition 37 in 2012',
  },
  {
    name: "Moving Valmeyer",
    stack: [TechnologyStack.arcgisDesktop],
    links: [
      {
        name: "Home page",
        url: "http://arcg.is/2cPzy9r",
      },
      {
        name: "Raw map",
        url: "https://www.arcgis.com/home/item.html?id=f9c08c6d13464c62bc787ec3bd2a20c1#overview",
      },
    ],
    screenshotsFolder: "valmeyer",
    description: "Map showing the location of the new and old Valmeyer towns",
  },
  {
    name: "Visualizing ozone concentrations",
    stack: [TechnologyStack.arcgisDesktop],
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

const techStacks: string[] = [];

for (const entry of portfolio_projects) {
  for (const ent of entry.stack) {
    if (!techStacks.includes(ent)) {
      techStacks.push(ent);
    }
  }
}

const imageDirectories = portfolio_projects
  .map((mp) => mp.screenshotsFolder)
  .filter((ff) => ff !== "");

// Curated set shown in the homepage "Selected Work" section, in order.
const featuredProjects: Project[] = [
  "Concord — Expert Matching Platform",
  "Intelligent Matching System (MSc Dissertation)",
  "Field Trial Training Platform",
  "TeachShare",
  "Autumn AI",
  "Bluelines",
]
  .map((name) => portfolio_projects.find((p) => p.name === name))
  .filter((p): p is Project => Boolean(p));

export { portfolio_projects, techStacks, imageDirectories, featuredProjects };
