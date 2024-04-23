import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

const App = lazy(() => import("../views/App"));

export const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};
