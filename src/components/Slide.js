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
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import HomeCard from "./HomeCards";
import {
	useTheme
} from "@mui/material/styles";

import {
	useState,
	useEffect
} from "react";

const Slide = ({
	props
}) => {
	const theme = useTheme();
	console.log(props);

	return (
		<>
      <div>
        <Card
          sx={{
            maxWidth: 1000,
            backgroundColor: theme.palette.grey[300],
            overflow: "hidden",
            position: "relative",
            justifyContent: "right",
            variant: "outlined",
            maxHeight: 600,
            height: 600,
            margin: 2,

            borderRadius: 2
          }}
        >
          <CardActionArea target="_blank" href={props}>
            <CardMedia
              component="img"
              height="500"
              image="https://avatars.githubusercontent.com/u/34031144?v=4?s=400"
              alt="green iguana"
            />
          </CardActionArea>
          <Stack spacing={2}>
            <Pagination
              sx={{m: 2}}
              count={5}
              variant="outlined"
              hideNextButton={true}
              hidePrevButton={true}
            />
          </Stack>
        </Card>
      </div>
    </>
	);
};
export default Slide;