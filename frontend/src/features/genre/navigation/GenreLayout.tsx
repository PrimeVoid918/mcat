import React from "react";
import { Outlet } from "react-router-dom";

export default function GenreLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
