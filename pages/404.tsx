import { Grid, Box, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { NextPageWithLayout } from "./_app";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import FullPageBlogPostLayout from "@Components/Layout/FullPageBlogPostLayout";
import Image from "next/image";
import NotFoundSvgImage from "@Public/404.svg";
import HeadingOne from "@Components/Elements/Headings/HeadingOne";
import Paragraph from "@Components/Elements/Paragraph/Paragraph";
import HeadingThree from "@Components/Elements/Headings/HeadingThree";
import { HighlightText as B } from "@Components/SyntaxHighlighter/HighlightText";
import Link from "next/link";
import HeaderSection from "@Components/SEO/Head";
import Sharing from "@Components/SocialShare/Sharing";

const Custom404: NextPageWithLayout = () => {
  return (
    <>
      <HeaderSection
        title="Page Not Found | BloggingLove"
        description="This is an custom 404 page for BloggingLove Blog"
        publishedTime="2024-01-29T17:07:31+05:30"
        lastUpdatedTime="2024-01-29T17:07:31+05:30"
        url="https://www.blogginglover.in/404"
        image={NotFoundSvgImage}
      />
      <Grid container minHeight="80vh">
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          p={1}
          sx={{
            border: "0px solid black",
            justifyContent: "center",
            alignItems: "center",
            display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
          }}
        >
          <Image src={NotFoundSvgImage} alt="Not Found Image" style={{ width: "100%", height: "auto" }} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          p={1}
          sx={{ border: "0px solid black", display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <Box>
            <HeadingOne id="title" title="Page Not Found" />
            <Paragraph>The page you were looking for doesnot exist.</Paragraph>
            <HeadingThree id="two" title="Here are some helpful links instead:" />
            <List sx={{ listStyle: "square", listStylePosition: "outside" }}>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText>
                  <Link href="/">Text To Image Converter</Link>
                </ListItemText>
              </ListItem>
              {/* <ListItem sx={{ display: "list-item" }}>
                <ListItemText>
                  <Link href="/cars">Cars Page</Link>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText>
                  <Link href="/cars/tata">Tata Automobiles Page</Link>
                </ListItemText>
              </ListItem> */}
            </List>
            <Box mb={3} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}>
              <Sharing />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          p={1}
          sx={{
            border: "0px solid black",
            justifyContent: "center",
            alignItems: "center",
            display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
          }}
        >
          <Image src={NotFoundSvgImage} alt="Not Found Image" style={{ width: "100%", height: "auto" }} />
        </Grid>
      </Grid>
    </>
  );
};

export default Custom404;

Custom404.getLayout = function getLayout(page: ReactJSXElement) {
  return <FullPageBlogPostLayout>{page}</FullPageBlogPostLayout>;
};
