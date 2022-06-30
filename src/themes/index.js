import {createTheme} from "@mui/material/styles";

// assets
import colors from "../assets/scss/_themes-vars.module.scss";

// project imports
// import componentStyleOverrides from './compStyleOverride';
import themePalette from "./palette";
import themeTypography from "./typography";

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

export const theme = customization => {
  const color = colors;
  console.log(colors);
  const themeOption = {
    // import color variables from scss
    colors: color,
    heading: color.grey900,
    paper: color.paper,
    backgroundDefault: color.paper,
    background: color.primaryLight,
    darkTextPrimary: color.grey700,
    darkTextSecondary: color.grey500,
    textDark: color.grey900,
    menuSelected: color.secondaryDark,
    menuSelectedBack: color.secondaryLight,
    divider: color.grey200,
    customization
  };

  const themeOptions = {
    direction: "ltr",
    // generate palette by passing to palette.js function
    palette: themePalette(themeOption),

    typography: themeTypography(themeOption)
  };

  const themes = createTheme(themeOptions);
  // themes.components = componentStyleOverrides(themeOption);

  return themes;
};

export default theme;
