export type Program = {
  slug: string;
  title: string;
  stage: "incubation" | "acceleration" | "seed";
  ticketRange: string;
  duration: string;
  description: string;
};

export type PortfolioBrand = {
  slug: string;
  name: string;
  founder: string;
  discipline: Discipline;
  country: string;
  stage: "incubation" | "acceleration" | "seed";
  year: number;
  tagline: string;
  image: string;
};

export type Story = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  author: string;
};

export type Partner = {
  name: string;
  logo: string;
  url: string;
  type: "strategic" | "implementation" | "media";
};

export type ImpactStat = {
  value: string;
  label: string;
  note?: string;
};

export type Discipline =
  | "fashion"
  | "film"
  | "music"
  | "design"
  | "crafts"
  | "visual-arts"
  | "culinary"
  | "other";
