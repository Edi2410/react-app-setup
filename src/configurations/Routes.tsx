import React from "react";

import { HomePage } from "../pages/HomePage";
import { DetailsPage } from "../pages/DetailsPage";
import { AboutMePage } from "../pages/AboutMePage";

interface Routes {
  path: string;
  element: JSX.Element;
  key: string;
}
export const routes: Routes[] = [
  {
    path: "/",
    element: <HomePage />,
    key: "/",
  },
  {
    path: "/details/:id",
    element: <DetailsPage />,
    key: "/details/:id",
  },
  {
    path: "/aboutme",
    element: <AboutMePage />,
    key: "/aboutme",
  },
];
