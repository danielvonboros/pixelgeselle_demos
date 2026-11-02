import { Box } from "@mui/material";
import { DemoBar, SkipLink } from "@pixelgeselle/core";
import { useState } from "react";
import { defaultToneId, tones } from "./content/hero";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Gallery from "./sections/Gallery";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Prices from "./sections/Prices";
import Services from "./sections/Services";

const App = () => {
  const [toneId, setToneId] = useState(defaultToneId);
  const tone = tones.find((item) => item.id === toneId) ?? tones[0];

  return (
    <>
      <SkipLink />
      <DemoBar />
      <Header toneHex={tone.hex} />
      <Box component="main" id="main" tabIndex={-1} sx={{ outline: "none" }}>
        <Hero tone={tone} onToneChange={setToneId} />
        <Services />
        <Gallery />
        <Prices />
        <Contact />
      </Box>
      <Footer />
    </>
  );
};

export default App;
