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
            height: "140px"
          }}
        >
          <Toolbar>
            <Typography
              align="center"
              variant="h1"
              color="black"
              sx={{width: "100%", alignItems: "left", p: 3}}
            >
              Colton Garelli
            </Typography>
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
      <footer
        style={{
          justifyContent: "center",
          display: "flex"
        }}
      >
        <HomeIcon fontSize="small" />
        <HomeIcon />
        <HomeIcon fontSize="large" />
        <HomeIcon sx={{fontSize: 40}} />
        <div class="MuiContainer-root MuiContainer-maxWidthLg">
          <div class="MuiBox-root Styled-py-6 Styled-textAlign-center">
            <a
              class="MuiTypography-root MuiLink-root MuiLink-underlineNone MuiTypography-colorInherit"
              href="#"
            >
              <img
                src="nereus-assets/img/nereus-light.png"
                alt=""
                width="110"
              />
            </a>
            <nav class="MuiBox-root Styled-display-flex Styled-flexWrap-wrap Styled-justifyContent-center Styled-mt-4 Styled-mb-1">
              <a
                class="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-body1 MuiTypography-colorTextPrimary Styled-mx-3 Styled-mb-2"
                href="#"
              >
                First Link
              </a>
              <a
                class="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-body1 MuiTypography-colorTextPrimary Styled-mx-3 Styled-mb-2"
                href="#"
              >
                Second Link
              </a>
              <a
                class="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-body1 MuiTypography-colorTextPrimary Styled-mx-3 Styled-mb-2"
                href="#"
              >
                Third Link
              </a>
              <a
                class="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-body1 MuiTypography-colorTextPrimary Styled-mx-3 Styled-mb-2"
                href="#"
              >
                Fourth Link
              </a>
            </nav>
            <div class="MuiBox-root Styled-mb-3">
              <button
                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit"
                tabindex="0"
                type="button"
                aria-label="Facebook"
              >
                <span class="MuiIconButton-label">
                  <svg
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
                  </svg>
                </span>
                <span class="MuiTouchRipple-root"></span>
              </button>
              <button
                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit"
                tabindex="0"
                type="button"
                aria-label="Twitter"
              >
                <span class="MuiIconButton-label">
                  <svg
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                  </svg>
                </span>
                <span class="MuiTouchRipple-root"></span>
              </button>
              <button
                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit"
                tabindex="0"
                type="button"
                aria-label="Instagram"
              >
                <span class="MuiIconButton-label">
                  <svg
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </span>
                <span class="MuiTouchRipple-root"></span>
              </button>
              <button
                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit"
                tabindex="0"
                type="button"
                aria-label="LinkedIn"
              >
                <span class="MuiIconButton-label">
                  <svg
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                  </svg>
                </span>
                <span class="MuiTouchRipple-root"></span>
              </button>
            </div>
            <p class="MuiTypography-root MuiTypography-caption MuiTypography-colorTextSecondary">
              © 2020 Nereus. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainLayout;
