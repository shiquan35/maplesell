import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Homepage from "./components/pages/homepage";
import IndivShops from "./components/pages/IndivShops";
import Nothing from "./components/pages/Nothing";
import SellingForm from "./components/pages/sellingForm";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element=<App /> />
      <Route path="/home" element=<Homepage /> />
      <Route path="/home/:shopId" element=<IndivShops /> />
      <Route path="/new" element=<SellingForm /> />
      <Route path="*" element=<Nothing /> />
    </Routes>
  );
};

export default Router;
