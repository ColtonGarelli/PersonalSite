// project imports
import config from "../config";

// import { SWITCH_THEME } from "./reducer";
// import themes from theme.js
// action - state management
import * as actionTypes from "./actions";
// reducers take a state and an action

export const initialState = {
  isOpen: [], //for active default menu
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: true
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //
const SWITCH_THEME = "SWITCH_THEME";
const lendTheme = {
  dashAppBar: "green",
  heading: "#green",
  // componentBg: chroma(theme.colors.defaultPrimary).alpha(0.7),

  // navbar color
  // paper: "rgb(121, 134, 203, 0.0)",
  backgroundDefault: "rgb(27, 18, 107, 1)",
  // paper background of main page content
  background: "green",
  darkTextPrimary: "#fff",
  darkTextSecondary: "#fff"
};
const customizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MENU_OPEN:
      const id = action.id;
      return {
        ...state,
        isOpen: [id]
      };
    case actionTypes.SET_MENU:
      return {
        ...state,
        opened: action.opened
      };
    case actionTypes.SET_FONT_FAMILY:
      return {
        ...state,
        fontFamily: action.fontFamily
      };
    case actionTypes.SET_BORDER_RADIUS:
      return {
        ...state,
        borderRadius: action.borderRadius
      };
    default:
      return state;
  }
};

export default customizationReducer;
