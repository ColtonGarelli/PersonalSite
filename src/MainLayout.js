import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

// material-ui
import {styled, useTheme, createTheme} from "@mui/material/styles";
import {
  AppBar,
  Box,
  Divider,
  Paper,
  CssBaseline,
  Toolbar,
  Breadcrumbs,
  Typography,
  IconButton,
  BottomNavigation,
  BottomNavigationAction,
  Link,
  useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";

// project imports

import NavGroup from "./components/NavGroup";
import menuItems from "./nav-items";
// import LogoSection from "../LogoSection";
import chroma from "chroma-js";
import CG_transparent from "./assets/images/CG_transparent.png";
// ==============================|| SIDEBAR DRAWER ||============================== //

const SET_MENU = "@customization/SET_MENU";

const MenuList = () => {
  const theme = useTheme();

  const navItems = menuItems.items.map(item => {
    switch (item.type) {
      case "group":
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return <>{navItems}</>;
};
// styles
const Main = styled("main")(({theme}) => ({
  // this is styling for the main content card in middle of the page
  backgroundImage: `linear-gradient(180deg, #2af598 0%, #009efd 100%)`,
  border: "1px",
  borderColor: "#fff",
  marginLeft: 0,
  marginTop: "20vh",
  height: "90%",
  width: "100%",
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0
}));

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const theme = createTheme();
  // const theme = useTheme(theme);
  // const [pageTheme, setPageTheme] = useState("");
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));
  // Handle left drawer
  const leftDrawerOpened = useSelector(state => state.customization.opened);
  const iso = useSelector(state => state.customization.isOpen);
  const dispatch = useDispatch();
  console.log(leftDrawerOpened);
  const handleLeftDrawerToggle = () => {
    dispatch({type: SET_MENU, opened: !leftDrawerOpened});
  };

  //         background: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"
  // background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  // background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
  // backgroundImage: `linear-gradient(180deg, #2af598 0%, #009efd 100%)`,
  return (
    <>
      <Box
        sx={{
          height: "100vh"
        }}
      >
        {/* header */}
        <AppBar
          enableColorOnDark
          position="fixed"
          elevation={0}
          sx={{
            background: "transparent",
            backdropFilter: "blur(5px)",
            height: "140px",
            width: "100%"
          }}
        >
          <Toolbar>
            <img src={CG_transparent} height="120px" width="auto" />
            <MenuList />
          </Toolbar>
          <Divider
            orientation="horizontal"
            variant="fullWidth"
            color={theme.divider}
            sx={{height: "1px", flex: "auto", minHeight: "inherit"}}
          />
        </AppBar>

        {/* main content */}
        {/* breadcrumb */}
        <Box
          sx={{
            height: "100%",
            pt: "10%"
          }}
        >
          <Breadcrumbs />
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;
