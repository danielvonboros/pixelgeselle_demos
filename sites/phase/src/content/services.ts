import { href } from "@pixelgeselle/core";

export interface Fact {
  label: string;
  value: string;
}

export interface Service {
  slug: string;
  title: string;
  text: string;
  lead: string;
  photo: string;
  alt: string;
  scope: string[];
  facts: Fact[];
  placeholder: string;
  lightPreview?: boolean;
}

export const serviceRoute = (slug: string) => `/leistungen/${slug}`;
export const serviceHref = (slug: string) => href(serviceRoute(slug));

export const services = {
  label: "Strom und Licht",
  intro: "Installation, Lichtplanung und Steuerung für Wohnungen, Häuser und kleine Gewerbe in Köln.",
  statement:
    "Gute Elektrik merkt man nicht. Man merkt nur, dass das Licht stimmt, die Steckdose da ist, wo man sie braucht, und dass nach dem Einbau alles sauber ist. Wir planen mit dir, verlegen ordentlich und prüfen alles, bevor wir gehen.",
  items: [
    {
      slug: "elektroinstallation",
      title: "Elektroinstallation",
      text: "Neubau, Sanierung und Erweiterung, vom Zählerschrank bis zur letzten Steckdose.",
      lead: "Ob Neubau, Kernsanierung oder ein neuer Stromkreis für die Küche: Wir planen die Elektrik mit dir, verlegen sauber und übergeben eine geprüfte Anlage mit Protokoll.",
      photo: "electrician",
      alt: "Elektriker verdrahtet Leitungsschutzschalter in einem neuen Verteiler",
      scope: [
        "Planung von Steckdosen, Schaltern und Leuchten am Grundriss",
        "Neuer Zählerschrank und Unterverteilung nach aktueller Norm",
        "Leitungen in Wand, Decke und Kabelkanal",
        "Fehlerstrom- und Überspannungsschutz",
        "Netzwerk- und Antennenleitungen gleich mit",
      ],
      facts: [
        { label: "Dauer", value: "Altbauwohnung etwa ein bis zwei Wochen" },
        { label: "Preis", value: "Festpreis nach der Begehung" },
        { label: "Übergabe", value: "Prüfprotokoll nach DIN VDE 0100-600" },
      ],
      placeholder: "Zum Beispiel: Altbauwohnung mit drei Zimmern, Elektrik von 1970, Sanierung ab März",
    },
    {
      slug: "lichtplanung",
      title: "Lichtplanung",
      text: "Indirektes Licht, Spots und Leuchten, geplant für den Raum und die Tageszeit.",
      lead: "Gutes Licht entsteht nicht im Katalog, sondern im Raum. Wir planen, wo es hell sein muss, wo es warm sein darf und was abends nur noch leise leuchtet.",
      photo: "cove-light",
      alt: "Wohnzimmer mit indirektem Licht in einer Deckenvoute",
      scope: [
        "Lichtkonzept pro Raum mit Grundriss und Leuchtenliste",
        "Indirektes Licht in Voute, Regal und Sockel",
        "Spots, Pendel- und Wandleuchten",
        "Dimmbare Kreise und Szenen für den Abend",
        "Montage und Einstellung vor Ort",
      ],
      facts: [
        { label: "Planung", value: "Ein Termin vor Ort, Entwurf nach einer Woche" },
        { label: "Lichtfarbe", value: "2700 bis 3000 Kelvin für Wohnräume" },
        { label: "Passt zu", value: "Elektroinstallation und Smart Home" },
      ],
      placeholder: "Zum Beispiel: Wohnzimmer mit Dachschräge, das Licht soll indirekt und dimmbar sein",
      lightPreview: true,
    },
    {
      slug: "smart-home",
      title: "Smart Home",
      text: "Licht, Rollläden und Heizung per Schalter oder App steuern, mit KNX oder Funk.",
      lead: "Licht, Rollläden und Heizung so steuern, wie es zu deinem Alltag passt: am Schalter, per App oder automatisch. Mit KNX im Neubau oder per Funk in der bestehenden Wohnung.",
      photo: "living-room",
      alt: "Modernes Wohnzimmer mit Stehleuchte, Sofa und großem Fenster",
      scope: [
        "Beratung: KNX, Funk oder eine Mischung aus beidem",
        "Licht, Rollläden und Heizung in einem System",
        "Szenen wie Abend, Kino oder Alles aus",
        "Bedienung per Taster, App oder Sprache",
        "Einweisung, damit du alles selbst anpassen kannst",
      ],
      facts: [
        { label: "System", value: "KNX im Neubau, Funk im Bestand" },
        { label: "Nachrüsten", value: "In den meisten Räumen ohne neue Schlitze" },
        { label: "Erweitern", value: "Raum für Raum, auch Jahre später" },
      ],
      placeholder: "Zum Beispiel: Reihenhaus, Rollläden und Licht sollen per App steuerbar sein",
    },
    {
      slug: "wallbox",
      title: "Wallbox",
      text: "Ladestation für dein E-Auto, inklusive Anmeldung beim Netzbetreiber.",
      lead: "Laden in der eigenen Garage statt an der Säule. Wir prüfen deinen Hausanschluss, installieren die Wallbox und melden sie beim Netzbetreiber an.",
      photo: "wallbox",
      alt: "Wallbox an einer Wand mit Holzverkleidung",
      scope: [
        "Prüfung von Hausanschluss und Zählerschrank",
        "Wallbox mit 11 kW, auf Wunsch mit Lastmanagement",
        "Eigene Zuleitung mit passendem Fehlerstromschutz",
        "Anmeldung beim Netzbetreiber",
        "Einweisung und Prüfprotokoll",
      ],
      facts: [
        { label: "Montage", value: "Meist an einem Tag" },
        { label: "Anmeldung", value: "Übernehmen wir für dich" },
        { label: "Photovoltaik", value: "Laden mit eigenem Solarstrom möglich" },
      ],
      placeholder: "Zum Beispiel: Garage am Einfamilienhaus, der Zählerschrank ist von 1985",
    },
    {
      slug: "e-check",
      title: "E-Check",
      text: "Prüfung deiner Anlage nach VDE, mit Protokoll für Versicherung und Vermieter.",
      lead: "Der E-Check zeigt, ob deine Elektrik sicher ist. Für Vermieter, Praxen und Büros ist eine regelmäßige Prüfung Pflicht, für alle anderen ein gutes Gefühl.",
      photo: "reception",
      alt: "Empfang einer Praxis mit Holztresen und linearer Pendelleuchte",
      scope: [
        "Sichtprüfung von Verteiler, Leitungen und Steckdosen",
        "Messung von Schutzleiter, Isolation und Fehlerstromschutz",
        "Prüfung der Geräte im Büro",
        "Protokoll mit Prüfsiegel",
        "Erinnerung an den nächsten Termin",
      ],
      facts: [
        { label: "Für", value: "Eigentümer, Vermieter, Praxen und Büros" },
        { label: "Dauer", value: "Wohnung etwa zwei Stunden" },
        { label: "Nachweis", value: "Protokoll für Versicherung und Vermieter" },
      ],
      placeholder: "Zum Beispiel: Praxis mit vier Räumen, die letzte Prüfung ist drei Jahre her",
    },
  ] satisfies Service[],
};

export const servicePage = {
  kicker: "Leistung",
  title: (title: string) => `${title} in Köln`,
  pageTitle: (title: string) => `${title} in Köln – Phase Elektrotechnik`,
  cta: "Anfrage stellen",
  scopeTitle: "Was dazugehört",
  factsTitle: "Gut zu wissen",
  projectTitle: "Aus unseren Projekten",
  moreTitle: "Weitere Leistungen",
};

export const values = [
  {
    title: "Sauber geplant",
    text: "Vor dem ersten Schlitz zeichnen wir mit dir auf, wo Steckdosen, Schalter und Leuchten hinkommen. Du weißt vorher, was es kostet.",
  },
  {
    title: "Geprüft übergeben",
    text: "Jede Anlage wird nach dem Einbau gemessen und dokumentiert. Das Prüfprotokoll bekommst du digital.",
  },
  {
    title: "Ein Ansprechpartner",
    text: "Von der Beratung bis zur Übergabe hast du eine feste Person im Team, die erreichbar ist.",
  },
];
