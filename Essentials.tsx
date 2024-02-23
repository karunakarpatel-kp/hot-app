import seoImage from "@Public/seo.jpg";
import nextjsInstallImage from "@Public/nextjs_install.png";
import welcomePatelsImage from "@Public/welcome-page.png";

interface blogPostURLSProps {
  NEXTJS_INSTALLATION_RELATIVE: string;
  NEXTJS_INSTALLATION_ABSOLUTE: string;

  HOME_PAGE_ABSOLUTE: string;
  HOME_PAGE_RELATIVE: string;

  BLOG_PAGE_RELATIVE: string;
  BLOG_PAGE_ABSOLUTE: string;

  PRIVACY_PAGE_ABSOLUTE: string;
  PRIVACY_PAGE_RELATIVE: string;

  CONTACT_PAGE_ABSOLUTE: string;
  CONTACT_PAGE_RELATIVE: string;

  DISCLAIMER_PAGE_ABSOLUTE: string;
  DISCLAIMER_PAGE_RELATIVE: string;
}

interface blogPostsObjProps {
  id: number;
  url: string;
  title: string;
  subtitle?: string;
  description?: string;
  lastUpdateTime: string;
  publishedTime: string;
  tags: { tag: string; href: string }[];
  featuredImage: any;
  featuredImageAltText: string;
  ogImageURL: string;
}

interface SEO_OBJ_Props {
  [key: string]: {
    absoluteURL: string;
    relativeURL: string;
    title: string;
    subtitle?: string;
    description?: string;
    lastUpdateTime: string;
    publishedTime: string;
    tags?: { tag: string; href: string }[];
    featuredImage: any;
    featuredImageAltText: string;
    ogImageURL: string;
  };
}

export const DateMonthYearForBlogPost = (lastUpdateTime: string) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(lastUpdateTime);
  const day = date.getDate();
  const month = months[date.getMonth()]; // Months are 0-based in JavaScript Dates
  const year = date.getFullYear();
  // console.log(`${day}/${month}/${year}`, "DATE");
  return `${day}, ${month}, ${year}`;
};

export const dynamicLastUpdatedTime = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are 0-indexed
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+05:30`;
  return formattedDate;
};

export const BASE_URL: { HOME_PAGE_BASE_URL: string; BLOG_PAGE_BASE_URL: string } = {
  HOME_PAGE_BASE_URL: process.env.HOME_PAGE_BASE_URL!,
  BLOG_PAGE_BASE_URL: process.env.BLOG_PAGE_BASE_URL!,
};

export const blogPostURLS: blogPostURLSProps = {
  HOME_PAGE_ABSOLUTE: BASE_URL.HOME_PAGE_BASE_URL,
  HOME_PAGE_RELATIVE: "/",

  BLOG_PAGE_ABSOLUTE: BASE_URL.BLOG_PAGE_BASE_URL,
  BLOG_PAGE_RELATIVE: "/Blog",

  PRIVACY_PAGE_ABSOLUTE: `${BASE_URL.HOME_PAGE_BASE_URL}/privacy`,
  PRIVACY_PAGE_RELATIVE: "/privacy",

  CONTACT_PAGE_ABSOLUTE: `${BASE_URL.HOME_PAGE_BASE_URL}/contact`,
  CONTACT_PAGE_RELATIVE: "/contact",

  DISCLAIMER_PAGE_ABSOLUTE: `${BASE_URL.HOME_PAGE_BASE_URL}/disclaimer`,
  DISCLAIMER_PAGE_RELATIVE: "/disclaimer",

  NEXTJS_INSTALLATION_ABSOLUTE: `${BASE_URL.BLOG_PAGE_BASE_URL}/nextjs_installation`,
  NEXTJS_INSTALLATION_RELATIVE: "/Blog/nextjs_installation",
};

export const SEO_OBJ: SEO_OBJ_Props = {
  // HomePage
  HOME_PAGE: {
    absoluteURL: blogPostURLS.HOME_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.HOME_PAGE_RELATIVE,
    title: "Karunakar Patel: Navigating the landscape of programming knowledge",
    description:
      "Explore programming with Karunakar Patel. Find simplified explanations, hands-on tutorials, practical tips, and personal experiences about programming",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-10-20T19:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URL.HOME_PAGE_BASE_URL}/welcome-page.png`,
  },
  // BlogPage  /Blog/
  BLOG_PAGE: {
    absoluteURL: blogPostURLS.BLOG_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.BLOG_PAGE_RELATIVE,
    title: "Karunakar Patel Blog: A hub for programming enthusiasts.",
    description:
      "Welcome to Karunakar Patels Blog! This is the perfect place for people who love programming. You'll find easy-to-understand articles and tutorials for beginners and experienced coders alike. Join our community and let's learn and grow together in the world of coding!",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-10-20T19:19:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URL.HOME_PAGE_BASE_URL}/welcome-page.png`,
  },

  POLICY_PAGE: {
    absoluteURL: blogPostURLS.PRIVACY_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.PRIVACY_PAGE_RELATIVE,
    title: "Privacy Policy | KarunakarPatel Blog",
    description:
      "Welcome to KarunakarPatel privacy policy. In here you can find all the details about privacy policy of Karunakar Patel",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-12-09T19:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URL.HOME_PAGE_BASE_URL}/welcome-page.png`,
  },

  CONTACT_PAGE: {
    absoluteURL: blogPostURLS.CONTACT_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.CONTACT_PAGE_RELATIVE,
    title: "Contact Us | KarunakarPatel",
    description:
      "Welcome to KarunakarPatel contact page. In here you can find all the details of about KarunakarPatel contact information and a way to contact administrator of the KarunakarPatel site.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-12-09T19:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URL.HOME_PAGE_BASE_URL}/welcome-page.png`,
  },

  DISCLAIMER_PAGE: {
    absoluteURL: blogPostURLS.DISCLAIMER_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.DISCLAIMER_PAGE_RELATIVE,
    title: "Disclaimer | KarunakarPatel",
    description:
      "Welcome to KarunakarPatel disclaimer page. In here you can find all the details of about KarunakarPatel's Disclaimer and its policies.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-12-09T19:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URL.HOME_PAGE_BASE_URL}/welcome-page.png`,
  },

  // nextjs_installation
  NEXTJS_INSTALLATION: {
    absoluteURL: blogPostURLS.NEXTJS_INSTALLATION_ABSOLUTE,
    relativeURL: blogPostURLS.NEXTJS_INSTALLATION_RELATIVE,
    title: "Next.js Installation: Everything You Need to Know to Get Started",
    description:
      "Learn how to install Next.js in an easy way. This guide provides step-by-step instructions for a smooth setup. If you are looking for seamless Next.js installation,  this tutorial has got you covered. Start building efficient and powerful web applications with Next.js today!",
    publishedTime: "2023-10-20T19:07:55+00:00",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Next.js Install", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Next.js", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: nextjsInstallImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URL.HOME_PAGE_BASE_URL}/nextjs_install.png`,
  },
};

export const blogPostsObj: blogPostsObjProps[] = [
  {
    id: 0,
    url: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}`,
    title: `${SEO_OBJ.NEXTJS_INSTALLATION.title}`,
    description: `${SEO_OBJ.NEXTJS_INSTALLATION.description}`,
    lastUpdateTime: `${SEO_OBJ.NEXTJS_INSTALLATION.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.NEXTJS_INSTALLATION.publishedTime}`,
    tags: SEO_OBJ.NEXTJS_INSTALLATION.tags!,
    featuredImage: SEO_OBJ.NEXTJS_INSTALLATION.featuredImage,
    featuredImageAltText: `${SEO_OBJ.NEXTJS_INSTALLATION.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.NEXTJS_INSTALLATION.ogImageURL}`,
  },
];
