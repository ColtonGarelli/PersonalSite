/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */

export default function themePalette(theme) {
  return {
    mode: theme?.customization?.navType,
    common: {
      black: theme.colors?.darkPaper
    },
    primary: {
      light: theme.colors?.primaryLight,
      main: theme.colors?.primaryMain,
      dark: theme.colors?.primaryDark,
      200: theme.colors?.primary200,
      800: theme.colors?.primary800
    },
    secondary: {
      light: theme.colors?.secondaryLight,
      main: theme.colors?.secondaryMain,
      dark: theme.colors?.secondaryDark,
      200: theme.colors?.secondary200,
      800: theme.colors?.secondary800
    },
    grey: {
      50: theme.colors?.grey50,
      100: theme.colors?.grey100,
      500: theme.darkTextSecondary,
      600: theme.heading,
      700: theme.darkTextPrimary,
      900: theme.textDark
    },
    text: {
      primary: theme.darkTextPrimary,
      secondary: theme.darkTextSecondary,
      dark: theme.textDark,
      hint: theme.colors?.grey100
    },
    background: {
      paper: theme.paper,
      default: theme.backgroundDefault
    }
  };
}
