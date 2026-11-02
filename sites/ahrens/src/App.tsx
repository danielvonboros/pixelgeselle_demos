import { Box } from "@mui/material";
import { DemoBar, RouterProvider, Routes, SkipLink, type Route } from "@pixelgeselle/core";
import { placeRoute, places } from "./content/places";
import { careers } from "./content/process";
import { projects } from "./content/projects";
import { serviceRoute, servicePage, services } from "./content/services";
import { site } from "./content/site";
import CareersPage from "./pages/CareersPage";
import Home from "./pages/Home";
import PlacePage from "./pages/PlacePage";
import ProjectsPage from "./pages/ProjectsPage";
import ServicePage from "./pages/ServicePage";
import Footer from "./sections/Footer";
import Header from "./sections/Header";

const routes: Route[] = [
  { path: "/", title: site.pageTitle, element: <Home /> },
  ...services.items.map((service) => ({
    path: serviceRoute(service.slug),
    title: servicePage.pageTitle(service.title),
    element: <ServicePage service={service} />,
  })),
  { path: projects.route, title: projects.pageTitle, element: <ProjectsPage /> },
  { path: careers.route, title: careers.pageTitle, element: <CareersPage /> },
  ...places.items.map((place) => ({
    path: placeRoute(place.slug),
    title: places.pageTitle(place.name),
    element: <PlacePage place={place} />,
  })),
];

const App = () => (
  <RouterProvider>
    <SkipLink />
    <DemoBar />
    <Header />
    <Box component="main" id="main" tabIndex={-1} sx={{ outline: "none" }}>
      <Routes routes={routes} notFoundTitle={site.notFoundTitle} />
    </Box>
    <Footer />
  </RouterProvider>
);

export default App;
