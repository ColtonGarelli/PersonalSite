import React from "react";

import JupyterViewer from "react-jupyter-notebook";
import nb_test from "../samplejupyter.json"; // You need to read the .ipynb file into a JSON Object.
import samplePDF from "../assets/pdfs/sample.pdf";
// const notebook = () => <JupyterViewer rawIpynb={nb_test} />;
import {Viewer, Worker} from "@react-pdf-viewer/core";

import {useEffect, useState} from "react";
// import { gridSpacing } from "store/constant";

// material-ui
import {Container, Button, Box, Grid, Typography} from "@mui/material";
import Citations from "../components/Citations";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {error: null, errorInfo: null};
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{whiteSpace: "pre-wrap"}}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

const Notebooks = () => {
  const gridSpacing = 5;
  return (
    <>
      <Box
        justifyContent="left"
        alignItems="center"
        height="200px"
        sx={{
          pl: 5
        }}
      >
        <Grid container spacing={gridSpacing}>
          <Grid item xs={6} md={8}>
            <Box>
              <Typography variant="h2" gutterBottom>
                <Box overflowY="hidden" sx={{height: "60vh"}}>
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
                    <Viewer fileUrl={samplePDF}></Viewer>
                  </Worker>
                </Box>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>
            <Citations />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Notebooks;
