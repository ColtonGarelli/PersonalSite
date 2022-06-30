import PropTypes from "prop-types";
import {forwardRef, useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import chroma from "chroma-js";
// material-ui
import {useTheme} from "@mui/material/styles";
import {
  Avatar,
  Chip,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Paper,
  useMediaQuery
} from "@mui/material";

// project imports
import {MENU_OPEN, SET_MENU} from "../store/actions";
import config from "../config";

// assets
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem = ({item, level}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const customization = useSelector(state => state.customization);
  const matchesSM = useMediaQuery(theme.breakpoints.down("lg"));
  console.log(theme);
  let itemTarget = "_self";
  if (item.target) {
    itemTarget = "_blank";
  }
  let listItemProps = {
    component: forwardRef((props, ref) => (
      <Link
        ref={ref}
        {...props}
        to={`${config.basename}${item.url}`}
        target={itemTarget}
      />
    ))
  };
  if (item?.external) {
    listItemProps = {component: "a", href: item.url, target: itemTarget};
  }

  const itemHandler = id => {
    dispatch({type: MENU_OPEN, id});
    if (matchesSM) dispatch({type: SET_MENU, opened: false});
  };

  // active menu item on page load
  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split("/")
      .findIndex(id => id === item.id);
    if (currentIndex > -1) {
      dispatch({type: MENU_OPEN, id: item.id});
    }
    // eslint-disable-next-line
  }, []);
  return (
    <ListItemButton
      {...listItemProps}
      sx={{
        // boxShadow: `0px 0px 10px 5px ${theme.palette.primary.light}`,

        "&:hover": {
          border: 1,
          borderColor: theme.palette.primary.light
        },
        mb: 0.5,
        justifyContent: "center", // "rgb(121, 134, 203, 0.3)",
        // (${theme.palette.default?.primary})
        width: "250px",
        py: level > 1 ? 1 : 3,
        pl: `${level * 25}px`
      }}
      selected={customization.isOpen.findIndex(id => id === item.id) > -1}
      onClick={() => {
        itemHandler(item.id);
      }}
    >
      <ListItemText
        sx={{
          alignItems: "center",
          justifyContent: "center"
        }}
        primary={
          <Typography variant="h4" color={theme.darkTextPrimary}>
            {item.title}
          </Typography>
        }
      />
    </ListItemButton>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number
};

export default NavItem;
