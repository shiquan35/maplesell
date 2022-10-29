import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Homepage from "./components/pages/homepage";
import IndivShops from "./components/pages/IndivShops";
import Nothing from "./components/pages/Nothing";
import SellingForm from "./components/pages/sellingForm";
import ProfilePage from "./components/pages/profilePage";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element=<App /> />

      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Homepage />
          </PrivateRoute>
        }
      />

      <Route
        path="/home/:shopId"
        element={
          <PrivateRoute>
            <IndivShops />
          </PrivateRoute>
        }
      />

      <Route
        path="/new"
        element={
          <PrivateRoute>
            <SellingForm />
          </PrivateRoute>
        }
      />

      <Route
        path="/user/:buyerId"
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />

      <Route
        path="*"
        element={
          <PrivateRoute>
            <Nothing />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default Router;
