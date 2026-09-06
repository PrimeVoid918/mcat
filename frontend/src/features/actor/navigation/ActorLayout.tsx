import React from "react";
import { Outlet } from "react-router-dom";

export default function ActorLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
