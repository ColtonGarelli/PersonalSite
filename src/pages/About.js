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
                Hello! My name is Colton Garelli
              </Typography>
              <Typography variant="h4">
                Lorem ipsum dolor si amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ultrices gravida dictum fusce ut. Sociis natoque penatibus et
                magnis dis parturient. Lectus nulla at volutpat diam ut
                venenatis tellus in metus. Pellentesque eu tincidunt tortor
                aliquam nulla facilisi cras.
              </Typography>
              <br />
              <br />
              <Typography variant="h5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ultrices gravida dictum fusce ut. Sociis natoque penatibus et
                magnis dis parturient. Lectus nulla at volutpat diam ut
                venenatis tellus in metus. Pellentesque eu tincidunt tortor
                aliquam nulla facilisi cras. Mi bibendum neque egestas congue.
                Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus
                urna. Nibh ipsum consequat nisl vel pretium lectus quam id.
                Faucibus turpis in eu mi bibendum neque egestas congue. At
                elementum eu facilisis sed odio morbi quis commodo. Magna etiam
                tempor orci eu lobortis. Id diam maecenas ultricies mi. Diam
                sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Donec et
                odio pellentesque diam. Urna nunc id cursus metus aliquam.
                Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus.
                Sit amet facilisis magna etiam tempor. Quis ipsum suspendisse
                ultrices gravida dictum. Convallis aenean et tortor at risus
                viverra. In egestas erat imperdiet sed. Faucibus nisl tincidunt
                eget nullam. Ac feugiat sed lectus vestibulum mattis ullamcorper
                velit sed ullamcorper. Ut eu sem integer vitae justo eget.
                Volutpat maecenas volutpat blandit aliquam etiam erat. Gravida
                cum sociis natoque penatibus et magnis. Sem nulla pharetra diam
                sit amet nisl suscipit adipiscing bibendum. Elit eget gravida
                cum sociis natoque penatibus et magnis. Feugiat nibh sed
                pulvinar proin gravida hendrerit lectus a. Mollis nunc sed id
                semper risus in hendrerit. Consectetur adipiscing elit
                pellentesque habitant. Tellus pellentesque eu tincidunt tortor
                aliquam nulla facilisi cras. Egestas congue quisque egestas diam
                in arcu cursus euismod quis. Neque volutpat ac tincidunt vitae
                semper quis. Quam viverra orci sagittis eu volutpat odio
                facilisis mauris. Pulvinar mattis nunc sed blandit libero.
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
