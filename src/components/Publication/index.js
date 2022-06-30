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
  Box,
  Grid,
  FormControl,
  Select,
  MenuItem,
  FormHelperText
} from "@mui/material";
import samplePDF from "../../assets/pdfs/sample.pdf";
import sharedSigs from "../../assets/pdfs/shared_inflammatory_sigs.pdf";
import cutaneousLupusRev from "../../assets/pdfs/Current Insights in Cutaneous Lupus Erythematosus Immunopathogenesis.pdf";
import {toolbarPlugin} from "@react-pdf-viewer/toolbar";
import PdfNav from "../PdfNav";
import PdfSelector from "../PdfSelector";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Publication = props => {
  const path = sharedSigs;

  const toolbarPluginInstance = toolbarPlugin((props: ToolbarPluginProps));

  const [currentPDF, setCurrentPDF] = useState(sharedSigs);

  const handleChange = event => {
    console.log(event.target.value);

    setCurrentPDF(event.target.value);
  };
  const pdfs = [
    {
      file: sharedSigs,
      title:
        "Shared inflammatory and skin-specific gene signatures reveal common drivers of discoid lupus erythematosus in canines, humans and mice"
    },
    {
      file: cutaneousLupusRev,
      title:
        "Current Insights in Cutaneous Lupus Erythematosus Immunopathogenesis"
    },
    {file: samplePDF, title: "Sample"}
  ];
  console.log(pdfs);
  return (
    <>
      <PdfSelector
        props={{
          currentPDF,
          handleChange,
          pdfs
        }}
      />
      <Box overflowY="hidden" sx={{height: "60vh"}}>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
          <PdfNav props={{currentPDF}} />
        </Worker>
      </Box>
    </>
  );
};

export default Publication;
