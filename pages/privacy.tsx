import MainLayout from "@Components/Layout/MainLayout";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React from "react";
import { NextPageWithLayout } from "./_app";
import HeaderSection from "@Components/SEO/Head";
import { DateMonthYearForBlogPost, SEO_OBJ } from "Essentials";
import { Box, Grid, Divider, List, ListItem, ListItemText } from "@mui/material";
import FullPageBlogPostLayout from "@Components/Layout/FullPageBlogPostLayout";
import HeadingOne from "@Components/Elements/Headings/HeadingOne";
import Subtitle from "@Components/Elements/Subtitle/Subtitle";
import { Paragraph as P } from "@Components/Elements/Paragraph/Paragraph";
import LastUpdateTags from "@Components/UI/LastUpdate&Tags/LastUpdateTags";
import HeaderImageFullBlogPost from "@Components/UI/ImageCards/HeaderImageFullBlogPost";
import { HighlightText as B } from "@Components/SyntaxHighlighter/HighlightText";
import HeadingTwo from "@Components/Elements/Headings/HeadingTwo";
import HeadingThree from "@Components/Elements/Headings/HeadingThree";
import Sharing from "@Components/SocialShare/Sharing";

const PrivacyPage: NextPageWithLayout = () => {
  return (
    <>
      <HeaderSection
        title={SEO_OBJ.POLICY_PAGE.title}
        description={SEO_OBJ.POLICY_PAGE.description!}
        image={SEO_OBJ.POLICY_PAGE.featuredImage}
        url={SEO_OBJ.POLICY_PAGE.absoluteURL}
        publishedTime={SEO_OBJ.POLICY_PAGE.publishedTime}
        lastUpdatedTime={SEO_OBJ.POLICY_PAGE.lastUpdateTime}
      />
      <Box sx={{ mt: { xs: 1, sm: 1, md: 4, lg: 4 } }}>{/* Added Extra Space Under Toolbar */}</Box>

      <Grid container direction="row" sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}>
        <Grid item md={10} lg={8}>
          <HeadingOne title={SEO_OBJ.POLICY_PAGE.title} id="title" />
          <Subtitle text={SEO_OBJ.POLICY_PAGE.description!} />
          <LastUpdateTags lastUpdatedTime={DateMonthYearForBlogPost(SEO_OBJ.POLICY_PAGE.lastUpdateTime)} tags={[]} />
          {/* Image For Desktop Screens */}
          <HeaderImageFullBlogPost
            image={SEO_OBJ.POLICY_PAGE.featuredImage}
            alt={SEO_OBJ.POLICY_PAGE.featuredImageAltText}
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
            This Privacy Policy outlines how <B>Blogginglover.in</B> collects, uses, and protects the personal
            information you provide while using our website. We are committed to ensuring the privacy and security of
            your personal information. By using Blogginglover.in, you agree to the terms and practices described in this
            policy.
          </P>
          <HeadingTwo id="heading" title="Information We Collect" />
          <P>
            When you visit Blogginglover.in, we may collect certain personally identifiable information, including but
            not limited to:
          </P>
          <List sx={{ listStyle: "square", listStylePosition: "outside" }}>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>
                  <B>Name</B>: We may collect your name when you voluntarily provide it, such as when submitting
                  comments or contacting us through our website.
                </P>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>
                  <B>Email Address</B>: We may collect your email address when you subscribe to our newsletter or
                  contact us through our website.
                </P>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>
                  <B>IP Address</B>: We automatically collect your IP address and related information, such as your
                  approximate location, for analytical and security purposes.
                </P>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>
                  <B>Cookies</B>: We use cookies to enhance your browsing experience and track usage information. You
                  can control and manage cookies through your browser settings.
                </P>
              </ListItemText>
            </ListItem>
          </List>
          <HeadingTwo title="Use of Information" id="information" />
          <P>The information we collect is used for the following purposes:</P>
          <List sx={{ listStyle: "square", listStylePosition: "outside" }}>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>To provide and personalize our services to you.</P>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>To communicate with you, respond to your inquiries, and provide customer support.</P>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>
                  To send you newsletters, updates, and promotional materials if you have subscribed to our mailing
                  list.
                </P>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>To analyze website usage and improve our content and services.</P>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>To prevent fraud, protect the security of our website, and comply with legal obligations.</P>
              </ListItemText>
            </ListItem>
          </List>
          <HeadingThree id="three" title="Data Sharing and Disclosure" />
          <P>
            We do not sell, trade, or transfer your personally identifiable information to third parties without your
            consent, except in the following cases:
          </P>
          <List sx={{ listStyle: "square", listStylePosition: "outside" }}>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>
                  <B>Service Providers</B>: We may engage trusted third-party service providers to assist us in
                  operating our website and providing services to you. These providers have access to your personal
                  information only to perform specific tasks on our behalf and are obligated to maintain its
                  confidentiality.
                </P>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>
                  <B>Legal Requirements</B>: We may disclose your personal information if required by law or in response
                  to valid legal processes, such as a court order or government request.
                </P>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>
                  <B>Consent</B>: We may share your information with your consent or as otherwise disclosed at the time
                  of collection.
                </P>
              </ListItemText>
            </ListItem>
          </List>
          <HeadingThree title="Data Retention" id="data" />
          <P>
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this
            Privacy Policy, unless a longer retention period is required or permitted by law.
          </P>
          <HeadingThree title="Security" id="security" />
          <P>
            We take reasonable measures to protect the security of your personal information and prevent unauthorized
            access, disclosure, or alteration. However, please note that no method of transmission over the Internet or
            electronic storage is 100% secure, and we cannot guarantee absolute security.
          </P>
          <HeadingThree title="Your Rights" id="rights" />
          <P>
            You have the right to access, update, correct, and delete your personal information. You may also
            unsubscribe from our mailing list or opt out of receiving promotional communications at any time. To
            exercise these rights or for any privacy-related inquiries, please contact us using the information provided
            below.
          </P>
          <HeadingThree title="Changes to This Privacy Policy" id="privacy-policy" />
          <P>
            We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this
            page with a revised “Last Updated” date. We encourage you to review this Privacy Policy periodically to stay
            informed about how we collect, use, and protect your information.
          </P>

          <HeadingThree title="Contact Us" id="contact" />
          <P>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices,
            please get in touch with us at:
          </P>
          <List sx={{ listStyle: "square", listStylePosition: "outside" }}>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>
                  <B>Email</B>: <B>karunakarpatel.business@gmail.com</B>.{" "}
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

export default PrivacyPage;

PrivacyPage.getLayout = function getLayout(page: ReactJSXElement) {
  return (
    <>
      <FullPageBlogPostLayout>{page}</FullPageBlogPostLayout>
    </>
  );
};
