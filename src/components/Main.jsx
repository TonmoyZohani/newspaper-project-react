import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

const Main = () => {
  return (
    <>
      <Header />

      <div className="container max-w-7xl mx-auto">
        <div className="flex justify-between">
          <LeftNav />
          <Outlet></Outlet>
          <RightNav />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
