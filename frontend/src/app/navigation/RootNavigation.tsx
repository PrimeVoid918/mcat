import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";

import MediaRoutes from "@/features/media/navigation/MediaRoutes";
import NavBar from "@/app/navigation/NavBar/NavBar";
import AppContainer from "@/components/AppContainer/AppContainer";
import GenreRoutes from "@/features/genre/navigation/GenreRoutes";
import ActorRoutes from "@/features/actor/navigation/ActorRoutes";
import NotFoundPage from "@/features/error/NotFoundPage";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/media" replace />,
      },
      MediaRoutes(),
      GenreRoutes(),
      ActorRoutes(),
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

function RootLayout() {
  return (
    <>
      <NavBar />

      <AppContainer>
        <Outlet />
      </AppContainer>
    </>
  );
}
