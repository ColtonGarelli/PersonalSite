import { Suspense } from "react";

import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

// ==============================|| LOADABLE - LAZY LOADING ||============================== //
const LoaderWrapper = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1301,
  width: "100%"
});

// ==============================|| LOADER ||============================== //
const Loader = () => (
  <LoaderWrapper>
    <LinearProgress color="primary" />
  </LoaderWrapper>
);

const Loadable = (Component) => (props) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
