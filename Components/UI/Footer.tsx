import { AppBar, Typography, Toolbar, Box, Stack, Icon, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0} component="footer">
          <Toolbar sx={{ minHeight: "54px", "&.MuiToolbar-root": { p: 0 } }}>
            <Grid container direction="row" spacing={0}>
              {/* Display the About me Section in the HomePage */}
              <Grid item xs={0.5} sm={0.5} md={1} lg={1.5}>
                {/* Extra Space On The Left Side */}
              </Grid>

              <Grid item xs={11} sm={11} md={10} lg={9} sx={{ pl: { xs: 1 }, pr: { xs: 2 } }}>
                {/* Center Container */}
                <Grid container>
                  <Grid item xs={12} sm={3} md={3} lg={3} border={0}>
                    <Box sx={{ display: { xs: "block", lg: "block", md: "block" }, ml: 0, mt: { xs: 1 } }}>
                      <Typography color="#ffffff" fontSize="medium">
                        @Karunakar Patel. All Rights Reserved
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} lg={6} border={0} mt={{ xs: 1, sm: 1, md: 0, lg: 0 }}>
                    <Stack
                      direction="row"
                      spacing={3}
                      sx={{ float: { xs: "none", sm: "none", md: "right", lg: "right" }, mt: { xs: 1 } }}
                    >
                      <Link href="/" style={{ color: "white", textDecorationColor: "white" }}>
                        Home
                      </Link>
                      <Link href="/contact" style={{ color: "white", textDecorationColor: "white" }}>
                        Contact Us
                      </Link>
                      <Link href="/privacy" style={{ color: "white", textDecorationColor: "white" }}>
                        Privacy Policy
                      </Link>
                      <Link href="/disclaimer" style={{ color: "white", textDecorationColor: "white" }}>
                        Disclaimer
                      </Link>
                    </Stack>
                  </Grid>

                  <Grid item xs={12} sm={3} md={3} lg={3} border={0} mt={{ xs: 1, sm: 1, md: 0, lg: 0 }}>
                    <Stack
                      direction="row"
                      spacing={3}
                      sx={{ float: { xs: "none", sm: "none", md: "right", lg: "right" }, mt: { xs: 1 } }}
                    >
                      <Link href="/">
                        <FacebookIcon sx={{ color: "#ffffff" }} />
                      </Link>
                      <Link href="/cars">
                        <TwitterIcon sx={{ color: "#ffffff" }} />
                      </Link>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={0.5} sm={0.5} md={1} lg={1.5}>
                {/* Extra Space On The Right Side */}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Footer;
