import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import Layout from "./components/layout/Layout";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
   
        <Route
          path="/#about"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
   

       
      </Routes>
    </div>
  );
};

export default Router;
