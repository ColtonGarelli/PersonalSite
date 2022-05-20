import React, {useState} from "react";
import {Document, Page, pdfjs} from "react-pdf";
import {Viewer, Worker} from "@react-pdf-viewer/core";

// Plugins
import {defaultLayoutPlugin} from "@react-pdf-viewer/default-layout";
import {SidebarTab} from "@react-pdf-viewer/default-layout";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import {
  BookmarkIcon,
  FileIcon,
  ThumbnailIcon
} from "@react-pdf-viewer/default-layout";
import {pageNavigationPlugin} from "@react-pdf-viewer/page-navigation";
import {
  DownArrowIcon,
  NextIcon,
  PreviousIcon,
  UpArrowIcon
} from "@react-pdf-viewer/page-navigation";

import {
  Box,
  Grid,
  FormControl,
  Select,
  MenuItem,
  FormHelperText
} from "@mui/material";
import samplePDF from "../sample.pdf";
import sharedSigs from "../assets/pdfs/shared_inflammatory_sigs.pdf";
import {toolbarPlugin} from "@react-pdf-viewer/toolbar";
import {RenderGoToPageProps} from "@react-pdf-viewer/page-navigation";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Publication = props => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page
  const [currPage, setCurrPage] = useState("");
  const path = sharedSigs;
  const pageNavigationPluginInstance = pageNavigationPlugin();
  console.log(pageNavigationPluginInstance);
  const toolbarPluginInstance = toolbarPlugin((props: ToolbarPluginProps));

  const [paper, setPaper] = useState(sharedSigs);

  const handleChange = event => {
    setPaper(event.target.value);
    console.log(event.target.value);
  };
  // cutaneousLupusRev
  Object.entries(props.pub).forEach(entry => {
    let key = entry[0];
    let value = entry[1];
    console.log(key, value);
  });
  const {
    GoToFirstPage,
    GoToLastPage,
    GoToNextPage,
    GoToPreviousPage
  } = pageNavigationPluginInstance;
  // {props.pub.map((p) =>
  //     <MenuItem value={p}>
  //
  // })
  return (
    <>
      <FormControl sx={{m: 1, minWidth: 120}}>
        <Select
          value={paper}
          onChange={handleChange}
          displayEmpty
          inputProps={{"aria-label": "Without label"}}
        >
          <MenuItem value={props.pub.sharedSigs}>
            Shared inflammatory and skin-specific gene signatures reveal common
            drivers of discoid lupus erythematosus in canines, humans and mice
          </MenuItem>
          <MenuItem value={props.pub.cutaneousLupusRev}>
            Current Insights in Cutaneous Lupus Erythematosus Immunopathogenesis
          </MenuItem>

          <MenuItem value={props.pub.samplePDF}>Sample</MenuItem>
        </Select>
        <FormHelperText>Choose a paper</FormHelperText>
      </FormControl>
      <Box overflowY="hidden" sx={{height: "60vh"}}>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
          <Viewer fileUrl={paper} plugins={[toolbarPluginInstance]}>
            <DownArrowIcon />
          </Viewer>
        </Worker>
      </Box>
    </>
  );
};

export default Publication;
