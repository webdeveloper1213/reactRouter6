import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const SharedLayout = () => {
  return (
    <section className="section">
      <Navbar />
      <Outlet />
    </section>
  );
};
export default SharedLayout;
