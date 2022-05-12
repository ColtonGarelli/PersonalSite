import PropTypes from "prop-types";
import {useState} from "react";

// material-ui
import {useTheme} from "@mui/material/styles";
import {
  Avatar,
  Button,
  CardActions,
  CardContent,
  Divider,
  Card,
  Grid,
  Box,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery
} from "@mui/material";

import {gridSpacing} from "../store/constant";

// assets
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

import Citation from "./Citation";
import PerfectScrollbar from "react-perfect-scrollbar";
// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //
import NavigationScroll from "./NavigationScroll";

const Citations = ({isLoading, data}) => {
  const theme = useTheme();

  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  console.log(theme);

  const handleClose = () => {
    // AnchorElement
    setAnchorEl(null);
  };
  return (
    <>
      <NavigationScroll>
        <Box width="400px" sx={{p: 3, background: theme.palette.primary.main}}>
          <Typography variant="h4">Publications</Typography>
          <MoreHorizOutlinedIcon
            fontSize="large"
            sx={{
              alignItems: "right",
              // this component is the three dots dropdown
              color: theme.palette.secondary.main,
              cursor: "pointer"
            }}
            aria-controls="menu-popular-card"
            aria-haspopup="true"
            onClick={handleClick}
          />
          {/* "<!-- menu selector options -->" */}
          <Menu
            id="menu-popular-card"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            variant="selectedMenu"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
          >
            <MenuItem onClick={handleClose}> Daily</MenuItem>
            <MenuItem onClick={handleClose}> Monthly</MenuItem>
            <MenuItem onClick={handleClose}> Yearly </MenuItem>
          </Menu>
          <Box
            sx={{
              overflow: "hidden",
              height: 500
              // position: "relative",
              // overflowY: "scroll"
            }}
          >
            <CardContent>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                  <Grid
                    container
                    alignContent="flex-end"
                    justifyContent="space-between"
                  >
                    <Grid item></Grid>
                  </Grid>
                  <Citation />
                  <Divider sx={{my: 1.5}} />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions sx={{p: 1.25, pt: 0, justifyContent: "center"}}>
              <Button size="small" disableElevation>
                Link
                <ChevronRightOutlinedIcon />
              </Button>
            </CardActions>
          </Box>
        </Box>
      </NavigationScroll>
    </>
  );
};

Citations.propTypes = {
  isLoading: PropTypes.bool
};

export default Citations;
