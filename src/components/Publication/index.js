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
import samplePDF from "../../assets/pdfs/sample.pdf";
import sharedSigs from "../../assets/pdfs/shared_inflammatory_sigs.pdf";
import cutaneousLupusRev from "../../assets/pdfs/Current Insights in Cutaneous Lupus Erythematosus Immunopathogenesis.pdf";
import {toolbarPlugin} from "@react-pdf-viewer/toolbar";
import {RenderGoToPageProps} from "@react-pdf-viewer/page-navigation";
import PdfSelector from "../PdfSelector";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Publication = props => {
  const path = sharedSigs;
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const {
    GoToFirstPage,
    GoToLastPage,
    GoToNextPage,
    GoToPreviousPage
  } = pageNavigationPluginInstance;
  const toolbarPluginInstance = toolbarPlugin((props: ToolbarPluginProps));

  const [paper, setPaper] = useState(sharedSigs);

  const handleChange = event => {
    console.log(event.target.value);

    setPaper(event.target.value);
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
          paper,
          handleChange,
          pdfs
        }}
      />
      <Box overflowY="hidden" sx={{height: "60vh"}}>
        <div
          style={{
            alignItems: "center",
            backgroundColor: "#eeeeee",
            borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            display: "flex",
            justifyContent: "center",
            padding: "4px"
          }}
        >
          <div style={{padding: "0 2px"}}>
            <GoToFirstPage>
              {(props: RenderGoToPageProps) => (
                <button
                  style={{
                    backgroundColor: "#357edd",
                    border: "none",
                    borderRadius: "4px",
                    color: "#ffffff",
                    cursor: "pointer",
                    padding: "8px"
                  }}
                  onClick={props.onClick}
                >
                  First page
                </button>
              )}
            </GoToFirstPage>
          </div>
        </div>

        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
          <Viewer
            fileUrl={paper}
            plugins={[toolbarPluginInstance, pageNavigationPluginInstance]}
          >
            <DownArrowIcon />
          </Viewer>
        </Worker>
      </Box>
    </>
  );
};

export default Publication;
