import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Homepage from "./components/homepage";
import IndivShops from "./components/IndivShops";
import Nothing from "./components/Nothing";
import SellingForm from "./components/sellingForm";

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
