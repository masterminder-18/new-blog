import { BlogConfig } from "./types/config";

const blogConfig: BlogConfig = {
  use: "notion", // mdx or notion
  siteLogo: {
    url: "/images/logo.svg",
    width: 350,
    height: 39,
  },
  siteName: "Knowledge Stock",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  title: "Knowledge Stock",
  description: "My Knowledge Stock",
  googleAnalyticsCode: "", // G-**********
  googleAdsenseCode: "", // ca-pub-****************
  notFoundPage: {
    title: "404",
    subtitle: "The page you were looking for was not found.",
    image: "/images/not-found.jpeg",
    description: `The page you were looking for was not found due to reasons such as
    "already deleted" or "URL is different".`,
  },
  topPage: {
    title: "NEW POSTS",
    readMoreLabel: "Read More",
  },
  categoryPage: {
    title: "NEW POSTS",
    readMoreLabel: "Read More",
  },
  articlePage: {
    afterContentAd: "",
  },
  widgets: {
    categoryList: {
      title: "CATEGORY",
    },
    tagList: {
      title: "TAG",
    },
    share: {
      title: "Share",
      socials: ["twitter", "facebook"],
    },
    fixedSidebar: {
      ad: "",
    },
  },
  styles: {
    containerMaxWidth: "1280px",
    colors: {
      primary: "#50C0A1",
      primaryLighter: "#EFF7F3",
      primaryGradient: "linear-gradient(to right, #06A9B7, #B0DE87)",
      base: "#F2F4F3",
      border: "",
      bg: "#F7F7F7",
      text: "#2C2C2C",
      grayLighter: "#A0A0A0",
    },
    breakPoints: {
      huge: "1440px",
      large: "1170px",
      medium: "768px",
      small: "450px",
    },
  },
  hero: {
    title: "insights on productivity",
    image: "/images/plane.jpeg",
    description: "「生産性」にまつわるナレッジをまとめています",
  },
  footer: {
    title: "",
  },
  article: {
    defaultThumbnail: "/images/plane.jpeg",
    articlesPerPage: 6,
  },
  navigation: [
    {
      name: "ICT",
      url: `/ict`,
    },
    {
      name: "AI",
      url: `/ai`,
    },
    {
      name: "Work",
      url: "/work",
    },
  ],
  subNavigation: [
    {
      name: "terms",
      url: "/about/terms",
    },
    {
      name: "privacy",
      url: "/about/privacy",
    },
    // {
    //   name: "GitHub",
    //   url: "https://github.com/steelydylan/Awesome",
    // },
  ],
  account: {
    name: "Yusuke Sugino",
    description: "生成AI✖️広告で色々やってます。",
    image: `/images/avatar.jpg`,
    social: {
      twitter: "https://x.com/yspipinosuke",
      globe: "https://interest-me.blog/",
    },
  },
  writers: [
    {
      id: "Yusuke Sugino",
      name: "Yusuke Sugino",
      description:
        "エンジニアとしてのバックグランドを活かし、生成AI✖️広告を攻めてます。",
      image: "/images/avatar.jpg",
    },
  ],
  categories: [
    {
      id: "about",
      title: "About",
      imagePath: "/images/camp.jpeg",
      description: "",
    },
    {
      id: "work",
      title: "Work",
      imagePath: "/images/camp.jpeg",
      description: "Look at my awesome camp life",
    },
    {
      id: "ict",
      title: "ICT",
      imagePath: "/images/camp.jpeg",
      description: "Look at my awesome camp life",
    },
    {
      id: "ai",
      title: "AI",
      imagePath: "/images/london.jpeg",
      description: "Look at my awesome travel life",
    },
  ],
  tags: [
    {
      id: "london",
      title: "London",
    },
    {
      id: "boston",
      title: "Boston",
    },
    {
      id: "paris",
      title: "Paris",
    },
    {
      id: "fire",
      title: "Fire",
    },
    {
      id: "sky",
      title: "Sky",
    },
  ],
};

export default blogConfig;
