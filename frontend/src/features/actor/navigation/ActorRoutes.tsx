import React from "react";
import { RouteObject } from "react-router-dom";
import ActorLayout from "./ActorLayout";
import ActorListPage from "../pages/ActorListPage/ActorListPage";
import ActorMediaListPage from "../pages/ActorListPage/ActorListPage";

export default function ActorRoutes(): RouteObject {
  return {
    path: "actor",
    element: <ActorLayout />,
    children: [
      {
        index: true,
        element: <ActorListPage />,
      },
      {
        path: ":id",
        element: <ActorMediaListPage />,
      },
    ],
  };
}
