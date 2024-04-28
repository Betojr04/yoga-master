import React from "react";
import { HeroSection } from "../components/HeroSection";
import "../styles/App.css";

import { InstructorSection } from "../components/InstructorSection";
import { ServicesSection } from "../components/ServicesSection";
import { Contact } from "../components/Contact";

const App = () => {
  return (
    <main className="landing-container">
      <HeroSection />
      <InstructorSection />
      <ServicesSection />
      <Contact />
    </main>
  );
};

export default App;
