import { href } from "@pixelgeselle/core";

export const site = {
  homeLabel: "Firstlinie, zur Startseite",
  homeHref: href("/"),
  logo: { first: "first", second: "linie" },
  navLabel: "Hauptnavigation",
  nav: [
    { href: href("/#leistungen"), label: "01 Leistungen" },
    { href: href("/#projekte"), label: "02 Projekte" },
    { href: href("/karriere"), label: "03 Karriere" },
    { href: href("/#kontakt"), label: "04 Kontakt" },
  ],
  cta: { href: href("/#kontakt"), label: "[ Dach anfragen ]" },
  breadcrumbs: { home: "Start", services: "Leistungen", servicesHref: href("/#leistungen") },
  pageTitle: "Firstlinie Dach und Fassade Hamburg – Beispielseite der Pixelgesellen",
  notFoundTitle: "Seite nicht gefunden – Firstlinie Dach und Fassade",
};

export const hero = {
  title: "firstlinie",
  text: "Dach und Fassade in Hamburg. Steildach, Flachdach, Gauben und Klempnerarbeiten, geplant wie ein Bauteil und gebaut für die nächsten Jahrzehnte.",
  layersTag: "[ dachaufbau ]",
  layersHint: "Wähle eine Schicht",
  layersLabel: "Schichten im Dachaufbau",
  figureLabel: "Schnitt durch ein Steildach mit sechs Schichten",
  caption: "Fig. 01 / 06 · Steildach mit Zwischensparrendämmung",
  scale: "Maßstab 1:10",
  pitch: "DN 37°",
  initialLayer: 5,
  layers: [
    { name: "Sparren", thickness: "160 mm" },
    { name: "Zwischensparrendämmung", thickness: "160 mm" },
    { name: "Unterdeckbahn", thickness: "1 mm" },
    { name: "Konterlattung", thickness: "40 mm" },
    { name: "Traglattung", thickness: "30 mm" },
    { name: "Tondachziegel", thickness: "20 mm" },
  ],
};
