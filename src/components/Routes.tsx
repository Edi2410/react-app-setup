import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "configurations";

export const RoutesList = () => {
  const routeComponents: any = routes.map((element) => (
    <Route path={element.path} element={element.element} key={element.key} />
  ));
  return <Routes>{routeComponents}</Routes>;
};
