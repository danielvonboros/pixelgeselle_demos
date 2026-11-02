import { href } from "@pixelgeselle/core";

export interface Service {
  slug: string;
  title: string;
  short: string;
  lead: string;
  photo: string;
  alt: string;
  tag: string;
  scope: string[];
  placeholder: string;
}

export const serviceRoute = (slug: string) => `/leistungen/${slug}`;
export const serviceHref = (slug: string) => href(serviceRoute(slug));

export const services = {
  title: "leistungen",
  crumb: "Leistungen",
  crumbHref: href("/#leistungen"),
  items: [
    {
      slug: "kuechen",
      title: "Küchen",
      short: "Grifflos oder mit Griffleiste, aus massivem Holz. Geplant um die Art, wie du kochst.",
      lead: "Eine Küche von uns beginnt nicht mit dem Katalog, sondern mit der Frage, wie du kochst. Wir planen Arbeitswege, Stauraum und Licht, fertigen Korpusse und Fronten in Giesing und bauen die Geräte deiner Wahl ein.",
      photo: "kitchen",
      alt: "Grifflose Küche mit dunklen Fronten in Räuchereiche",
      tag: "Küche",
      scope: [
        "Planung mit Aufmaß, Zeichnungen und Holzmustern",
        "Fronten aus Massivholz oder Furnier, grifflos oder mit Griffleiste",
        "Arbeitsplatten aus Holz, Stein oder Keramik",
        "Einbau von Geräten und Spüle",
        "Licht unter Oberschränken und in Nischen",
      ],
      placeholder: "Zum Beispiel: Küche im Altbau, etwa vier Meter Wand, gern mit Insel",
    },
    {
      slug: "einbaumoebel",
      title: "Einbauschränke und Regale",
      short: "Für Dachschrägen, Nischen und Altbauwände, die nirgends gerade sind.",
      lead: "Altbauwände sind nie gerade, Dachschrägen nie gleich. Deshalb messen wir jeden Millimeter und bauen Schränke und Regale, die den Raum ausnutzen, ohne ihn vollzustellen.",
      photo: "wardrobe",
      alt: "Einbauschrank mit offenem Regal im Schlafzimmer",
      tag: "Wohnen",
      scope: [
        "Einbauschränke für Flur, Schlafzimmer und Dachschräge",
        "Bibliotheken und Wandregale bis unter die Decke",
        "Sitzbänke mit Stauraum",
        "Schiebe- und Drehtüren, auf Wunsch mit Licht",
        "Montage an unebenen Wänden, ohne sichtbare Fugen",
      ],
      placeholder: "Zum Beispiel: Einbauschrank in der Dachschräge, etwa drei Meter breit",
    },
    {
      slug: "ladenbau",
      title: "Ladenbau",
      short: "Theken, Regale und Empfänge für Läden, Praxen und Büros.",
      lead: "Ein Laden muss gut aussehen und zehn Jahre Kundschaft aushalten. Wir bauen Theken, Regale und Empfänge für Läden, Praxen und Büros und montieren außerhalb deiner Öffnungszeiten.",
      photo: "counter",
      alt: "Theke mit beleuchteten Regalen aus Nussbaum",
      tag: "Gewerbe",
      scope: [
        "Theken und Empfangstresen",
        "Warenregale mit eingebautem Licht",
        "Wandverkleidungen und Akustikpaneele",
        "Möbel für Praxen und Büros",
        "Montage am Abend oder am Wochenende",
      ],
      placeholder: "Zum Beispiel: Theke und Wandregal für ein Café, Eröffnung im Frühjahr",
    },
  ] satisfies Service[],
};

export const servicePage = {
  kicker: "LEISTUNG",
  title: (title: string) => `${title} nach Maß.`,
  pageTitle: (title: string) => `${title} nach Maß in München – Werkstatt Ahrens`,
  scopeTitle: "Was wir bauen",
  projectsTitle: "Projekte",
};
