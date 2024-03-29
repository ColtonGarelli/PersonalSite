import * as ReactDOM from "react-dom/client";

// third party
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

// project imports
// import * as serviceWorker  from "serviceWorker";
import App from "./App";
import {store} from "./store";

// style + assets
import "./assets/scss/style.scss";

// ==============================|| REACT DOM RENDER  ||============================== //
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
// something to change
