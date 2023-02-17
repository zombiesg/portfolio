export interface ConfigTypes {
  personal: Personal;
  project: Project[];
  footerLink: FooterLink;
}

export interface FooterLink {
  linkedin: string;
  github: string;
}

export interface Personal {
  name: string;
  desc: string;
}

export interface Project {
  title: string;
  desc: string;
  image: string;
  linkDemo: string;
  linkSrcCode: string;
}
