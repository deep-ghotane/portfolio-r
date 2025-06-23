import React from "react";
import NavComponent from "./NavComponent";
import FooterComponent from "./FooterComponent";

const DefaultLayout = (props) => {
  return (
    <>
      <NavComponent />

      {/* Content */}
      {props.children}
      <FooterComponent />
    </>
  );
};

export default DefaultLayout;
