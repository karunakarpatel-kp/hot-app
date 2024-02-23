import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";

import { Divider, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

import coding from "@Public/coding.jpg";

import { Paragraph } from "@Elements/Paragraph/Paragraph";
import Subtitle from "@Elements/Subtitle/Subtitle";

import FullPageBlogPostLayout from "@Layout/FullPageBlogPostLayout";
import HeaderImageFullBlogPost from "@UI/ImageCards/HeaderImageFullBlogPost";
import HeaderSection from "@SEO/Head";
import LastUpdateTags from "@UI/LastUpdate&Tags/LastUpdateTags";
import HeadingOne from "@Elements/Headings/HeadingOne";
import Scrollspy from "react-scrollspy";
import HeadingTwo from "@Elements/Headings/HeadingTwo";
import HeadingThree from "@Elements/Headings/HeadingThree";
import HeadingFour from "@Elements/Headings/HeadingFour";
import HeadingFive from "@Elements/Headings/HeadingFive";
import HeadingSix from "@Elements/Headings/HeadingSix";
import Link from "next/link";
import SyntaxHighlight from "@SyntaxHighlighter/SyntaxHighlight";
import SandboxCode from "@Sandbox/SandboxCode";
import { HighlightText as B } from "@Components/SyntaxHighlighter/HighlightText";
import { Ccode as C } from "@Components/SyntaxHighlighter/Ccode";

import { NextPageWithLayout } from "../_app";
import {
  LineShareButton,
  LineIcon,
  FacebookMessengerShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "next-share";
import Sharing from "@Components/SocialShare/Sharing";
import { blogPostsObj, blogPostURLS, DateMonthYearForBlogPost, SEO_OBJ } from "Essentials";

import { CLink as Li } from "@Components/SyntaxHighlighter/CLink";

interface TableOfContentsListProps {
  id: string;
  title: string;
  targetElement: string;
}

interface ArticleDetailsListProps {
  id: string;
  title: string;
}

export const TableOfContentsList: TableOfContentsListProps[] = [
  { id: "1", title: "This Is One", targetElement: "lastItem" },
  { id: "2", title: "This Is Two", targetElement: "headingNumberOne" },
  { id: "3", title: "This Is Three", targetElement: "lastItem" },
];

export const ArticleDetailsList: ArticleDetailsListProps[] = [
  { id: "1", title: "Published By: Karunakar Patel" },
  { id: "2", title: "Last Updated On: Karunakar Patel" },
  { id: "3", title: "Read Time: 3mins" },
];

export const BlogPostTags: { id: string }[] = [{ id: "One" }];

export const code1 = `
            What is your project named? my-app 
            Would you like to use TypeScript? No / Yes 
            Would you like to use ESLint? No / Yes 
            Would you like to use Tailwind CSS? No / Yes 
            Would you like to use src/ directory? No / Yes 
            Would you like to use App Router? (recommended) No / Yes 
            Would you like to customize the default import alias (@/*)? No / Yes 
            What import alias would you like configured? @/*
            `;
export const code2 = `{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}`;

export const code3 = `export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}`;

export const code4 = `export default function Page() {
  return <h1>Hello, Next.js!</h1>
}`;

const NextjsInstallation: NextPageWithLayout = () => {
  const scrollIntoView = () => {
    window.scrollTo({
      top: 0,
      left: window.innerHeight,
      behavior: "smooth",
    });
  };

  const pageUrl = useRouter();
  const url = "https://www.karunakarpatel.com";
  const completeURL = url + pageUrl.asPath;

  return (
    <>
      <HeaderSection
        title={SEO_OBJ.NEXTJS_INSTALLATION.title}
        description={SEO_OBJ.NEXTJS_INSTALLATION.description!}
        image={SEO_OBJ.NEXTJS_INSTALLATION.featuredImage}
        url={SEO_OBJ.NEXTJS_INSTALLATION.absoluteURL}
        publishedTime={SEO_OBJ.NEXTJS_INSTALLATION.publishedTime}
        lastUpdatedTime={SEO_OBJ.NEXTJS_INSTALLATION.lastUpdateTime}
      />

      <Box sx={{ mt: { xs: 1, sm: 1, md: 4, lg: 4 } }}>{/* Added Extra Space Under Toolbar */}</Box>

      <Grid container direction="row" sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}>
        <Grid item md={10} lg={8}>
          <HeadingOne title={SEO_OBJ.NEXTJS_INSTALLATION.title} id="title" />
          <Subtitle text={SEO_OBJ.NEXTJS_INSTALLATION.description!} />
          <LastUpdateTags
            lastUpdatedTime={DateMonthYearForBlogPost(SEO_OBJ.NEXTJS_INSTALLATION.lastUpdateTime)}
            tags={SEO_OBJ.NEXTJS_INSTALLATION.tags!}
          />
          {/* Image For Desktop Screens */}
          <HeaderImageFullBlogPost
            image={SEO_OBJ.NEXTJS_INSTALLATION.featuredImage}
            alt={SEO_OBJ.NEXTJS_INSTALLATION.featuredImageAltText}
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
          <Paragraph id="introduction">
            Hi, in this article you will learn how to <B>install</B> the <B>next.js</B> react framework in a
            step-by-step manner. In the evolving landscape of web development, staying ahead of the software curve is
            essential. No matter what, whether you are a seasoned or aspiring coder, Next.js is the name that you should
            become intimately familiar with.
          </Paragraph>
          <Paragraph>
            As a software engineer and a programming blogger, I have had the privilege of witnessing the Nextjs rise in
            the software industry. In this article, I want to take you on a journey through the remarkable framework
            which we lean into its core concepts, advantages, its disadvantages and mostly explore why it is a game
            changer in the software industry and even get our hands dirty with the <B>installation</B> and initial setup
            of Next js framework.
          </Paragraph>

          <HeadingTwo id="what_is_next.js" title="What is Next.js?" />
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Paragraph>
                Nextjs is a popular framework for building full-stack web applications, particularly React-based
                applications which was developed and maintained by Vercel. Next.js simplifies the process of building
                modern, server-rendered react applications or statically-generated applications which include some key
                concepts like{" "}
                <Li
                  href="https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering"
                  text="server-side rendering (SSR),"
                />
                <Li
                  href="https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation"
                  text="static site generation(SSG),"
                />
                Routing, Inbuilt styling, SEO, Optimization, etc... and mostly supports Typescript.
              </Paragraph>
            </Grid>
            {/* <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box minHeight={300} bgcolor="lightgrey"></Box>
            </Grid> */}
          </Grid>
          <Paragraph text="Okay, now let's get our hands dirty with the installation of Next.js." />

          {/* SECOND HEADING */}
          <HeadingTwo id="install_next.js" title="Install Next.js" />

          <Paragraph>
            To <B>install Next.js</B>, you need to have Node.js installed on your local machine. Make sure that you have
            the <B>latest LTS version of node.js</B>. To check the version of node.js just type <C>node -v</C> in your
            terminal and compare the version with the LTS version listed on the Node.js official website.
          </Paragraph>
          <Paragraph>
            After installing node.js, you will have the npm command available in the command line, where we use{" "}
            <B>npm</B> to install all the required libraries.
          </Paragraph>

          <Paragraph>
            Before getting, there are two ways in which we can install Next.js, one is the
            <B>automatic Installation </B>and the other is <B>manual Installation</B>. Both work in the same way. The
            automatic installation will complete all the setup by one single command whereas less manual installation
            will complete by two to three commands. Its up to you which installation method you choose, either way in
            this article I will explain both ways of installation methods.
          </Paragraph>

          <Paragraph text="Let's dig into Automatic Installation of Next.js " />

          <HeadingThree id="automatic_installation_of_next.js" title="Automatic Installation of Next.js" />

          <Paragraph>
            Just to start a new Next.js app use the command <C>create-next-app</C>, which sets all the required
            libraries automatically for you. Just run the below command
          </Paragraph>

          <SyntaxHighlight>npx create-next-app@latest</SyntaxHighlight>

          <Paragraph>
            If you face any error with the <C>npx</C> command, then try to install <C>npx</C> in your local machine by
            command <C>npm install -g npx </C> which helps to install <C>npx</C> globally, and rerun the above command
            to restart installation.
          </Paragraph>

          <Paragraph>During the installation process, you will see the following prompts in the command line</Paragraph>

          <SyntaxHighlight>{code1}</SyntaxHighlight>

          <HeadingFour id="manual_installation_of_next.js" title="Manual Installation of Next.js" />

          <Paragraph text="To manually install the Next.js application, just install the required packages by below command " />

          <SyntaxHighlight>npm install next@latest react@latest react-dom@latest</SyntaxHighlight>

          <Paragraph text="This will create a folder, then open the package.json file copy and paste the following scripts" />

          <SyntaxHighlight>{code2}</SyntaxHighlight>

          <HeadingFour id="create_app_directory" title="Create app directory" />

          <Paragraph>
            In this whole Next.js application, there were two <B>App Router</B> and <B>Pages Router</B> available to
            organize the application folder structure and navigate between the pages. It is recommended to{" "}
            <B>use App Router</B> if you are working on a new Next.js application.
          </Paragraph>

          <Paragraph>
            Create an app/ folder, then add a <C>layout.tsx</C> and <C>page.tsx</C> file. These will be rendered when
            the user visits the root of your application (/) as a landing page.
          </Paragraph>

          <Paragraph>
            Create a root layout inside <C>app/layout.tsx</C> with the required <C>html</C> and <C>body</C> tags as
            shown below
          </Paragraph>

          <SyntaxHighlight>{code3}</SyntaxHighlight>

          <Paragraph>
            Then create a home page <B>app/page.tsx</B> with some content in it. Here the naming conventions are much
            more important.
          </Paragraph>

          <SyntaxHighlight>{code4}</SyntaxHighlight>
          <Paragraph>
            All the above steps would be an example of an <Li href="https://nextjs.org/docs/app" text="App Router." />
            To learn more and play around with <B>App Router</B> in here(using the App Router).
          </Paragraph>

          <Paragraph>
            As, of now we have successfully completed all the required steps. Now, let run the development server
          </Paragraph>

          <HeadingThree id="run_the_development_server_of_next.js" title="Run the development server of Next.js:" />

          <Paragraph>
            Run <C>npm run dev</C> to start the development server, then visit <C>http://localhost:3000</C> to view the
            Next.js application in the browser. Feel free to edit <C>app/layout.tsx</C> or <C>pages/index.tsx</C> file
            to see the updated changes in your browser.
          </Paragraph>

          <HeadingThree id="frequently_asked_questions" title="Frequently asked questions" />

          <HeadingFour title="What is Next.js?" />
          <Paragraph>
            Next.js is a powerful open-source React framework designed to streamline web application development. It
            combines the benefits of <B>server-side rendering (SSR)</B> and <B>static site generation (SSG)</B>,
            improving performance and <B>SEO</B>. Developers appreciate its intuitive file-based routing, automatic code
            splitting, built-in API route creation, simplifying project structure, built-in Styling, etc... This
            framework is recognized for its developer friendliness and capability to build high-performing web
            experiences.
          </Paragraph>

          <HeadingFour title="What is eslint in Next.js?" />
          <Paragraph>
            <B>ESLint</B> can help Next.js developers maintain consistent code formatting, attach to coding standards,
            and catch common programming mistakes. It can be configured with specific rules and configurations, which
            can be tailored to meet the coding standards and best practices of a particular project or organization. By
            integrating <a href="https://nextjs.org/docs/app/building-your-application/configuring/eslint">ESLint</a>
            into a Next.js project, developers can ensure that their codebase remains clean, readable, and free from
            common coding errors. This can enhance code quality, collaboration among team members, and overall project
            maintainability.
          </Paragraph>

          <HeadingFour title="Why use Next.js?" />
          <Paragraph>
            <B>Next.js</B> is a popular choice for web development for several reasons which include improved
            performance, developer productivity, SEO-friendly, Automatic code splitting, Rich Ecosystem, CSS Handling,
            API Routes, and Security.
          </Paragraph>

          <HeadingFour title="Is Next.js frontend or backend?" />

          <Paragraph>
            <B>Next.js</B> is primarily a frontend framework, but it has features that blur the lines between frontend
            and backend development. It often used to build the front end of web applications.
          </Paragraph>

          <Paragraph>
            However, Next.js also supports{" "}
            <Li
              text="server-side rendering (SSR)"
              href="https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering"
            />{" "}
            and serverless functions through its API routes, which can be used for backend-related tasks. These features
            allow developers to build parts of the backend logic within the Next.js application. Its especially useful
            for handling server-side rendering, routing, and APIs, effectively making <B>Next.js</B> a full-stack
            solution for many web applications.
          </Paragraph>

          <Paragraph>
            In summary, <B>Next.js</B> is a frontend framework, but it has the flexibility to handle certain backend
            tasks, making it a popular choice for building full-stack web applications.
          </Paragraph>

          <HeadingFour title="Why Next.js app is good for SEO?" />

          <Paragraph>
            <B>Next.js</B> is well regarded for its SEO capabilities due to several features that improve a websites
            search engine visibility which include, Server-side rendering, Fast initial page load, Dynamic meta tags,
            structured data support, Mobile Optimization, etc... Next.js simplifies the process of creating SEO friendly
            web application.
          </Paragraph>

          <HeadingFour title="Why use Next.js over React js?" />

          <Paragraph>
            <B>Next.js</B> and React are not direct competitors but rather complementary technologies. React is a
            JavaScript library for building user interfaces, while Next.js is a framework built on top of React. Your
            choice between the two depends on the specific requirements and goals of your web application.
          </Paragraph>
        </Grid>

        <Grid item md={4} lg={4} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}>
          <Box position="sticky" top={70}>
            {/* <Stack direction="column" spacing={1}>
              <TableOfContents TableOfContentsList={TableOfContentsList} />
              <ArticleDetails ArticleDetailsList={ArticleDetailsList} />
            </Stack> */}
            <Box mb={1} pl={2}>
              <Typography variant="body2" fontSize="large">
                CONTENTS
              </Typography>
            </Box>
            <Box pl={2}>
              <Scrollspy
                items={[
                  "introduction",
                  "what_is_next.js",
                  "install_next.js",
                  "automatic_installation_of_next.js",
                  "manual_installation_of_next.js",
                  "create_app_directory",
                  "run_the_development_server_of_next.js",
                  "frequently_asked_questions",
                  "discussions",
                ]}
                currentClassName="activeScrollItem"
                componentTag="ol"
                style={{ listStyle: "none" }}
              >
                <li className="listItemContent">
                  <a href="#introduction" onClick={scrollIntoView} className="listItemLinkContent">
                    Introduction
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#what_is_next.js" onClick={scrollIntoView} className="listItemLinkContent">
                    What is Next.js?
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#install_next.js" onClick={scrollIntoView} className="listItemLinkContent">
                    Install Next.js
                  </a>
                </li>
                {/* Inner Container */}
                <li className="listItemContent inside_ele">
                  <a href="#automatic_installation_of_next.js" onClick={scrollIntoView} className="listItemLinkContent">
                    Automatic installation of Next.js
                  </a>
                </li>

                <li className="listItemContent inside_ele">
                  <a href="#manual_installation_of_next.js" onClick={scrollIntoView} className="listItemLinkContent">
                    Manual installation of Next.js
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#create_app_directory" onClick={scrollIntoView} className="listItemLinkContent">
                    Create App Directory
                  </a>
                </li>
                <li className="listItemContent">
                  <a
                    href="#run_the_development_server_of_next.js"
                    onClick={scrollIntoView}
                    className="listItemLinkContent"
                  >
                    Run the development server
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#frequently_asked_questions" onClick={scrollIntoView} className="listItemLinkContent">
                    Frequently Asked Questions
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#discussions" onClick={scrollIntoView} className="listItemLinkContent">
                    Discussions
                  </a>
                </li>
              </Scrollspy>

              {/* Social Sharing Icons Are below */}
              <Box>
                <Sharing />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default NextjsInstallation;

NextjsInstallation.getLayout = function getLayout(page) {
  return (
    <>
      <FullPageBlogPostLayout>{page}</FullPageBlogPostLayout>
    </>
  );
};
