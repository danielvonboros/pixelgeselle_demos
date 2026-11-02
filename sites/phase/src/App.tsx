import { Box } from "@mui/material";
import { DemoBar, SkipLink } from "@pixelgeselle/core";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Light from "./sections/Light";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Values from "./sections/Values";

const App = () => (
  <>
    <SkipLink />
    <DemoBar />
    <Header />
    <Box component="main" id="main" tabIndex={-1} sx={{ outline: "none" }}>
      <Hero />
      <Services />
      <Light />
      <Values />
      <Projects />
      <Contact />
    </Box>
    <Footer />
  </>
);

export default App;
