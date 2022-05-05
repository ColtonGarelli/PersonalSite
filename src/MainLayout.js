import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

// material-ui
import { styled, useTheme , createTheme} from "@mui/material/styles";
import {
  AppBar,
  Box,
  Paper,
  CssBaseline,
  Toolbar,
  Breadcrumbs,
  useMediaQuery
} from "@mui/material";

// project imports
import Header from "./components/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { drawerWidth } from "./store/constant";
// import { SET_MENU } from "store/actions";

const SET_MENU = "@customization/SET_MENU";

// styles
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    ...theme.typography.mainContent,
    ...(!open && {
      borderBottomLeftRadius: 0,

      borderBottomRightRadius: 0,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      [theme.breakpoints.up("md")]: {
        marginLeft: -(drawerWidth - 20),
        marginTop: "20vh",
        width: `calc(100% - ${drawerWidth}px)`
      },
      [theme.breakpoints.down("md")]: {
        marginLeft: "20px",
        width: `calc(100% - ${drawerWidth}px)`,
        padding: "16px"
      },
      [theme.breakpoints.down("sm")]: {
        marginLeft: "10px",
        width: `calc(100% - ${drawerWidth}px)`,
        padding: "16px",
        marginRight: "10px"
      }
    }),
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      background: "rgb(0,0,0, 0.1)",
      border: "1px",
      borderColor: "#fff",
      marginLeft: 0,
      marginTop: "20vh",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      width: `calc(100% - ${drawerWidth}px)`,
      [theme.breakpoints.down("md")]: {
        marginLeft: "20px"
      },
      [theme.breakpoints.down("sm")]: {
        marginLeft: "10px"
      }
    })
  })
);

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const theme = createTheme()
  // const theme = useTheme(theme);
  // const [pageTheme, setPageTheme] = useState("");
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));
  // Handle left drawer
  const leftDrawerOpened = useSelector((state) => state.customization.opened);
  const iso = useSelector((state) => state.customization.isOpen);
  const dispatch = useDispatch();
  console.log(leftDrawerOpened);
  const handleLeftDrawerToggle = () => {
    dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
  };

  // useEffect(() => {
  //   dispatch({ type: SET_MENU, opened: !matchDownMd });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [matchDownMd]);

  // .scale(["hsl(246, 71%, 24%)", "#340a6a", "#440068", "#a90000"])
  return (
    <Box
      sx={{height: '100vh',
        display: "flex"}}

    >
      <CssBaseline />
      {/* header */}
      <AppBar
        enableColorOnDark
        position="fixed"
        elevation={0}
        sx={{
          backdropFilter: "blur(5px)",
          height: "150px",
          transition: leftDrawerOpened
            ? theme.transitions.create("width")
            : "none"
        }}
      >
        <Toolbar>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>

      {/* drawer */}
      <Sidebar
        drawerOpen={leftDrawerOpened}
        drawerToggle={handleLeftDrawerToggle}
      />

      {/* main content */}
      <Main theme={theme} open={leftDrawerOpened}>
        {/* breadcrumb */}
        <Breadcrumbs
          icon
          title
          rightAlign
        />
        <Outlet />
      </Main>
    </Box>
  );
};

export default MainLayout;
