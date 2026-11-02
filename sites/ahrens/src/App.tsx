import { Box } from "@mui/material";
import { DemoBar, SkipLink } from "@pixelgeselle/core";
import { useState } from "react";
import { woods } from "./content/woods";
import Careers from "./sections/Careers";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Intro from "./sections/Intro";
import Material from "./sections/Material";
import Process from "./sections/Process";
import Projects from "./sections/Projects";

const [defaultWood] = woods;

const App = () => {
  const [woodId, setWoodId] = useState(defaultWood.id);
  const wood = woods.find((item) => item.id === woodId) ?? defaultWood;

  return (
    <>
      <SkipLink />
      <DemoBar />
      <Header />
      <Box component="main" id="main" tabIndex={-1} sx={{ outline: "none" }}>
        <Hero wood={wood} onWoodChange={setWoodId} />
        <Intro />
        <Material wood={wood} />
        <Projects />
        <Process />
        <Careers />
        <Contact />
      </Box>
      <Footer />
    </>
  );
};

export default App;
