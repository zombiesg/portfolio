import React, { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ProjectCard from "./components/ProjectCard";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
//https://stackoverflow.com/questions/52472372/responsive-typography-in-mui
//https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing
import { ConfigTypes } from "./types/configTypes";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const fontName = createTheme({
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
});

function App() {
  const [config, setConfig] = useState<ConfigTypes | undefined>();

  useEffect(() => {
    if (config === undefined) {
      (async function () {
        let url =
          "https://github.com/zombiesg/portfolio/blob/main/public/config.json";
        const response = await fetch(url);
        const data = await response.json();
        setConfig(data);
      })();
    }
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Container fixed>
        <Box sx={{ minHeight: "100vh" }}>
          <ThemeProvider theme={fontName}>
            <Typography
              gutterBottom
              sx={{
                paddingTop: "10%",
                color: "#747fe0",
                typography: { xs: "h2", sm: "h1" },
              }}
            >
              {config?.personal.name}
            </Typography>
          </ThemeProvider>
          <Typography
            gutterBottom
            sx={{ textAlign: "justify", typography: { xs: "body1", sm: "h6" } }}
          >
            {config?.personal.desc}
          </Typography>
          <Typography
            align="center"
            sx={{ paddingTop: "12%" }}
            variant="body1"
            gutterBottom
          >
            (Keep scrolling)
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <KeyboardDoubleArrowDownIcon style={{ fontSize: 32 }} />
          </Box>
        </Box>
        <Box
          sx={{
            paddingTop: "8vh",
            paddingBottom: "8vh",
          }}
        >
          <Typography
            align="center"
            variant="h3"
            gutterBottom
            sx={{
              paddingBottom: "8vh",
              textDecoration: "underline",
              textUnderlineOffset: "50%",
              color: "#747fe0",
            }}
            style={{
              textDecorationColor: "#ffffff",
            }}
          >
            Projects
          </Typography>

          <Grid container spacing={2}>
            {config?.project.map((item, i) => {
              return (
                <Grid item xs={12} key={i}>
                  <ProjectCard item={item} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <Box
          sx={{
            paddingTop: "8vh",
            paddingBottom: "8vh",
          }}
        >
          <Typography
            align="center"
            variant="h3"
            gutterBottom
            sx={{
              paddingBottom: "8vh",
              textDecoration: "underline",
              textUnderlineOffset: "50%",
              color: "#747fe0",
            }}
            style={{
              textDecorationColor: "#ffffff",
            }}
          >
            Contact
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ paddingX: "20%" }}
            justifyContent={"center"}
          >
            <Grid item>
              <IconButton
                aria-label="Github"
                href="https://github.com/zombiesg"
                target="_blank"
              >
                <GitHubIcon style={{ fontSize: 64 }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/steven-heryanto-459ab925b"
                target="_blank"
              >
                <LinkedInIcon style={{ fontSize: 64 }} />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
