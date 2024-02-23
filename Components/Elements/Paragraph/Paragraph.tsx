import { Typography } from "@mui/material";
import React, { ReactNode } from "react";

// Most of the time Variants accepts body2 and subtitle2

interface ParagraphProps {
  id?: string;
  text?: string | ReactNode;
  variant?: string;
  children?: string | JSX.Element | JSX.Element[] | string[] | (string | JSX.Element)[];
}

export const Paragraph = (props: ParagraphProps) => {
  const { id, text, variant, children } = props;
  return (
    <>
      <Typography variant="brandParagraph" mb={3} id={id ? id : ""}>
        {text || children}
      </Typography>
    </>
  );
};

// export default Paragraph;
