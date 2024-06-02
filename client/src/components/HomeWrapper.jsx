// components/HomeWrapper.js
import React from "react";
import GoToTop from "./goToTop";

const HomeWrapper = ({ children }) => {
  return (
    <>
      {children}
      <GoToTop />
    </>
  );
};

export default HomeWrapper;
