import React from "react";
import Head from "next/head";
import { StaticImageData } from "next/image";

interface HeaderSectionProps {
  title: string;
  description: string;
  image?: any;
  url: string;
  publishedTime: string;
  lastUpdatedTime: string;
}

const HeaderSection = (props: HeaderSectionProps) => {
  const { title, description, image, url, publishedTime, lastUpdatedTime } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=Yes" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#fff" />
        {/* <link href="https://www.alltechnotricks.com/fevicon.ico" rel="icon" type="image/gif" /> */}
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        {/* <meta name="google-site-verification" content="bUkCZHa4Gm1pjRcCm-LOGKkXNUfmkSIpf5zPeYWHlcA" /> */}
        <meta property="og:locale" content="en_US" />
        <meta property="fb:admins" content="https://www.facebook.com/KarunakarPatel.001" />
        <meta property="twitter:account_id" content="https://twitter.com/Karna_Patel_" />
        <meta property="twitter:creator" content="@Karna_Patel_" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://twitter.com/Karna_Patel_" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="article:published_time" content={publishedTime} />
        <meta property="article:modified_time" content={lastUpdatedTime} />
        <link rel="canonical" href="https://blogginglover.in/" />
      </Head>
    </>
  );
};

export default HeaderSection;
