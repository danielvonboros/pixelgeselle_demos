import { href } from "@pixelgeselle/core";

export const site = {
  name: "WERKSTATT AHRENS",
  homeLabel: "Werkstatt Ahrens, zur Startseite",
  homeHref: href("/"),
  navLabel: "Hauptnavigation",
  nav: [
    { href: href("/projekte"), label: "projekte" },
    { href: href("/#leistungen"), label: "leistungen" },
    { href: href("/#werkstatt"), label: "werkstatt" },
    { href: href("/karriere"), label: "karriere" },
    { href: href("/#kontakt"), label: "kontakt" },
  ],
  cta: { href: href("/#kontakt"), label: "Anfrage" },
  crumbHome: "Startseite",
  pageTitle: "Werkstatt Ahrens Schreinerei München – Beispielseite der Pixelgesellen",
  notFoundTitle: "Seite nicht gefunden – Werkstatt Ahrens",
};
