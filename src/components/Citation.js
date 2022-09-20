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
            maxWidth: 300,
            backgroundColor: theme.palette.grey[300],
            overflow: "hidden",
            position: "relative",
            justifyContent: "right",
            variant: "outlined",
            maxHeight: 200,
            margin: 2,

            borderRadius: 2
          }}
        >
          <CardActionArea target="_blank" href={props?.link}>
            <CardMedia
              component="img"
              height="140"
              image="https://avatars.githubusercontent.com/u/34031144?v=4?s=400"
              alt="green iguana"
            />
          </CardActionArea>
          <Button
            size="large"
            variant="contained"
            target="_blank"
            href={props?.link}
            sx={{
              mt: 1,
              ml: 2,
              mb: 3,
              color: "#fff",
              backgroundColor: theme.palette.primary.light,
              "&:hover": {
                backgroundColor: theme.palette.primary.dark
              }
            }}
          >
            {props.title}
          </Button>
        </Card>
      </div>
    </>
  );
};
export default Citation;
