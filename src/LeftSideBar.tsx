import React from 'react';
import Card from 'react-bootstrap/Card';

export const LeftSideBar: React.FC = () => {
  const details = `
  {
    "name": "Chidi Orji",
    "title":"Frontend developer",
    "version": "Living",
    "phone": "09036650603",
    "email": "orjichidi95@gmail.com",
    "location":"Lagos, Nigeria",
    "education":"B.Eng (Petroleum Engineering), University of Benin",
    "social": {
      "homepage": "https://chidimo.netlify.app",
      "twitter": "https://www.twitter.com/chi_di_mo",
      "linkedin": "https://www.linkedin.com/in/chidi-orji/",
      "github": "https://github.com/chidimo",
    },
    "languages": {
      "python": "latest",
      "javascript":"latest"
    },
    "frameworks": {
      "react": "latest",
      "django": "latest",
    }
  }
  `;

  const c = {
    name: 'Chidi Orji',
    title: 'Frontend developer',
    version: 'Living',
    phone: '09036650603',
    email: 'orjichidi95@gmail.com',
    location: 'Lagos, Nigeria',
    education: 'B.Eng (Petroleum Engineering), University of Benin',
    social: {
      homepage: 'https://chidimo.netlify.app',
      twitter: 'https://www.twitter.com/chi_di_mo',
      linkedin: 'https://www.linkedin.com/in/chidi-orji/',
      github: 'https://github.com/chidimo',
    },
    languages: {
      python: 'latest',
      javascript: 'latest',
    },
    frameworks: {
      react: 'latest',
      django: 'latest',
    },
  };

  return (
    <Card className="">
      <pre>{details}</pre>
    </Card>
  );
};
