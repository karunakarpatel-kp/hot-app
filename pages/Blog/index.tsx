import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import Link from "next/link";

import MainLayout from "@Layout/MainLayout";
import HeaderSection from "@SEO/Head";

import ImageOnTopCard from "@UI/HomePageCards/ImageOnTopCard";
import { themeColors } from "@Theme/Theme";

import { NextPageWithLayout } from "../_app";
import { SEO_OBJ, blogPostsObj } from "Essentials";

const Blog: NextPageWithLayout = () => {
  return (
    <>
      <HeaderSection
        title={SEO_OBJ.BLOG_PAGE.title}
        description={SEO_OBJ.BLOG_PAGE.description!}
        image={SEO_OBJ.BLOG_PAGE.ogImageURL}
        url={SEO_OBJ.BLOG_PAGE.absoluteURL}
        publishedTime={SEO_OBJ.BLOG_PAGE.publishedTime}
        lastUpdatedTime={SEO_OBJ.BLOG_PAGE.lastUpdateTime}
      />

      <Box textAlign="center" sx={{ mb: { xs: 0, sm: 0, md: 3, lg: 3 } }}>
        <Typography variant="h6" fontWeight="600">
          {/* Recent Articles */}
        </Typography>
      </Box>

      <Grid container sx={{ spacing: { xs: 0, sm: 2, md: 2, lg: 2 }, pl: { xs: 1 } }}>
        {blogPostsObj.map((singlePostObj) => {
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

      {/* Added Load More Button */}
      <Box textAlign="center" mt={6} mb={6}>
        <Link
          href="/Blog"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: themeColors.ReadmoreArticleColor,
          }}
        >
          <Typography variant="body2" sx={{ "&:hover": { textDecoration: "underline" } }}>
            {/* Load more articles */}
          </Typography>
          {/* <ArrowForwardIcon fontSize="small" sx={{ ml: "2px" }} /> */}
        </Link>
      </Box>
    </>
  );
};

export default Blog;

Blog.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
