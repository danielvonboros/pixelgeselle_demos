import { href } from "@pixelgeselle/core";

export const site = {
  homeLabel: "Phase Elektrotechnik, zur Startseite",
  homeHref: href("/"),
  logo: { name: "PHASE", trade: "ELEKTROTECHNIK" },
  navLabel: "Hauptnavigation",
  nav: [
    { href: href("/#leistungen"), label: "Leistungen" },
    { href: href("/#licht"), label: "Licht" },
    { href: href("/#projekte"), label: "Projekte" },
    { href: href("/#kontakt"), label: "Kontakt" },
  ],
  emergency: "Notdienst 24/7",
  breadcrumbs: { home: "Startseite", services: "Leistungen", servicesHref: href("/#leistungen") },
  pageTitle: "Phase Elektrotechnik Köln – Beispielseite der Pixelgesellen",
  notFoundTitle: "Seite nicht gefunden – Phase Elektrotechnik",
};

export const hero = {
  title: "Elektrotechnik, die sich in den Raum fügt.",
  servicesLabel: "Leistungen",
  workAlt: "Elektriker verdrahtet Leitungsschutzschalter in einem neuen Verteiler",
  roomAlt: "Wohnraum am Abend mit warmem, indirektem Licht in der Decke",
};
