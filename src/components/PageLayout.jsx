import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function PageLayout() {
  return (
    <div className="max-w-lg mx-auto">
      <Header />
      <Outlet />
    </div>
  );
}
