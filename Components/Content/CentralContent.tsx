import React from "react";

import HeadingTwo from "@Components/Elements/Headings/HeadingTwo";
import Paragraph from "@Components/Elements/Paragraph/Paragraph";
import { Grid, List, ListItem, ListItemText } from "@mui/material";
import { HighlightText as B } from "@Components/SyntaxHighlighter/HighlightText";

const CentralContent = () => {
  return (
    <>
      <Grid container mt={1}>
        <Grid item xs={0} sm={0.5} md={1} lg={1.5} border={0}>
          {/* Extra Space On The Left Side */}
        </Grid>

        <Grid item xs={12} sm={11} md={10} lg={9} minHeight="100vh" border={0} sx={{ pl: { xs: 1 }, pr: { xs: 1 } }}>
          <HeadingTwo id="heading-two" title="Introduction:" key="heading-two" />
          <Paragraph>
            Our Text to Image AI Converter utilizes advanced artificial intelligence algorithms to convert plain{" "}
            <B>text</B> into visually appealing <B>images</B>. Whether you are creating social media graphics,
            presentations, or artistic designs, our platform simplifies the conversion process, offering a seamless user
            experience.
          </Paragraph>
          <HeadingTwo id="heading-two" title="Instructions:" key="heading-two" />
          <List sx={{ listStyle: "square", listStylePosition: "outside" }}>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <Paragraph>
                  <B>Input Text</B>: Begin by entering your desired text into the designated input box. You can input
                  quotes, phrases, poems, or any text you want to visualize.
                </Paragraph>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <Paragraph>
                  <B>Select Style (Optional)*</B>: Explore different style options to customize the appearance of your
                  image. Our platform offers various styles, fonts, colors, and layouts to suit your preferences.
                </Paragraph>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <Paragraph>
                  <B>Adjust Settings (Optional)</B>: Fine-tune settings such as image size, background color, and text
                  alignment to achieve the desired look.
                </Paragraph>
              </ListItemText>
            </ListItem>

            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <Paragraph>
                  <B>Preview Image</B>: Before finalizing, preview the generated image to ensure it meets your
                  expectations. Make any necessary adjustments to optimize the visual output.
                </Paragraph>
              </ListItemText>
            </ListItem>

            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <Paragraph>
                  <B>Download Image</B>: Once satisfied with the preview, proceed to download the image in your
                  preferred format (e.g., JPG, PNG). Our platform ensures high-quality downloads for seamless
                  integration into your projects.
                </Paragraph>
              </ListItemText>
            </ListItem>

            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <Paragraph>
                  <B>Share and Save</B>: Share your created images on social media platforms or save them for future
                  use. Our platform supports easy sharing and storage options for convenient access.
                </Paragraph>
              </ListItemText>
            </ListItem>

            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <Paragraph>
                  <B>Explore Additional Features</B>: Discover additional features and tools available on our platform,
                  such as image editing capabilities, advanced customization options, and collaborative features for
                  team projects.
                </Paragraph>
              </ListItemText>
            </ListItem>

            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <Paragraph>
                  <B>Feedback and Support</B>: We value your feedback! Feel free to share your thoughts, and
                  suggestions, or report any issues you encounter while using our Text to Image AI Converter. Our
                  support team provides assistance and improves the user experience.
                </Paragraph>
              </ListItemText>
            </ListItem>

            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <Paragraph>
                  Experience the power of text visualization with our <B>Text to Image AI Converter</B>. Transform words
                  into captivating visuals and unleash your creativity today!
                </Paragraph>
              </ListItemText>
            </ListItem>
          </List>
          <HeadingTwo id="how" title="How to Use Text to Image AI Converter?" />
          <List sx={{ listStyle: "square", listStylePosition: "outside" }}>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <Paragraph>Input your desired text into the provided text box.</Paragraph>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <Paragraph>Explore various style options to customize the appearance of your image.</Paragraph>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <Paragraph>Adjust settings such as image size, background color, and text alignment.</Paragraph>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <Paragraph>Preview the generated image to ensure it meets your expectations.</Paragraph>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <Paragraph>Download the image in your preferred format (e.g., JPG, PNG).</Paragraph>
              </ListItemText>
            </ListItem>

            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <Paragraph>Share your created images on social media platforms or save them for future use.</Paragraph>
              </ListItemText>
            </ListItem>

            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <Paragraph>
                  Explore additional features such as image editing capabilities and advanced customization options.
                </Paragraph>
              </ListItemText>
            </ListItem>

            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <Paragraph>
                  Provide feedback or seek support from our dedicated team to enhance your experience.
                </Paragraph>
              </ListItemText>
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={0} sm={0.5} md={1} lg={1.5} border={0}>
          {/* Extra Space On The Right Side */}
        </Grid>
      </Grid>
    </>
  );
};

export default CentralContent;
