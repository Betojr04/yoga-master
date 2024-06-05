import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

const App = lazy(() => import("../views/App"));
const About = lazy(() => import("../views/About.js"));
const Services = lazy(() => import("../views/Services.js"));

export const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};
