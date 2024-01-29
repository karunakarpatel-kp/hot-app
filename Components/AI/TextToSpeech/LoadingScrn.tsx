import { Box, CircularProgress, LinearProgress, Skeleton } from "@mui/material";
import React from "react";

const LoadingScrn = () => {
  return (
    <>
      <Box border={0} mb={3} mt={2}>
        <CircularProgress />
      </Box>
    </>
  );
};

export default LoadingScrn;
