import { href } from "@pixelgeselle/core";

export interface Place {
  slug: string;
  name: string;
  drive: string;
  lead: string;
  projects: string[];
  placeholder: string;
}

export const placeRoute = (slug: string) => `/schreiner/${slug}`;
export const placeHref = (slug: string) => href(placeRoute(slug));

export const places = {
  label: "Einzugsgebiet",
  home: { name: "München", href: href("/") },
  kicker: "EINZUGSGEBIET",
  title: (name: string) => `Schreiner für ${name}.`,
  pageTitle: (name: string) => `Schreiner in ${name} – Werkstatt Ahrens`,
  facts: (drive: string) => [
    { label: "Anfahrt aus Giesing", value: drive },
    { label: "Aufmaß", value: "Vor Ort, nach Termin" },
    { label: "Montage", value: "Mit unserem eigenen Team" },
  ],
  servicesTitle: (name: string) => `Was wir in ${name} bauen`,
  projectsTitle: "Ausgewählte Projekte",
  items: [
    {
      slug: "starnberg",
      name: "Starnberg",
      drive: "etwa 35 Minuten",
      lead: "Vom Seeufer bis nach Söcking: In Starnberg bauen wir Einbauschränke unter Dachschrägen, Küchen mit Blick ins Grüne und Garderoben für große Familien. Zum Aufmaß sind wir aus Giesing in einer guten halben Stunde da.",
      projects: ["kitchen", "wardrobe", "table"],
      placeholder: "Zum Beispiel: Haus in Söcking, Garderobe im Eingang und Einbauschrank im Dachgeschoss",
    },
    {
      slug: "gruenwald",
      name: "Grünwald",
      drive: "etwa 20 Minuten",
      lead: "In Grünwald stehen viele Häuser aus den Sechziger- und Siebzigerjahren. Wir bauen dort Bibliotheken, Einbauschränke und Küchen, die zum Bestand passen, und erneuern Treppen und Geländer aus Holz.",
      projects: ["library", "staircase", "kitchen"],
      placeholder: "Zum Beispiel: Bibliothek über die ganze Wohnzimmerwand, Haus von 1968",
    },
    {
      slug: "dachau",
      name: "Dachau",
      drive: "etwa 30 Minuten",
      lead: "Für Dachau und die Gemeinden rundherum fertigen wir Küchen, Einbaumöbel und Ladeneinrichtungen. Ob Altstadt oder Neubaugebiet: Wir messen vor Ort auf und montieren mit unserem eigenen Team.",
      projects: ["counter", "wardrobe", "table"],
      placeholder: "Zum Beispiel: Ladenlokal in der Altstadt, Theke und Regale für Feinkost",
    },
  ] satisfies Place[],
};
