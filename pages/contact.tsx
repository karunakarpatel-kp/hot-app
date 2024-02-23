import React from "react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import MainLayout from "@Components/Layout/MainLayout";
import { NextPageWithLayout } from "./_app";
import HeaderSection from "@Components/SEO/Head";
import { DateMonthYearForBlogPost, SEO_OBJ } from "Essentials";
import { Box, Typography, Grid, Divider, List, ListItem, ListItemText } from "@mui/material";
import HeadingOne from "@Components/Elements/Headings/HeadingOne";
import Subtitle from "@Components/Elements/Subtitle/Subtitle";
import LastUpdateTags from "@Components/UI/LastUpdate&Tags/LastUpdateTags";
import HeaderImageFullBlogPost from "@Components/UI/ImageCards/HeaderImageFullBlogPost";
import { Paragraph as P } from "@Components/Elements/Paragraph/Paragraph";
import HeadingTwo from "@Components/Elements/Headings/HeadingTwo";
import { HighlightText as B } from "@Components/SyntaxHighlighter/HighlightText";
import Sharing from "@Components/SocialShare/Sharing";

const ContactMePage: NextPageWithLayout = () => {
  return (
    <>
      <HeaderSection
        title={SEO_OBJ.CONTACT_PAGE.title}
        description={SEO_OBJ.CONTACT_PAGE.description!}
        image={SEO_OBJ.CONTACT_PAGE.featuredImage}
        url={SEO_OBJ.CONTACT_PAGE.absoluteURL}
        publishedTime={SEO_OBJ.CONTACT_PAGE.publishedTime}
        lastUpdatedTime={SEO_OBJ.CONTACT_PAGE.lastUpdateTime}
      />
      <Box sx={{ mt: { xs: 1, sm: 1, md: 4, lg: 4 } }}>{/* Added Extra Space Under Toolbar */}</Box>

      <Grid container direction="row" sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}>
        <Grid item md={10} lg={8}>
          <HeadingOne title={SEO_OBJ.CONTACT_PAGE.title} id="title" />
          <Subtitle text={SEO_OBJ.CONTACT_PAGE.description!} />
          <LastUpdateTags lastUpdatedTime={DateMonthYearForBlogPost(SEO_OBJ.CONTACT_PAGE.lastUpdateTime)} tags={[]} />
          {/* Image For Desktop Screens */}
          <HeaderImageFullBlogPost
            image={SEO_OBJ.CONTACT_PAGE.featuredImage}
            alt={SEO_OBJ.CONTACT_PAGE.featuredImageAltText}
          />
        </Grid>
        <Grid item md={2} lg={4}>
          {/* Empty Space */}
        </Grid>
      </Grid>
      <Divider sx={{ mt: 4, mb: 4 }} />
      <Grid
        container
        direction="row"
        spacing={3}
        sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}
      >
        <Grid item md={8} lg={8}>
          <P>
            We would love to hear from you! If you have any questions, feedback, or inquiries, please don’t hesitate to
            get in touch with us. Our team is here to assist you.
          </P>
          <HeadingTwo id="support" title="Support" />
          <List sx={{ listStyle: "square", listStylePosition: "outside" }}>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>
                  <B>Email</B>: Send us an email at <B>karunakarpatel.business@gmail.com</B>. We strive to respond to
                  all inquiries within 24 hours.
                </P>
              </ListItemText>
            </ListItem>
          </List>
          <Box mb={3}>
            <Sharing />
          </Box>
        </Grid>

        <Grid item md={4} lg={4} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}>
          {/* Right Extra Space */}
        </Grid>
      </Grid>
    </>
  );
};

export default ContactMePage;

ContactMePage.getLayout = function getLayout(page: ReactJSXElement) {
  return <MainLayout>{page}</MainLayout>;
};
