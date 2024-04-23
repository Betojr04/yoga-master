import React from "react";
import { HeroSection } from "../components/HeroSection";
import "../styles/App.css";

import { InstructorSection } from "../components/InstructorSection";

const App = () => {
  return (
    <main className="landing-container">
      <HeroSection />
      <InstructorSection />
    </main>
  );
};

export default App;
