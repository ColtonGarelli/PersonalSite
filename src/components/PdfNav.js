import {pageNavigationPlugin} from "@react-pdf-viewer/page-navigation";
import {RenderGoToPageProps} from "@react-pdf-viewer/page-navigation";
import {zoomPlugin} from "@react-pdf-viewer/zoom";
import "@react-pdf-viewer/zoom/lib/styles/index.css";

import {Viewer} from "@react-pdf-viewer/core";

const PdfNav = props => {
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const zoomPluginInstance = zoomPlugin();

  const {
    ZoomIn,
    ZoomOut,
    GoToNextPageButton,
    GoToPreviousPage,
    CurrentPageInput
  } = pageNavigationPluginInstance;
  return (
    <div
      className="rpv-core__viewer"
      style={{
        border: "1px solid rgba(0, 0, 0, 0.3)",
        display: "flex",
        flexDirection: "column",
        height: "100%"
      }}
    >
      {" "}
      <div
        style={{
          flex: 1,
          overflow: "hidden"
        }}
      >
        <Viewer
          fileUrl={props.props.currentPDF}
          plugins={[pageNavigationPluginInstance]}
        />
      </div>
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#eeeeee",
          borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
          display: "flex",
          justifyContent: "center",
          padding: "4px"
        }}
      >
        <div style={{padding: "0px 2px"}}>
          <GoToPreviousPage />
        </div>
        <div style={{padding: "0px 2px", width: "4rem"}}>
          <CurrentPageInput />
        </div>
        <div style={{padding: "0px 2px"}}>
          <GoToNextPageButton />
        </div>
      </div>
    </div>
  );
};

export default PdfNav;
