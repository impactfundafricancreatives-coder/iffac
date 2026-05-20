import type { ImpactStat, Partner, PortfolioBrand, Story } from "@/types";

export const impactStats: ImpactStat[] = [
  { value: "16+", label: "Industries & sub-sectors" },
  { value: "34+", label: "Startups backed" },
  { value: "8+", label: "Brands at scale" },
  { value: "70+", label: "Investors in network" },
  { value: "US$150M", label: "Total target raise" },
  { value: "€2M", label: "Max seed per venture" },
];

export const partners: Partner[] = [
  { name: "African Fashion Foundation", logo: "/logos/aff.svg", url: "#", type: "strategic" },
  { name: "Annan Capital Partners", logo: "/logos/acp.svg", url: "#", type: "strategic" },
  { name: "Seedstars", logo: "/logos/seedstars.svg", url: "#", type: "implementation" },
  { name: "Digital Fashion Academy", logo: "/logos/dfa.svg", url: "#", type: "implementation" },
  { name: "TalentX", logo: "/logos/talentx.svg", url: "#", type: "strategic" },
  { name: "African Development Bank", logo: "/logos/afdb.svg", url: "#", type: "strategic" },
  { name: "UNEP", logo: "/logos/unep.svg", url: "#", type: "strategic" },
  { name: "ITC Ethical Fashion", logo: "/logos/itc.svg", url: "#", type: "strategic" },
];

export const portfolioBrands: PortfolioBrand[] = [
  {
    slug: "atto-tetteh",
    name: "Atto Tetteh",
    founder: "Atto Tetteh",
    discipline: "fashion",
    country: "Ghana",
    stage: "acceleration",
    year: 2023,
    tagline: "Cutting Accra's silhouette for the world.",
    image: "/portfolio/atto-tetteh.jpg",
  },
  {
    slug: "studio-kali",
    name: "Studio Kali",
    founder: "Amara Diallo",
    discipline: "design",
    country: "Senegal",
    stage: "incubation",
    year: 2024,
    tagline: "Dakar-rooted contemporary design studio.",
    image: "/portfolio/studio-kali.jpg",
  },
  {
    slug: "nairobi-frames",
    name: "Nairobi Frames",
    founder: "Wanjiru Mwangi",
    discipline: "film",
    country: "Kenya",
    stage: "seed",
    year: 2022,
    tagline: "East African cinema on the screens that matter.",
    image: "/portfolio/nairobi-frames.jpg",
  },
  {
    slug: "adire-atelier",
    name: "Adire Atelier",
    founder: "Funmi Ade",
    discipline: "fashion",
    country: "Nigeria",
    stage: "acceleration",
    year: 2023,
    tagline: "Yoruba textile heritage, globally positioned.",
    image: "/portfolio/adire-atelier.jpg",
  },
  {
    slug: "kigali-sound",
    name: "Kigali Sound",
    founder: "Patrick Nzeyimana",
    discipline: "music",
    country: "Rwanda",
    stage: "incubation",
    year: 2024,
    tagline: "Rwanda's new-wave production collective.",
    image: "/portfolio/kigali-sound.jpg",
  },
  {
    slug: "cape-craft-co",
    name: "Cape Craft Co.",
    founder: "Lindiwe Dube",
    discipline: "crafts",
    country: "South Africa",
    stage: "acceleration",
    year: 2023,
    tagline: "Heritage craft meets contemporary commerce.",
    image: "/portfolio/cape-craft.jpg",
  },
];

export const featuredStories: Story[] = [
  {
    slug: "atto-tetteh-accra-silhouette",
    title: "Atto Tetteh is Cutting Accra's Silhouette for the World",
    excerpt:
      "Inside the atelier where a Ghana-born tailor is quietly rewriting what African menswear means to London, Milan, and beyond.",
    category: "From the Studio",
    date: "2026-04-12",
    image: "/stories/atto-tetteh.jpg",
    author: "Lerato Mokoena",
  },
  {
    slug: "nairobi-frames-east-african-cinema",
    title: "The Cinema Fund That's Changing East Africa's Film Economy",
    excerpt:
      "How IFFAC's Film Sub-Fund is bridging the gap between Nairobi's street stories and Sundance-track ambitions.",
    category: "From the Set",
    date: "2026-03-28",
    image: "/stories/nairobi-frames.jpg",
    author: "Tunde Adeyemi",
  },
  {
    slug: "state-of-african-creative-capital",
    title: "The State of African Creative Capital: 2026 Outlook",
    excerpt:
      "A data-driven look at where patient capital is flowing — and the gaps that remain — across the continent's cultural economy.",
    category: "Research",
    date: "2026-02-15",
    image: "/stories/capital-report.jpg",
    author: "IFFAC Research Team",
  },
];

export const navLinks = [
  { label: "About", href: "/about/our-story" },
  { label: "Programs", href: "/programs" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Impact", href: "/impact" },
  { label: "Investors", href: "/investors" },
  { label: "Stories", href: "/journal" },
];
