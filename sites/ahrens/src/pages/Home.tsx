import { useState } from "react";
import { woods } from "../content/woods";
import Careers from "../sections/Careers";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Intro from "../sections/Intro";
import Material from "../sections/Material";
import Process from "../sections/Process";
import Projects from "../sections/Projects";
import Services from "../sections/Services";

const [defaultWood] = woods;

const Home = () => {
  const [woodId, setWoodId] = useState(defaultWood.id);
  const wood = woods.find((item) => item.id === woodId) ?? defaultWood;

  return (
    <>
      <Hero wood={wood} onWoodChange={setWoodId} />
      <Intro />
      <Material wood={wood} />
      <Services />
      <Projects />
      <Process />
      <Careers />
      <Contact />
    </>
  );
};

export default Home;
