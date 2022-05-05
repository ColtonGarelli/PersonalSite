import { useRoutes } from "react-router-dom";
import { lazy } from "react";

// project imports
import MainLayout from "../MainLayout";
import Loadable from "../components/Loadable";

// routes
import config from "../config";

// dashboard routing
const Home = Loadable(lazy(() => import("../pages/Home")));

// ==============================|| ROUTING RENDER ||============================== //
const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    { path: "/", element: <Home /> },

  ]
};

export default function ThemeRoutes() {
  console.log(MainRoutes);
  return useRoutes([MainRoutes], config.basename);
}
