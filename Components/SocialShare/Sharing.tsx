import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  LineIcon,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import { BASE_URL } from "Essentials";

const Sharing = () => {
  const router = useRouter();
  const [grabbedTitle, setGrabbedTitle] = useState("");
  const [grabbedURL, setGrabbedURL] = useState("");

  useEffect(() => {
    const grabTitleID = document.getElementById("title");
    const grabTitle = grabTitleID!.innerText;
    setGrabbedTitle(grabTitle);
    setGrabbedURL(`${BASE_URL.HOME_PAGE_BASE_URL}` + router.route);
  }, []);

  return (
    <>
      <Stack direction="row" spacing={2} mt={3}>
        <FacebookMessengerShareButton appId="" url={grabbedURL} title={grabbedTitle}>
          <FacebookIcon size={30} />
        </FacebookMessengerShareButton>
        <WhatsappShareButton url={grabbedURL} title={grabbedTitle}>
          <WhatsappIcon size={30} />
        </WhatsappShareButton>
        <TwitterShareButton url={grabbedURL} title={grabbedTitle}>
          <TwitterIcon size={30} />
        </TwitterShareButton>
        <LinkedinShareButton url={grabbedURL} title={grabbedTitle}>
          <LinkedinIcon size={30} />
        </LinkedinShareButton>
        <EmailShareButton url={grabbedURL} title={grabbedTitle}>
          <EmailIcon size={30} />
        </EmailShareButton>
      </Stack>
    </>
  );
};

export default Sharing;
