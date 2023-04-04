import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-[100dvh]">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
