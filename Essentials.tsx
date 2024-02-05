import textToImageWelcomeImage from "@Public/welcome-page.png";

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

interface Base_Url_Props {
  HOME_PAGE_BASE_URL: string;
}

export const BASE_URLS: Base_Url_Props = {
  HOME_PAGE_BASE_URL: process.env.HOME_PAGE_BASE_URL!,
};

interface Blog_Post_URL_Props {
  HOME_PAGE_ABSOLUTE: string;
  HOME_PAGE_RELATIVE: string;

  PRIVACY_PAGE_ABSOLUTE: string;
  PRIVACY_PAGE_RELATIVE: string;

  CONTACT_PAGE_ABSOLUTE: string;
  CONTACT_PAGE_RELATIVE: string;

  DISCLAIMER_PAGE_ABSOLUTE: string;
  DISCLAIMER_PAGE_RELATIVE: string;
}

export const blogPostURLS: Blog_Post_URL_Props = {
  HOME_PAGE_ABSOLUTE: BASE_URLS.HOME_PAGE_BASE_URL,
  HOME_PAGE_RELATIVE: "/",

  PRIVACY_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/privacy`,
  PRIVACY_PAGE_RELATIVE: "/privacy",

  CONTACT_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/contact`,
  CONTACT_PAGE_RELATIVE: "/contact",

  DISCLAIMER_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/disclaimer`,
  DISCLAIMER_PAGE_RELATIVE: "/disclaimer",
};

interface Tag {
  tag: string;
  href: string;
}

interface BlogPage {
  absoluteURL: string;
  relativeURL: string;
  title: string;
  description: string;
  lastUpdateTime: string;
  publishedTime: string;
  featuredImage: any;
  featuredImageAltText: string;
  ogImageURL: string;
}
interface Tag {
  tag: string;
  href: string;
}

interface HomePage extends BlogPage {
  tags: { tag: string; href: string }[];
}
interface PolicyPage extends BlogPage {}
interface ContactPage extends BlogPage {}
interface DisclaimerPage extends BlogPage {}

interface ImageCompressionToolPage extends BlogPage {
  tags: Tag[];
}

interface SEOObjProps {
  HOME_PAGE: HomePage;
  POLICY_PAGE: PolicyPage;
  CONTACT_PAGE: ContactPage;
  DISCLAIMER_PAGE: DisclaimerPage;
}

export const SEO_OBJ: SEOObjProps = {
  // HomePage
  HOME_PAGE: {
    absoluteURL: blogPostURLS.HOME_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.HOME_PAGE_RELATIVE,
    title: "Text To Image Converter ai tool 2024",
    description:
      "Our Text to Image AI Converter utilizes advanced artificial intelligence algorithms to convert plain text into visually appealing images. Whether you're creating social media graphics, presentations, or artistic designs, our platform simplifies the conversion process, offering a seamless user experience.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2024-01-29T17:07:55+00:00",
    featuredImage: textToImageWelcomeImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
    tags: [
      { tag: "ai-text-image-generator", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "text-to-image-ai-tool", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "text-to-image-converter", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
  },

  POLICY_PAGE: {
    absoluteURL: blogPostURLS.PRIVACY_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.PRIVACY_PAGE_RELATIVE,
    title: "Privacy Policy | BloggingLover",
    description:
      "Welcome to blogginglover privacy policy. In here you can find all the details about privacy policy of Blogginglover",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2024-01-29T17:07:55+00:00",
    featuredImage: textToImageWelcomeImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
  },

  CONTACT_PAGE: {
    absoluteURL: blogPostURLS.CONTACT_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.CONTACT_PAGE_RELATIVE,
    title: "Contact Us | BloggingLover",
    description:
      "Welcome to blogginglover contact page. In here you can find all the details of about Blogginglover contact information and a way to contact administrator of the blogginglover site.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2024-01-29T17:07:55+00:00",
    featuredImage: textToImageWelcomeImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
  },

  DISCLAIMER_PAGE: {
    absoluteURL: blogPostURLS.DISCLAIMER_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.DISCLAIMER_PAGE_RELATIVE,
    title: "Disclaimer | BloggingLover",
    description:
      "Welcome to blogginglover disclaimer page. In here you can find all the details of about Blogginglover Disclaimer and its policies.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2024-01-29T17:07:55+00:00",
    featuredImage: textToImageWelcomeImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
  },
};

export const blogPostsObj = [
  // {
  //   id: 1,
  //   url: SEO_OBJ.IMAGE_COMPRESSION_TOOL_PAGE.relativeURL,
  //   title: SEO_OBJ.IMAGE_COMPRESSION_TOOL_PAGE.title,
  //   description: SEO_OBJ.IMAGE_COMPRESSION_TOOL_PAGE.description,
  //   lastUpdateTime: SEO_OBJ.IMAGE_COMPRESSION_TOOL_PAGE.lastUpdateTime,
  //   publishedTime: SEO_OBJ.IMAGE_COMPRESSION_TOOL_PAGE.publishedTime,
  //   tags: [
  //     { tag: "Cars", href: "url" },
  //     { tag: "Tata", href: "url" },
  //     { tag: "Tata Safari", href: "url" },
  //   ],
  //   featuredImage: vehicleMasti,
  //   featuredImageAltText: SEO_OBJ.IMAGE_COMPRESSION_TOOL_PAGE.featuredImageAltText,
  // },
];
