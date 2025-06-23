import React from "react";
import NavComponent from "./NavComponent";
import FooterComponent from "./FooterComponent";
import { Outlet } from "react-router-dom";

const Layout2 = () => {
  return (
    <>
      <FooterComponent />
      <Outlet />
      <NavComponent />
    </>
  );
};

export default Layout2;
