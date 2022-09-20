import {useState, useEffect} from "react";
import {styled} from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, {IconButtonProps} from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typography from "@mui/material/Typography";
import {red} from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {createSvgIcon} from "@mui/material/utils";
import SvgIcon from "@mui/material/SvgIcon";
import {ReactComponent as Orchid} from "../assets/images/orchid_icon.svg";
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const {expand, ...other} = props;
  return <IconButton {...other} />;
})(({theme, expand}) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));

const HomeCard = ({props}) => {
  const [expanded, setExpanded] = useState(false);
  const [currentInfo, setCurrentInfo] = useState("github");
  const [currentProject, setCurrentProject] = useState("pam");
  const OrchidIcon = createSvgIcon(
    <path src={"../assets/images/orchid_icon.svg"} />,
    "ORCiD"
  );
  console.log(OrchidIcon);
  const icons = {
    github: <GitHubIcon />,
    pubs: (
      <SvgIcon>
        {" "}
        <Orchid />
      </SvgIcon>
    )
  };
  const [icon, setIcon] = useState(icons.github);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    setCurrentProject(Object.keys(props[currentInfo]?.projects)[0]);
    setIcon(icons[currentInfo]);
  }, [currentInfo]);
  const handleInfoClick = info => {
    console.log(Object.keys(props[currentInfo]?.projects)[0]);
    setCurrentInfo(info);
  };
  const handlePagination = (event, value) => {
    setCurrentProject(Object.keys(props[currentInfo]?.projects)[value - 1]);
  };
  // props.github.title props.github.projectname props.github.shortdesc props.github.link
  // props[currentInfo].projects[currentProject]...
  return (
    <>
      {/* going to make this have slides with papers and github stuff */}
      <Card sx={{maxWidth: 700, width: 600}}>
        <CardHeader
          action={
            <Box sx={{width: "100%", maxWidth: 360}}>
              <nav>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => handleInfoClick("github")}>
                      <ListItemText primary="Github" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => handleInfoClick("pubs")}>
                      <ListItemText primary="Publications" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Box>
          }
          title={props[currentInfo]?.projects[currentProject]?.title}
          subheader={
            <Link
              target="_blank"
              href={props[currentInfo]?.projects[currentProject]?.account}
            >
              {props[currentInfo]?.projects[currentProject]?.title}
            </Link>
          }
        ></CardHeader>

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props[currentInfo]?.projects[currentProject]?.shortdesc}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Link
            href={props[currentInfo]?.projects[currentProject]?.link}
            target="_blank"
          >
            {icon}
          </Link>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Description:</Typography>
            <Typography paragraph>
              {props[currentInfo]?.projects[currentProject]?.fulldesc}
            </Typography>
          </CardContent>
        </Collapse>
        <Stack spacing={2}>
          <Pagination
            sx={{m: 2}}
            count={Object.keys(props[currentInfo]?.projects).length}
            variant="outlined"
            hideNextButton={true}
            hidePrevButton={true}
            onChange={handlePagination}
          />
        </Stack>
      </Card>
    </>
  );
};
export default HomeCard;
