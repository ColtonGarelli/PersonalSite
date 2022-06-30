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
  // <MoreHorizOutlinedIcon
  //   fontSize="large"
  //   sx={{
  //     alignItems: "right",
  //     // this component is the three dots dropdown
  //     color: theme.palette.secondary.main,
  //     cursor: "pointer"
  //   }}
  //   aria-controls="menu-popular-card"
  //   aria-haspopup="true"
  //   onClick={handleClick}
  // />
  console.log(
    chroma(theme.palette.primary.main)
      .alpha(0.5)
      .rgba()
  );
  return (
    <>
      {" "}
      <Box
        width="400px"
        height="70vh"
        sx={{
          overflowY: "scroll",
          background: chroma(theme.palette.primary.dark)
            .alpha(0.5)
            .hex()
        }}
      >
        <PerfectScrollbar
          component="div"
          style={{
            height: !matchUpMd ? "calc(100vh - 56px)" : "calc(100vh - 88px)",
            paddingLeft: "16px",
            paddingRight: "16px"
          }}
        >
          <Box sx={{p: 2, scroll: "hidden"}}>
            <IconButton
              fontSize="large"
              sx={{
                // this component is the three dots dropdown
                color: theme.palette.secondary.main,
                cursor: "pointer"
              }}
              aria-controls="menu-popular-card"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>

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
              <MenuItem onClick={handleClose}> Websites</MenuItem>
              <MenuItem onClick={handleClose}> Publications</MenuItem>
              <MenuItem onClick={handleClose}> Photos? </MenuItem>
            </Menu>
          </Box>
          {data.map(d => {
            return <Citation props={d} key={d?.title} />;
          })}
        </PerfectScrollbar>
      </Box>
    </>
  );
};

Citations.propTypes = {
  isLoading: PropTypes.bool
};

export default Citations;
