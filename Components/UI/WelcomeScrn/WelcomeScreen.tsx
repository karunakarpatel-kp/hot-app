import { Alert, Box, Grid, Paper } from "@mui/material";
import Image from "next/image";
import React from "react";

import WelcomeSVG from "@Public/welcome.svg";

interface WelcomeScreenProps {
  AlertMSG: string;
}

const WelcomeScreen = (props: WelcomeScreenProps) => {
  const { AlertMSG } = props;
  return (
    <>
      <Grid
        container
        direction="column"
        mt={2}
        component={Paper}
        elevation={0}
        minHeight={400}
        p={5}
        textAlign="center"
      >
        <Box margin="auto" mb={2}>
          <Image src={WelcomeSVG} width={300} height={300} alt="Hi" />
        </Box>

        <Alert severity="info" sx={{ width: { xs: 5 / 5, sm: 5 / 5, md: 4 / 5, lg: 4 / 5 }, margin: "auto" }}>
          {AlertMSG}
        </Alert>
      </Grid>
    </>
  );
};

export default WelcomeScreen;
