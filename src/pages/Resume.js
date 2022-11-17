import {useEffect, useState} from "react";
// import { gridSpacing } from "store/constant";
import {useTheme} from "@mui/material/styles";

// material-ui
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Divider,
  Container,
  Button,
  Box,
  Grid,
  Typography,
  useMediaQuery
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Citations from "../components/Citations";
import PerfectScrollbar from "react-perfect-scrollbar";
import ResumeCard from "../components/ResumeCards";
import MainCard from "../components/cards/MainCard";

const Resume = () => {
  const matchUpMd = useMediaQuery("900px");
  const theme = useTheme();
  console.log(theme);
  const pubData = {
    github: {
      title: "Github",
      account: "https://github.com/ColtonGarelli",
      link: "https://github.com/ColtonGarelli"
    },
    linkedin: {
      title: "LinkedIn",
      account: "https://www.linkedin.com/in/colton-garelli",
      link: "https://www.linkedin.com/in/colton-garelli/"
    },
    orchid: {
      title: "Orchid",
      account: "https://orcid.org/0000-0003-0225-7910",
      link: "https://orcid.org/0000-0003-0225-7910"
    }
  };
  const rezInfo = {
    work: [
      {
        title: "Lab Technician 1",
        dates: "January 2019 - January 2021",
        location: "University of Massachusetts Medical School",
        description: `Processed raw gene expression data from a variety of platforms including NGS, NanoString, and microarray using standard R
packages. Used Python to perform enrichment analysis and generate a variety of visualizations including network graphs.
Utilized Jupyter notebooks to consolidate R and Python analyses into one environment. Wrote generalized Python scripts to
automate flow cytometry, qPCR, and ELISA sample preparation using the Opentrons OT2 automated liquid handler. Created a
GUI to map samples and reagents for each type of experiment which standardized and simplified use. Performed a variety of wet
lab experiments including western blot, qPCR, and high-dimensional flow cytometry on primary human and mouse tissues.`,
        bullets: [
          "Created Python tools for gene expression data intended for ease of use by those with little coding experience",
          "Wrote scripts to operate the OT2 automated liquid handler and a Qt GUI to define liquids for plates and tubes",
          "Analyzed high-dimensional data including Aurora flow cytometry and single-cell RNA-seq in FlowJo and R",
          "Performed a variety of computational analyses including pathway analysis, PPI and protein-drug interactions",
          "Audited the Advanced Topics in Bioinformatics BBS741 which covered machine learning concepts in bioinformatics"
        ]
      },
      {
        title: "Summer Research Assistant",
        location: "Ithaca College",
        dates: "May 2017—Aug. 2017"
      }
    ],
    school: {
      title:
        "Bachelor of Science in Biochemistry and Minor in Computer Science",
      location: "Ithaca College, Ithaca, New York",
      dates: "May 2018"
    },
    research: {
      title: "Computer Science & Chemistry Depts, Ithaca College",
      location: "Advisors: J. Ellis, T. Dragon",
      dates: "May 2017—May 2018",
      description: `Investigated the physical properties of a group of disordered constructs via time-resolved and steady-state fluorescence
quenching. Developed methods to describe and compare disordered domains involved in transcription. Developed the Sequence
Analyzer, a Python-based framework to integrate remote and local analysis tools for statistical and biophysical analysis. The
program supports: querying UniProt, identifying sequence patterns, and communicating with biophysical prediction servers.`
    },
    skills: {
      description: `Python, R, Javascript, Jupyter, ReactJS, Dash, Qt, Github, unit testing, REST and GraphQL APIs, data analysis (Numpy, Pandas),
data visualization (Matplotlib, Seaborn, ggplot, Plotly), data management, basic machine learning (tensorflow), Microsoft Office`
    },
    projects: {
      description: `ProteinAnalysisManager, vizxpress, PlatePlotter/OT2 scripts`
    }
  };
  const gridSpacing = 5;
  return (
    <>
      <Box>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Box
              component="header"
              justifyContent="left"
              alignItems="center"
              height="300px"
              sx={{backgroundColor: theme.palette.primary.main, p: 5}}
            >
              <Typography
                variant="h1"
                color={theme.palette.background.paper}
                gutterBottom
              >
                Colton Garelli
              </Typography>
              <Typography
                variant="h4"
                color={theme.palette.background.paper}
                gutterBottom
              >
                B.S. Biochemistry Minor in Computer Science, Ithaca College
              </Typography>
              <Typography
                variant="subtitle1"
                color={theme.palette.background.paper}
                gutterBottom
              >
                Research lab technician with lab and coding skills.
              </Typography>
            </Box>
          </Grid>
          <Box
            justifyContent="left"
            alignItems="center"
            height="200px"
            sx={{
              pl: 5
            }}
          >
            <Grid item xs={12} md={12}>
              <Box
                sx={{
                  pt: 5,
                  width: "100%",
                  maxWidth: "100%",
                  bgcolor: "background.paper"
                }}
              >
                <br />
                <Divider />
                <Typography
                  pt={3}
                  variant="h4"
                  color={theme.palette.primary.dark}
                  gutterBottom
                >
                  Education
                </Typography>
                <Grid container justifyContent="space-between" xs={12}>
                  <Typography
                    inline
                    gutterBottom
                    color={theme.palette.primary.main}
                    variant="subtitle1"
                  >
                    {rezInfo.school.title + "  |  " + rezInfo.school.location}
                  </Typography>
                  <Typography
                    inline
                    color={theme.palette.primary.main}
                    variant="subtitle1"
                    gutterBottom
                  >
                    {rezInfo.school.dates}
                  </Typography>
                </Grid>
                <br />
                <Divider />
                <Typography
                  pt={3}
                  variant="h4"
                  color={theme.palette.primary.dark}
                  gutterBottom
                >
                  Employment
                </Typography>

                {rezInfo?.work.map(data => {
                  console.log(data);

                  return (
                    <>
                      <Grid container justifyContent="space-between" xs={12}>
                        <Typography
                          inline
                          gutterBottom
                          color={theme.palette.primary.main}
                          variant="subtitle1"
                        >
                          {data.title + "  |  " + data.location}
                        </Typography>
                        <Typography
                          inline
                          color={theme.palette.primary.main}
                          variant="subtitle1"
                          gutterBottom
                        >
                          {data.dates}
                        </Typography>
                        {data.description ? (
                          <Typography
                            inline
                            gutterBottom
                            color={theme.palette.primary.main}
                            variant="body1"
                          >
                            {data.description}
                          </Typography>
                        ) : (
                          ""
                        )}
                        {data.bullets ? (
                          <List sx={{listStyleType: "disc", pl: 10}}>
                            {data.bullets.map(bullet => {
                              return (
                                <ListItem
                                  disablePadding
                                  sx={{display: "list-item"}}
                                >
                                  <ListItemText
                                    primary=<Typography
                                      color={theme.palette.primary.main}
                                    >
                                      {bullet}
                                    </Typography>
                                  />
                                </ListItem>
                              );
                            })}
                          </List>
                        ) : (
                          ""
                        )}{" "}
                      </Grid>
                    </>
                  );
                })}
              </Box>
              <br />
              <Divider />
              <Grid item xs={6} md={12}>
                <Typography
                  pt={3}
                  variant="h4"
                  color={theme.palette.primary.dark}
                  gutterBottom
                >
                  Research Experience
                </Typography>
                <Grid container justifyContent="space-between" xs={12}>
                  <Typography
                    inline
                    gutterBottom
                    color={theme.palette.primary.main}
                    variant="subtitle1"
                  >
                    {rezInfo.research.title +
                      "  |  " +
                      rezInfo.research.location}
                  </Typography>
                  <Typography
                    inline
                    color={theme.palette.primary.main}
                    variant="subtitle1"
                    gutterBottom
                  >
                    {rezInfo.research.dates}
                  </Typography>

                  <Typography
                    inline
                    gutterBottom
                    color={theme.palette.primary.main}
                    variant="body1"
                  >
                    {rezInfo.research.description}
                  </Typography>
                </Grid>
              </Grid>{" "}
              <br />
              <Divider />
              <Grid item xs={6} md={12}>
                <Typography
                  pt={3}
                  variant="h4"
                  color={theme.palette.primary.dark}
                  gutterBottom
                >
                  Skills
                </Typography>
                <Typography
                  inline
                  gutterBottom
                  color={theme.palette.primary.main}
                  variant="body1"
                >
                  {rezInfo.skills.description}
                </Typography>
              </Grid>{" "}
              <br />
              <Divider />
              <Grid item xs={6} md={12}>
                <Typography
                  pt={3}
                  variant="h4"
                  color={theme.palette.primary.main}
                  gutterBottom
                >
                  Projects
                </Typography>
                <Typography
                  inline
                  gutterBottom
                  color={theme.palette.primary.main}
                  variant="body1"
                >
                  {rezInfo.projects.description}
                </Typography>
              </Grid>{" "}
              <br />
              <br /> <br />
            </Grid>
          </Box>
        </Grid>
      </Box>
    </>
  );
};
export default Resume;
