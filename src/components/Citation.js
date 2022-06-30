import {
  Grid,
  Box,
  AvatarGroup,
  Typography,
  CardMedia,
  Card,
  CardContent,
  CardActionArea,
  Avatar,
  CardHeader,
  CardActions,
  Button,
  Percentage
} from "@mui/material";
import {useTheme} from "@mui/material/styles";

import {useState, useEffect} from "react";

const Citation = ({props}) => {
  const theme = useTheme();
  console.log(props);
  return (
    <>
      <div>
        <Card
          sx={{
            maxWidth: 345,
            background: "rgba(250,250,250,0.5)",
            overflow: "hidden",
            position: "relative",
            justifyContent: "right",
            variant: "outlined",
            maxHeight: 250,
            margin: 2,

            borderRadius: 2
          }}
        >
          <CardActionArea
            target="_blank"
            href={props?.link}
            sx={{
              "&:hover": {
                backgroundColor: "rgba(250,250,250, 0.3)"
              }
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image="https://avatars.githubusercontent.com/u/34031144?v=4?s=400"
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="h4" color="inherit">
                {props.title}
              </Typography>
            </CardContent>
          </CardActionArea>
          <Button
            size="large"
            variant="contained"
            target="_blank"
            href={props?.link}
            sx={{
              ml: 2,
              mb: 3,
              color: "#fff",
              backgroundColor: theme.palette.secondary.dark
            }}
          >
            More
          </Button>
        </Card>
      </div>
    </>
  );
};
export default Citation;
