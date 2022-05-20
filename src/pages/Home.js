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
            <Box>
              <Typography variant="h2" gutterBottom>
                Hi! I'm Colton
              </Typography>
              <Typography variant="b1">
                {" "}
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
                Lobortis feugiat vivamus at augue eget arcu dictum. Ullamcorper
                morbi tincidunt ornare massa eget egestas purus. Cursus risus at
                ultrices mi tempus imperdiet nulla. Augue lacus viverra vitae
                congue eu. Urna nec tincidunt praesent semper feugiat nibh.
                Tincidunt lobortis feugiat vivamus at augue eget arcu dictum.
                Odio morbi quis commodo odio aenean sed adipiscing. Purus in
                massa tempor nec feugiat nisl pretium fusce id. In vitae turpis
                massa sed elementum. Fermentum dui faucibus in ornare.
                Pellentesque habitant morbi tristique senectus et netus et. Sed
                faucibus turpis in eu mi bibendum neque egestas. Nibh tellus
                molestie nunc non blandit. Cras adipiscing enim eu turpis
                egestas pretium aenean pharetra. Maecenas sed enim ut sem. Erat
                nam at lectus urna. Facilisis mauris sit amet massa vitae tortor
                condimentum lacinia quis. Hac habitasse platea dictumst quisque
                sagittis purus sit. Morbi tristique senectus et netus et
                malesuada fames ac turpis. Massa eget egestas purus viverra
                accumsan in nisl. Ac tortor dignissim convallis aenean. Netus et
                malesuada fames ac turpis egestas. Consectetur lorem donec massa
                sapien faucibus et molestie ac feugiat. Integer enim neque
                volutpat ac tincidunt vitae. Consectetur adipiscing elit duis
                tristique. Eget nunc lobortis mattis aliquam. Egestas pretium
                aenean pharetra magna ac. Pretium aenean pharetra magna ac
                placerat vestibulum lectus mauris. Ullamcorper a lacus
                vestibulum sed arcu non. Faucibus in ornare quam viverra orci.
                Senectus et netus et malesuada fames ac turpis. Aenean et tortor
                at risus viverra adipiscing at. Nam aliquam sem et tortor
                consequat id. Pharetra sit amet aliquam id diam maecenas.
                Imperdiet nulla malesuada pellentesque elit eget gravida. Nibh
                mauris cursus mattis molestie a. Ut eu sem integer vitae justo
                eget magna fermentum iaculis. Fringilla urna porttitor rhoncus
                dolor purus non enim praesent. Ut sem viverra aliquet eget sit
                amet tellus. At risus viverra adipiscing at in tellus integer
                feugiat. Eu sem integer vitae justo eget. Sagittis vitae et leo
                duis ut diam quam nulla porttitor. Augue ut lectus arcu bibendum
                at varius. Varius sit amet mattis vulputate enim nulla.
                Imperdiet dui accumsan sit amet nulla facilisi morbi tempus
                iaculis. Mauris in aliquam sem fringilla ut morbi tincidunt
                augue. Habitant morbi tristique senectus et netus. Gravida cum
                sociis natoque penatibus et magnis dis parturient. Dictum sit
                amet justo donec. Nam libero justo laoreet sit amet. Ullamcorper
                malesuada proin libero nunc consequat interdum. Urna molestie at
                elementum eu facilisis sed. Dui nunc mattis enim ut. Orci eu
                lobortis elementum nibh tellus molestie nunc. Aliquet lectus
                proin nibh nisl condimentum id venenatis a condimentum. Rhoncus
                est pellentesque elit ullamcorper dignissim cras tincidunt
                lobortis. Urna duis convallis convallis tellus id interdum.
                Vitae tortor condimentum lacinia quis vel eros donec ac. Quam
                adipiscing vitae proin sagittis nisl rhoncus.
              </Typography>
            </Box>
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
