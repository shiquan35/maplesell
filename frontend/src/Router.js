import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Homepage from "./components/homepage";
import IndivShops from "./components/IndivShops";
import Item from "./components/Item";
import Nothing from "./components/Nothing";
import ProfilePage from "./components/profilePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element=<App /> />
      <Route path="/home" element=<Homepage /> />
      <Route path="/home/:shopId" element=<IndivShops /> />
      <Route path="/home/:shopId/:listingId" element=<Item /> />
      <Route path="/user/:buyerId" element=<ProfilePage /> />
      <Route path="*" element=<Nothing /> />
    </Routes>
  );
};

export default Router;
