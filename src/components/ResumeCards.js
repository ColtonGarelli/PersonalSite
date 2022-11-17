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

const ResumeCard = ({props}) => {
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
    setCurrentProject(Object.keys(props[currentInfo])[0]);
    setIcon(icons[currentInfo]);
  }, [currentInfo]);
  const handleInfoClick = info => {
    console.log(Object.keys(props[currentInfo])[0]);
    setCurrentInfo(info);
  };
  const handlePagination = (event, value) => {
    setCurrentProject(Object.keys(props[currentInfo])[value - 1]);
  };
  // props.github.title props.github.projectname props.github.shortdesc props.github.link
  // props[currentInfo].projects[currentProject]...
  console.log(props);
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
                    <ListItemButton onClick={() => handleInfoClick("orchid")}>
                      <ListItemText primary="orchid" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Box>
          }
          title={props[currentInfo]?.title}
          subheader={
            <Link target="_blank" href={props[currentInfo]?.account}>
              {props[currentInfo]?.title}
            </Link>
          }
        ></CardHeader>

        <CardActions disableSpacing>
          <Link href={props[currentInfo]?.link} target="_blank">
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
      </Card>
    </>
  );
};
export default ResumeCard;
