
import React from "react";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import ExperienceEducation from "./components/ExperienceEducation";
import SkillsProficiencies from "./components/SkillsProficiencies";
import SampleWork from "./components/SampleWork";
import Testimonials from "./components/Testimonials";
import Certifications from "./components/Certifications";
import ContactSection from "./components/Contact";
import "./App.css";



function App() {
  
  return (
    <>
     <div>
      <Home />
      <AboutMe />
      <ExperienceEducation />
      <SkillsProficiencies />
      <SampleWork />
      <Certifications />
      <ContactSection />
     
    </div>
    </>
  )
}

export default App
