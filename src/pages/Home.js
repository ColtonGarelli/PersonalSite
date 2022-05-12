import {useEffect, useState} from "react";
// import { gridSpacing } from "store/constant";

// material-ui
import {Container, Button, Box, Grid, Typography} from "@mui/material";
import Citations from "../components/Citations";

const Home = () => {
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
            <Typography variant="h2" gutterBottom>
              {" "}
              Hi! I'm Colton
            </Typography>
            <Typography variant="b1"> some other stuff here abut me</Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Citations />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Home;
