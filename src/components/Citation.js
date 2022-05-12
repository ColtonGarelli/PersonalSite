import {
  Grid,
  Box,
  AvatarGroup,
  Typography,
  CardMedia,
  Card,
  CardContent,
  Avatar,
  CardHeader,
  CardActions,
  Button,
  Percentage
} from "@mui/material";

import {useTheme, alpha, styled} from "@mui/material/styles";

import {useState, useEffect} from "react";

// const CitationContent = ({rows, theme}) => (
//   <Grid container direction="column">
//     <Grid item>
//       <Typography variant="h4" color={theme.palette.secondary}>
//         sometin
//       </Typography>
//     </Grid>
//
//     <Grid item>
//       <Typography variant="h4" color={theme.palette.secondary}>
//         sometin
//       </Typography>
//     </Grid>
//     <Grid item>
//       <Typography variant="h4" color={theme.palette.secondary}>
//         sometin{" "}
//       </Typography>
//     </Grid>
//     <Grid item>
//       <Typography variant="h4" color={theme.palette.secondary}>
//         sometin{" "}
//       </Typography>
//     </Grid>
//   </Grid>
// );

const Citation = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          background: "gray",
          overflow: "hidden",
          position: "relative",
          // overflowY: "scroll",

          variant: "outlined",
          maxHeight: 250,
          margin: theme.spacing(4),
          p: 3,
          borderRadius: 4
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h3" color="inherit">
                  fff{" "}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5" color="inherit">
                  fff{" "}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Button
          size="small"
          variant="outlined"
          sx={{
            color: "#fff",
            backgroundColor: theme.palette.primary
          }}
        >
          More
        </Button>
      </Box>
    </>
  );
};
export default Citation;
