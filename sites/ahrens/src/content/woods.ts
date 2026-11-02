export interface Wood {
  id: string;
  name: string;
  hex: string;
  photo: string;
  text: string;
}

export const woods: Wood[] = [
  {
    id: "eiche",
    name: "Eiche geölt",
    hex: "#b8915f",
    photo: "oak",
    text: "Robust und warm. Dunkelt mit den Jahren etwas nach und lässt sich immer wieder auffrischen.",
  },
  {
    id: "nuss",
    name: "Nussbaum",
    hex: "#5e4330",
    photo: "walnut",
    text: "Dunkel und lebhaft gemasert. Unsere Wahl für Bibliotheken, Theken und Esstische.",
  },
  {
    id: "esche",
    name: "Esche",
    hex: "#d9c6a5",
    photo: "ash",
    text: "Hell, zäh und elastisch, mit deutlicher Maserung. Ideal für Fronten und Regale.",
  },
  {
    id: "rauch",
    name: "Räuchereiche",
    hex: "#3e3128",
    photo: "smoked-oak",
    text: "Eiche, die durch Räuchern ein tiefes Graubraun bekommt. Die Maserung bleibt sichtbar.",
  },
];

export const hero = {
  left: "MÖBEL NACH MASS",
  right: "INNENAUSBAU, MÜNCHEN",
  sectionLabel: "Holzarten",
  monogram: "WA",
  monogramLabel: (wood: string) => `Monogramm WA in ${wood}`,
  pickerLabel: "Holzart",
};

export const intro = {
  kicker: "RUHIGE MÖBEL AUS MASSIVEM HOLZ",
  title: "Schreinerei für Möbel und Innenausbau in München. Gebaut für genau einen Raum.",
  text: "Küchen, Einbauschränke, Bibliotheken und Ladenbau. Entworfen mit dir, gefertigt in unserer Werkstatt in Giesing, montiert von denselben Händen.",
  link: { href: "#ablauf", label: "Unsere Arbeitsweise" },
};

export const material = {
  label: "Material",
  kicker: "MATERIAL",
  detailAlt: "Grifffuge zwischen zwei Schubladen einer Sideboardfront aus massivem Holz",
  sampleAlt: (wood: string) => `Holzmuster ${wood}`,
};
