import React from "react";
import { RouteObject } from "react-router-dom";
import GenreLayout from "./GenreLayout";
import GenreListPage from "../pages/GenreListPage/GenreListPage";
import GenreMediaListPage from "../pages/GenreMediaListPage/GenreMediaListPage";

export default function GenreRoutes(): RouteObject {
  return {
    path: "genre",
    element: <GenreLayout />,
    children: [
      {
        index: true,
        element: <GenreListPage />,
      },
      {
        path: ":id",
        element: <GenreMediaListPage />,
      },
    ],
  };
}
