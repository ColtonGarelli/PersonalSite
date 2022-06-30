import PropTypes from "prop-types";

// material-ui
import {useTheme} from "@mui/material/styles";
import {Avatar, Box, ButtonBase, Typography} from "@mui/material";

// project imports

import {IconMenu2} from "@tabler/icons";

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({handleLeftDrawerToggle}) => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          [theme.breakpoints.down("md")]: {
            width: "auto"
          }
        }}
      >
        {/* logo & toggler button */}
        <Box
          sx={{
            width: 300,
            display: "flex",
            pt: 5,
            alignitems: "right"
          }}
        >
          <Box component="span" sx={{flexGrow: 1}}></Box>
          <ButtonBase sx={{borderRadius: "12px", overflow: "hidden"}}>
            <Avatar
              variant="rounded"
              sx={{
                ...theme.typography.commonAvatar,
                ...theme.typography.mediumAvatar,
                transition: "all .2s ease-in-out",
                background: theme.palette.secondary,
                color: theme.palette.primary,
                "&:hover": {
                  background: theme.palette.primary,
                  color: theme.palette.secondary
                }
              }}
              onClick={handleLeftDrawerToggle}
              color="inherit"
            >
              <IconMenu2 stroke={1.5} size="1.3rem" />
            </Avatar>
          </ButtonBase>
        </Box>
      </Box>
      {/* header search */}
    </>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func
};

export default Header;
