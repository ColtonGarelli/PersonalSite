import {
  Box,
  Grid,
  FormControl,
  Select,
  MenuItem,
  FormHelperText
} from "@mui/material";
import samplePDF from "../assets/pdfs/sample.pdf";
import sharedSigs from "../assets/pdfs/shared_inflammatory_sigs.pdf";
import useState from "react";
import {useTheme} from "@mui/material/styles";

const PdfSelector = ({props}) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          m: 1,
          minWidth: 120,
          width: "950px"
        }}
      >
        <FormControl
          sx={{
            m: 1,
            minWidth: 120,
            width: "950px",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white"
            }
          }}
        >
          <Select
            value={props.currentPDF}
            onChange={props.handleChange}
            displayEmpty
            sx={{
              "& 	.MuiSelect-outlined": {
                border: 2,
                borderColor: theme.palette.primary.dark
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "white"
              }
            }}
          >
            {props?.pdfs?.map(pdf => {
              return (
                <MenuItem value={pdf?.file} key={pdf?.title}>
                  {pdf?.title}
                </MenuItem>
              );
            })}
          </Select>
          <FormHelperText>Choose a paper</FormHelperText>
        </FormControl>
      </Box>
    </>
  );
};

export default PdfSelector;
