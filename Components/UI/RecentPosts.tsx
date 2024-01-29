import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paragraph from "@Components/Elements/Paragraph/Paragraph";
import { blogPostsObj } from "Essentials";
import ImageOnTopCard from "./HomePageCards/ImageOnTopCard";
import { useRouter } from "next/router";

interface incomingBlogObjProps {
  id: number;
  url: string;
  title: string;
  description: string;
  lastUpdateTime: string;
  publishedTime: string;
  tags: {
    tag: string;
    href: string;
  }[];
  featuredImage: any;
  featuredImageAltText: string;
}

function isWithinLastMonth(dateString: any) {
  const currentDate: any = new Date();
  const publishedDate: any = new Date(dateString);

  // Calculate the difference in milliseconds
  const timeDifference = currentDate - publishedDate;

  // Calculate the difference in days
  const daysDifference = timeDifference / (1000 * 3600 * 24);

  // If the difference is less than or equal to 30 days, it's within the last month
  return daysDifference <= 30;
}

const RecentPosts = () => {
  const [filteredPosts, setFilteredPosts] = React.useState<incomingBlogObjProps[]>([]);
  const router = useRouter();
  const presentURL = router.pathname;

  const incomingBlogPosts = blogPostsObj.map((singleIncomingPost) => {
    return singleIncomingPost;
  });

  useEffect(() => {
    // Filtered the blogPosts with the sameURL and filtered out to only latest 3 objects in blogPostArray
    // const BlogPostsWithoutPresentURL = incomingBlogPosts
    //   .filter((pathName) => pathName.url !== presentURL && isWithinLastMonth(pathName.publishedTime))
    //   .slice(0, 3);
    // setFilteredPosts(BlogPostsWithoutPresentURL);
  }, []);

  return (
    <>
      <Grid container sx={{ spacing: { xs: 0, sm: 2, md: 2, lg: 2 }, pl: { xs: 1 }, mt: 4 }}>
        {filteredPosts !== undefined &&
          filteredPosts.map((singlePostObj) => {
            return (
              <Grid item xs={12} sm={12} md={4} lg={4} key={singlePostObj.id}>
                <ImageOnTopCard
                  Title={singlePostObj.title}
                  Description={singlePostObj.description!}
                  href={singlePostObj.url}
                  ImageSrc={singlePostObj.featuredImage}
                  ImageAlt={singlePostObj.featuredImageAltText}
                  tags={singlePostObj.tags}
                />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default RecentPosts;
