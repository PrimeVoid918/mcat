// src/features/media/navigation/MediaRoutes.tsx

import type { RouteObject } from "react-router-dom";

import MediaLayout from "./MediaLayout";
import MediaCatalogPage from "../pages/MediaCatalog/MediaCatalog";
import MediaDetailsPage from "../pages/MediaDetailsPage/MediaDetailsPage";

export default function MediaRoutes(): RouteObject {
  return {
    path: "media",
    element: <MediaLayout />,
    children: [
      {
        index: true,
        element: <MediaCatalogPage />,
      },
      {
        path: ":id",
        element: <MediaDetailsPage />,
      },
    ],
  };
}
