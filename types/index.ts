export interface Certificate {
  id: string;
  relevance: number;
  platform: string;
  title: string;
  about: string;
  certificate_url: string;
}

export interface Project {
  name: string;
  description: string;
  stack: string[];
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

export interface Social {
  title: string;
  socialUrl: string;
  badgeUrl: string;
}
