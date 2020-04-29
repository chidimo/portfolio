export interface ProjectDataInterface {
  title: string;
  stack: string[];
  category: string;
  description: string;
  links: {};
}

export const categories = ['fullstack', 'frontend', 'backend', 'mobile'];

export const stacks = [
  'css3',
  'html5',
  'meteor',
  'django',
  'express',
  'mongodb',
  'javascript',
  'djangorestframework',
];

export const projectsData: ProjectDataInterface[] = [
  {
    category: 'fullstack',
    title: 'quick credit',
    stack: ['express', 'html5', 'meteor', 'css3', 'javascript'],
    links: {
      live: 'https://github.com/chidimo/Quick-Credit',
      repo: 'https://chidimo.github.io/Quick-Credit/UI/index.html',
      frontend: 'https://github.com/chidimo/Quick-Credit',
      backend: 'https://qcredit.herokuapp.com/api/v1/',
      api: 'https://qcredit.docs.apiary.io/',
    },
    description:
      'Quick Credit is an online lending platform that provides short term soft loans to individuals. This helps solve problems of financial inclusion as a way to alleviate poverty and empower low income earners.',
  },
  {
    category: 'fullstack',
    title: 'Ethodoxy',
    stack: ['djangorestframework', 'django', 'react'],
    description:
      'The name is a short form for Electronic Orthodoxy. The current database features the <strong>Douay-Rheims</strong> version of the bible and the <strong>Challoner</strong> commentary. The app exposes a set of API endpoints, and the frontend app consumes these endpoints. These are still works in progress.',
    links: {
      live: 'http://chidimo.github.io/Ethodoxy/',
      repo: 'https://ethodoxy.herokuapp.com/api/v1',
      frontend: 'https://github.com/chidimo/ethodoxy-api',
      backend: 'https://github.com/chidimo/Ethodoxy',
      api: 'https://ethodoxy.herokuapp.com/swagger/',
    },
  },
  {
    category: 'frontend',
    title: 'react-drag-drop-browser',
    stack: ['react'],
    description:
      'Simple, customizable react drag and drop component. Also comes with a file browser. It is highly configurable in terms of styling. Do checkout the docs on the Github repo.',
    links: {
      live: 'https://codesandbox.io/s/react-drag-drop-browser-demo-6j6rl',
      repo: 'https://github.com/chidimo/react-drag-drop-browser',
      frontend: '',
      backend: '',
    },
  },
  {
    category: 'frontend',
    title: 'My Reads',
    stack: ['react'],
    description:
      'A simple book tracking app which I built as part of my React nanodegree program at Udacity.',
    links: {
      live: 'https://react-shelf.herokuapp.com',
      repo: 'https://github.com/chidimo/My-Reads',
      frontend: '',
      backend: '',
    },
  },
  {
    category: 'frontend',
    title: 'Would You Rather',
    stack: ['react'],
    description:
      'A would you rather game I built as part of my React nanodegree program at Udacity. Game description is available in the repo.',
    links: {
      live: 'https://wud-u-rada.herokuapp.com/',
      repo: 'https://github.com/chidimo/Would-You-Rather',
      frontend: '',
      backend: '',
    },
  },
  {
    category: 'fullstack',
    title: 'Url shortener',
    stack: ['react', 'meteor', 'mongodb'],
    description: 'URL shortening service with automatic redirects.',
    links: {
      live: 'https://basic-url-shortener.herokuapp.com',
      repo: 'https://github.com/chidimo/Url-Shortener',
      frontend: '',
      backend: '',
    },
  },
  {
    category: 'mobile',
    title: 'Mobile Flashcards',
    stack: ['react-native', 'redux'],
    description: 'A flashcard app for iOS and Android',
    links: {
      live:
        'https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40chidimo/mobile-flashcards-4b30376ce6d240bb9de13b6b11c19b7c-signed.apk',
      repo: 'https://github.com/chidimo/Mobile-Flashcards',
      frontend: '',
      backend: '',
    },
  },
  {
    category: 'fullstack, mobile',
    title: 'Currency Analyzer',
    stack: ['meteor', 'react'],
    description: 'A currency counting app. Available for web and mobile',
    links: {
      live:
        'https://play.google.com/store/apps/details?id=com.currency.analyzer',
      repo: '',
      frontend: 'http://currency-analyzer.herokuapp.com/',
      backend: 'https://github.com/chidimo/Currency-Analyzer',
    },
  },
  {
    category: 'fullstack',
    title: 'choral central',
    stack: ['django'],
    description:
      'The app is a place for sharing choral music sheets and midi files.',
    links: {
      live: '',
      repo: '',
      frontend: '',
      backend: '',
      web: '',
      android: '',
      ios: '',
    },
  },
  {
    category: 'fullstack',
    title: 'funnshopp',
    stack: ['django'],
    description: 'An Enterprise Resource Planning (ERP) system',
    links: {
      live: 'https://www.funnshopp.com',
      repo: 'https://github.com/chidimo/FunnShopp',
      frontend: '',
      backend: '',
      web: '',
      android: '',
      ios: '',
    },
  },
  {
    category: 'fullstack',
    title: 'voidcoin',
    stack: ['python', 'django', 'bootstrap'],
    description: 'A simple blockchain implementation in python',
    links: {
      live: 'http://voidcoin.herokuapp.com/',
      repo: 'https://github.com/chidimo/voidcoin',
      frontend: '',
      backend: '',
      web: '',
      android: '',
      ios: '',
    },
  },
  {
    category: '',
    title: 'YouTube and Drive API v3',
    stack: ['django', 'YouTube API v3'],
    description:
      'Request YouTube and/or Google Drive access from within a Django web app',
    links: {
      live: '',
      repo: 'https://github.com/chidimo/voidcoin',
      frontend: '',
      backend: '',
      web: '',
      android: '',
      ios: '',
    },
  },
  {
    category: '',
    title: 'Python-git',
    stack: ['python'],
    description:
      'This project aims to control git.exe with python subprocess module.',
    links: {
      live: '',
      repo: 'https://github.com/chidimo/python-git',
      frontend: '',
      backend: '',
      web: '',
      android: '',
      ios: '',
    },
  },
  {
    category: '',
    title: 'Hack nairaland',
    stack: ['python'],
    description:
      'An exercise in webscraping using nairaland.com as a case study',
    links: {
      live: '',
      repo: 'https://github.com/chidimo/hack-nairaland',
      frontend: '',
      backend: '',
      web: '',
      android: '',
      ios: '',
    },
  },
  {
    category: '',
    title: 'Pywebber',
    stack: ['python'],
    description: 'Web development tools written in python',
    links: {
      live: '',
      repo: 'https://github.com/chidimo/pywebber',
      frontend: '',
      backend: '',
      web: '',
      android: '',
      ios: '',
    },
  },
  {
    category: '',
    title: 'Project Euler',
    stack: ['python'],
    description: 'Adventures in algorithm design and analysis',
    links: {
      live: '',
      repo: 'https://github.com/chidimo/Project-Euler-Sulutions',
      frontend: '',
      backend: '',
      web: '',
      android: '',
      ios: '',
    },
  },
  {
    category: 'data science',
    title: 'Line of Balance',
    stack: ['python', 'matplotlib'],
    description:
      'Plotting a line of balance plot/curve (in project management) using matplotlib',
    links: {
      live: '',
      repo: 'https://github.com/chidimo/line_of_balance',
      frontend: '',
      backend: '',
      web: '',
      android: '',
      ios: '',
      pdf: 'https://github.com/chidimo/line_of_balance/blob/master/graph.pdf',
      jupyter: '',
    },
  },
  {
    category: 'data science',
    title: 'Olympic medals',
    stack: ['python', 'pandas'],
    description: 'Analysing olympic gold medals from a wikipedia dataset',
    links: {
      live: '',
      repo: '',
      frontend: '',
      backend: '',
      web: '',
      android: '',
      ios: '',
      pdf: '',
      jupyter:
        'https://github.com/chidimo/ds/blob/master/coursera_pandas/Week%202%20solution.ipynb',
    },
  },
  {
    category: 'data science',
    title: 'Energy and GDP',
    stack: ['python', 'pandas'],
    description: 'Analysing energy and GDP data of various countries',
    links: {
      live: '',
      repo: '',
      frontend: '',
      backend: '',
      web: '',
      android: '',
      ios: '',
      pdf: '',
      jupyter:
        'https://github.com/chidimo/ds/blob/master/coursera_pandas/Week%203%20solution.ipynb',
    },
  },
  {
    category: 'data science',
    title: 'Hypothesis testing',
    stack: ['python', 'pandas'],
    description: 'Testing a hypothesis via data analysis',
    links: {
      live: '',
      repo: '',
      frontend: '',
      backend: '',
      web: '',
      android: '',
      ios: '',
      pdf: '',
      jupyter:
        'https://github.com/chidimo/ds/blob/master/coursera_pandas/Week%204%20solution.ipynb',
    },
  },
  {
    category: 'data science',
    title: 'GDP and Inflation by year',
    stack: ['python', 'pandas'],
    description:
      'Variation of GDP and Inflation rate of Nigeria and UAE between 2005 and 2016',
    links: {
      live: '',
      repo: '',
      frontend: '',
      backend: '',
      web: '',
      android: '',
      ios: '',
      pdf:
        'https://github.com/chidimo/ds/blob/master/coursera_matplotlib/output/comparing_gdp_inflation.pdf',
      jupyter:
        'https://github.com/chidimo/ds/blob/master/coursera_matplotlib/Week4_solution.ipynb',
    },
  },
  {
    category: 'data science',
    title: 'Temperature highs and lows',
    stack: [],
    description:
      'Plotting temperature highs and lows for every calendar day of the year in Abu Dhabi, UAE for the ten-year period, 2005 and 2014',
    links: {
      live: '',
      repo: '',
      frontend: '',
      backend: '',
      web: '',
      android: '',
      ios: '',
      pdf:
        'https://github.com/chidimo/ds/blob/master/coursera_matplotlib/output/Temperature_Abu_Dhabi.pdf',
      jupyter:
        'https://github.com/chidimo/ds/blob/master/coursera_matplotlib/Week2_solution.ipynb',
    },
  },
  {
    category: 'data science',
    title: 'Visualization',
    stack: [],
    description:
      'Building a custom visualization from probabilistic data generated through samples in matplotlib',
    links: {
      live: '',
      repo: '',
      frontend: '',
      backend: '',
      web: '',
      android: '',
      ios: '',
      pdf: '',
      jupyter:
        'https://github.com/chidimo/ds/blob/master/coursera_matplotlib/Week3_solution.ipynb',
    },
  },
  {
    category: 'gis',
    title: 'Visualizing voting pattern',
    stack: ['arcgis desktop'],
    description:
      'The "yes" vote patterns in California Counties on Proposition 37 in 2012',
    links: {
      live: '',
      repo: '',
      frontend: '',
      backend: '',
      web: '',
      android: '',
      ios: '',
      pdf:
        'https://s3.amazonaws.com/coursera-uploads/peer-review/hESqA3EhEeWIfhKr_WcYsQ/514eb4ec558f3dea849094aec6a5eec0/California_Counties_Prop37_2012_Voting_Patterns.pdf',
      jupyter: '',
    },
  },
  {
    category: 'gis',
    title: 'Moving Valmeyer',
    stack: ['arcgis desktop'],
    description: 'Map showing the location of the new and old Valmeyer towns',
    links: {
      live: 'http://arcg.is/2cPzy9r',
      repo: '',
      frontend: '',
      backend: '',
      web: '',
      android: '',
      ios: '',
      pdf: '',
      jupyter: '',
    },
  },
  {
    category: 'gis',
    title: 'Visualizing ozone concentrations',
    stack: ['arcgis desktop'],
    description:
      'Map of Hourly Average Ozone Concentrations around California in 2010-2011',
    links: {
      live: '',
      repo: '',
      frontend: '',
      backend: '',
      web: '',
      android: '',
      ios: '',
      pdf:
        'https://s3.amazonaws.com/coursera-uploads/peer-review/zs3YSHQ6EeWrAxJQXw-8PQ/debaf9f5b41d0fe5707f52283be9ea8c/Ozone_Concentrations.pdf',
      jupyter: '',
    },
  },
];
