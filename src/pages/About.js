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
  return (
    <>
      <Box
        justifyContent="left"
        alignItems="center"
        height="200px"
        sx={{
          pl: 5
        }}
      >
        <Grid container spacing={gridSpacing}>
          <Grid item xs={6} md={8}>
            <Box>
              <Typography variant="h2" gutterBottom>
                A little bit about me
              </Typography>
              <Typography variant="h4">
                I hold a B.S. in Biochemistry with a minor in Computer Science
                from Ithaca College. I have been involved in a variety of
                research projects ranging from biophysical protein
                characterization to translational medicine. I have published two
                academic papers, including a review article on cutaneous lupus
                and original research study of discoid lupus pathogenesis. My
                work has also included writing various Python tools for
                scientific applications.
              </Typography>
              <br />
              <br />
              <Typography variant="h5">
                I started my lab career as an undergraduate at Ithaca College in
                Dr. Jamie Ellis' lab. I studied a series of disorded protein
                domains from a group of <i>Arabidopsis thaliana </i>
                transcription factors known as the ARF family. The primary aim
                of the project was to find a relationship between primary
                sequence composition and biological function. We used a few
                fluorometry based techniques including fluorescence quenching
                taking advantage of an environmentally sensitive extrinsic
                fluorophore. I proposed a collaborative project to my computer
                science mentor Dr. Toby Dragon. With Dr. Ellis' and Dr. Dragon's
                guidence, I developed a framework using Python, known as Protein
                Analysis Manager or PAM, to quantify various biophysical
                characteristics of primary protein sequences. The basic workflow
                for PAM is as follows: load primary sequence from file or
                databases such as UniProt, create objects of the SeqRecord class
                from the Biopython package, send requests with primary sequence
                to external REST APIs for analysis and/or pass sequence to
                package functions for analysis, and allows for viewing output in
                the console and outputting data to files.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>
            <Citations data={pubData} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Home;
