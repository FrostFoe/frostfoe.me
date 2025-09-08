import { withBase } from "./utils/helpers";

export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Link = {
  text: string;
  href: string;
};

export type Hero = {
  eyebrowText?: string;
  title?: string;
  text?: string;
  image?: Image;
  actions?: Link[];
};

export type About = {
  title?: string;
  text?: string;
};

export type ContactInfo = {
  title?: string;
  text?: string;
  email?: {
    text?: string;
    href?: string;
    email?: string;
  };
  socialProfiles?: {
    text?: string;
    href?: string;
  }[];
};

export type Subscribe = {
  title?: string;
  text?: string;
  formUrl: string;
};

export type SiteConfig = {
  website: string;
  logo?: Image;
  title: string;
  description: string;
  image?: Image;
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  socialLinks?: Link[];
  hero?: Hero;
  about?: About;
  contactInfo?: ContactInfo;
  subscribe?: Subscribe;
  postsPerPage?: number;
  recentPostLimit: number;
  projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
  website: "https://frostfoe.netlify.app",
  title: "FrostFoe",
  description:
    "I enjoy writing stories and learning how good hackers work those who help find weaknesses so we can fix them before bad guys exploit them.",
  image: {
    src: "/space-ahead-preview.jpeg",
    alt: "Space Ahead ✨",
  },
  headerNavLinks: [
    {
      text: "Home",
      href: withBase("/"),
    },
    {
      text: "Blog",
      href: withBase("/blog"),
    },
    {
      text: "Tags",
      href: withBase("/tags"),
    },
    {
      text: "About",
      href: withBase("/about"),
    },
    {
      text: "Contact",
      href: withBase("/contact"),
    },
  ],
  footerNavLinks: [
    {
      text: "About",
      href: withBase("/about"),
    },
    {
      text: "Contact",
      href: withBase("/contact"),
    },
    {
      text: "RSS Feed",
      href: withBase("/rss.xml"),
    },
    {
      text: "Sitemap",
      href: withBase("/sitemap-index.xml"),
    },
  ],
  socialLinks: [
    {
      text: "Dribbble",
      href: "https://dribbble.com/",
    },
    {
      text: "Instagram",
      href: "https://instagram.com/",
    },
    {
      text: "X/Twitter",
      href: "https://twitter.com/",
    },
  ],
  hero: {
    eyebrowText: "Galaxy of Adventures",
    title: "FrostFoe",
    text: "I enjoy writing stories and learning how good hackers work those who help find weaknesses so we can fix them before bad guys exploit them.",
    image: {
      src: "/assets/images/pixeltrue-space-discovery.svg",
      alt: "A person sitting at a desk in front of a computer",
    },
    actions: [
      {
        text: "Read Now",
        href: withBase("/blog"),
      },
      {
        text: "Subscribe",
        href: "#subscribe",
      },
    ],
  },
  about: {
    title: "About",
    text: "FrostFoe is a blog about space exploration and travel. It is written by Astro-naut Sid, a space explorer at Beyond Earth. Sid is known for his love of adventure and his insatiable curiosity about the universe. He has explored countless planets, discovered new life forms, and made friends with aliens along the way. 🚀",
  },
  contactInfo: {
    title: "Contact",
    text: "Hi! Whether you have a question, a suggestion, or just want to share your thoughts, I'm all ears. Feel free to get in touch through any of the methods below:",
    email: {
      text: "Drop me an email and I’ll do my best to respond as soon as possible.",
      href: "mailto:frostfoe@gmail.com",
      email: "frostfoe@gmail.com",
    },
    socialProfiles: [
      {
        text: "LinkedIn",
        href: "https://www.linkedin.com/",
      },
      {
        text: "Peerlist",
        href: "https://www.peerlist.io/",
      },
      {
        text: "GitHub",
        href: "https://github.com/",
      },
    ],
  },
  subscribe: {
    title: "Subscribe to FrostFoe",
    text: "One update per week. All the latest stories in your inbox.",
    formUrl: "#",
  },
  postsPerPage: 2,
  recentPostLimit: 3,
};

export default siteConfig;
