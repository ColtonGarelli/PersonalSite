import PropTypes from "prop-types";
import {forwardRef, useEffect, useState} from "react";
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
  const [isActive, setIsActive] = useState(false);

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
  console.log(customization);
  if (item?.external) {
    listItemProps = {component: "a", href: item.url, target: itemTarget};
  }
  // this needs to be fixed, currently doesn't do anything (I think)
  const itemHandler = id => {
    console.log({type: MENU_OPEN, id});
    dispatch({type: MENU_OPEN, id});
    matchesSM && dispatch({type: SET_MENU, opened: false});
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
      activeStyle={{color: "red"}}
      {...listItemProps}
      sx={{
        backgroundColor: isActive ? "salmon" : "",
        // boxShadow: `0px 0px 10px 5px ${theme.palette.primary.light}`,
        "&:hover": {
          border: 1,
          backgroundColor: theme.palette.primary.main,
          cursor: "pointer",
          "& .innerText": {
            color: theme.palette.background.paper
          }

          // boxShadow: `0px 0px 10px 5px ${theme.palette.primary.light}`
        },
        justifyContent: "center",
        alignItems: "center", // "rgb(121, 134, 203, 0.3)",
        // (${theme.palette.default?.primary})
        width: "250px",
        py: level > 1 ? 1 : 3
      }}
      selected={customization.isOpen.findIndex(id => id === item.id) > -1}
      onClick={() => {
        itemHandler(item.id);
      }}
    >
      <Typography
        className="innerText"
        variant="h4"
        color={theme.darkTextPrimary}
      >
        {item.title}
      </Typography>
    </ListItemButton>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number
};

export default NavItem;
