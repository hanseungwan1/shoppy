import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function PageLayout({ cartList }) {
  return (
    <div className="max-w-lg mx-auto">
      <Header cartList={cartList} />
      <Outlet />
    </div>
  );
}
