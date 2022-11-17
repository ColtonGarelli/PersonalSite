import {useEffect, useState} from "react";
// import { gridSpacing } from "store/constant";
// material-ui
import {Container, Button, Box, Grid, Typography} from "@mui/material";
import Citations from "../components/Citations";
import Publication from "../components/Publication";
import samplePDF from "../assets/pdfs/sample.pdf";
import sharedSigs from "../assets/pdfs/shared_inflammatory_sigs.pdf";

import cutaneousLupusRev from "../assets/pdfs/Current Insights in Cutaneous Lupus Erythematosus Immunopathogenesis.pdf";
const Pubs = () => {
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
          <Grid item xs={12} md={12}>
            <Publication pub={{samplePDF, sharedSigs, cutaneousLupusRev}} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Pubs;
