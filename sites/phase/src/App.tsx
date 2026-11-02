import { Box } from "@mui/material";
import { DemoBar, RouterProvider, Routes, SkipLink, type Route } from "@pixelgeselle/core";
import { serviceRoute, servicePage, services } from "./content/services";
import { site } from "./content/site";
import Home from "./pages/Home";
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
