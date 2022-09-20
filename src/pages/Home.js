import {useEffect, useState} from "react";
// import { gridSpacing } from "store/constant";
import {useTheme} from "@mui/material/styles";

// material-ui
import {
  Container,
  Button,
  Box,
  Grid,
  Typography,
  useMediaQuery
} from "@mui/material";
import Citations from "../components/Citations";
import PerfectScrollbar from "react-perfect-scrollbar";
import Slide from "../components/Slide";
import HomeCard from "../components/HomeCards";

const Home = () => {
  const matchUpMd = useMediaQuery("900px");
  const theme = useTheme();
  const pubData = [
    {
      title: "Github",
      description: "https://github.com/ColtonGarelli",
      link: "https://github.com/ColtonGarelli"
    },
    {
      title: "LinkedIn",
      description: "https://www.linkedin.com/in/colton-garelli",
      link: "https://www.linkedin.com/in/colton-garelli/"
    },
    {
      title: "Orchid",
      description: "https://orcid.org/0000-0003-0225-7910",
      link: "https://orcid.org/0000-0003-0225-7910"
    }
  ];
  const gridSpacing = 5;
  const cardData = {
    github: {
      projects: {
        pam: {
          link: "something",
          title: "ProteinAnalysisManager",
          shortdesc: "short descriptionhere",
          fulldesc: "full descriptionhere",
          account: "https://github.com/ColtonGarelli"
        },
        vizxpress: {
          link: "something",
          title: "vizxpress",
          shortdesc:
            "A simple Python library for gene expression visualization",
          fulldesc: "full descriptionhere",
          account: "https://github.com/ColtonGarelli"
        },
        cle: {
          link: "https://github.com/ColtonGarelli/PersonalSite",
          title: "Portfolio website",
          shortdesc: "My portfolio website Github repository",
          fulldesc:
            "My portfolio website created with React and MaterialUI. A heavily modified version of Berry Dashboard",
          account: "https://github.com/ColtonGarelli"
        }
      }
    },
    pubs: {
      projects: {
        canineDLE: {
          link: "https://doi.org/10.1016/j.crimmu.2021.03.003",
          title: "Canine DLE",
          shortdesc:
            "A multi-species study of discoid lupus erythmatosus (DLE)",
          fulldesc:
            "Discoid lupus erythmatosus (DLE) is a cutaneous autoimmune disease that occurs in humans and canines, and ",
          account: "https://orcid.org/0000-0003-0225-7910"
        },
        reviewCLE: {
          link: "https://doi.org/10.3389/fimmu.2020.01353",
          title: "CLE review",
          shortdesc: "",
          fulldesc: "",
          account: "https://orcid.org/0000-0003-0225-7910"
        }
      }
    }
  };

  console.log(window);

  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={6}>
          <Box
            justifyContent="center"
            alignItems="center"
            sx={{
              pl: 5
            }}
          >
            <Typography variant="h2" gutterBottom>
              Hello! My name is Colton Garelli.
            </Typography>
            <Typography variant="h3" gutterBottom>
              I have a B.S. in Biochemstry, Minor in Computer Science.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <HomeCard props={cardData} />
        </Grid>
      </Grid>
    </>
  );
};
export default Home;
