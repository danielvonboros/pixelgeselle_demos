import { Box } from "@mui/material";
import { DemoBar, SkipLink } from "@pixelgeselle/core";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Inquiry from "./sections/Inquiry";
import Projects from "./sections/Projects";
import Services from "./sections/Services";

const App = () => (
  <>
    <SkipLink />
    <DemoBar />
    <Header />
    <Box component="main" id="main" tabIndex={-1} sx={{ outline: "none" }}>
      <Hero />
      <Services />
      <Projects />
      <Inquiry />
    </Box>
    <Footer />
  </>
);

export default App;
