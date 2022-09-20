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
  IconButton,
  Typography,
  useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import {gridSpacing} from "../store/constant";

// assets
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

import Citation from "./Citation";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import chroma from "chroma-js";
// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //
import NavigationScroll from "./NavigationScroll";

const Citations = ({isLoading, data}) => {
  const theme = useTheme();

  // <IconButton
  //   fontSize="large"
  //   sx={{
  //     // this component is the three dots dropdown
  //     color: theme.palette.primary.main,
  //     cursor: "pointer"
  //   }}
  //   aria-controls="menu-popular-card"
  //   aria-haspopup="true"
  //   onClick={handleClick}
  // >
  //   <MenuIcon />
  // </IconButton>
  //
  // {/* "<!-- menu selector options -->" */}
  // <Menu
  //   id="menu-popular-card"
  //   anchorEl={anchorEl}
  //   keepMounted
  //   open={Boolean(anchorEl)}
  //   onClose={handleClose}
  //   variant="selectedMenu"
  //   anchorOrigin={{
  //     vertical: "bottom",
  //     horizontal: "right"
  //   }}
  //   transformOrigin={{
  //     vertical: "top",
  //     horizontal: "right"
  //   }}
  // >
  //   <MenuItem onClick={handleClose}> Websites</MenuItem>
  //   <MenuItem onClick={handleClose}> Publications</MenuItem>
  //   <MenuItem onClick={handleClose}> Photos? </MenuItem>
  // </Menu>
  return (
    <>
      <Box sx={{m: 2}}></Box>
      {data.map(d => {
        return <Citation props={d} key={d?.title} />;
      })}
    </>
  );
};

Citations.propTypes = {
  isLoading: PropTypes.bool
};

export default Citations;
