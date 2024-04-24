import React from "react";
import { HeroSection } from "../components/HeroSection";
import "../styles/App.css";

import { InstructorSection } from "../components/InstructorSection";
import { ServicesSection } from "../components/ServicesSection";

const App = () => {
  return (
    <main className="landing-container">
      <HeroSection />
      <InstructorSection />
      <ServicesSection />
    </main>
  );
};

export default App;
