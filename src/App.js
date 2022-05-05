import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { useMemo, createContext, useState } from "react";
// routing
import Routes from "./routes";

// defaultTheme
// import themes from "./themes";

// project imports
import NavigationScroll from "./components/NavigationScroll";

// ==============================|| APP ||============================== //
// can import a store and use provider from react redux tag
// importing the store gives whole app access to the store
// then you can import themes and actions and use useSelector to access reducer states

// dispatch can be used to dispatch actions
// reducers take state and action to make a change
// this.props.location.pathname?

const App = () => {
const theme = createTheme();
console.log(theme)
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
