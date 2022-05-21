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

const PdfSelector = ({props}) => {
  console.log(props);
  return (
    <>
      <FormControl sx={{m: 1, minWidth: 120}}>
        <Select
          value={props.paper}
          onChange={props.handleChange}
          displayEmpty
          inputProps={{"aria-label": "Without label"}}
        >
          {props?.pdfs.map(pdf => {
            return (
              <MenuItem value={pdf?.file} key={pdf?.title}>
                {pdf?.title}
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText>Choose a paper</FormHelperText>
      </FormControl>
    </>
  );
};

export default PdfSelector;
