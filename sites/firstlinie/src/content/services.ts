import { href } from "@pixelgeselle/core";

export type DrawingId = "eaves" | "parapet" | "dormer" | "gutter";

export interface Spec {
  label: string;
  value: string;
}

export interface Service {
  slug: string;
  number: string;
  figure: string;
  title: string;
  text: string;
  lead: string;
  drawing: DrawingId;
  scope: string[];
  specs: Spec[];
  placeholder: string;
}

export const serviceRoute = (slug: string) => `/leistungen/${slug}`;
export const serviceHref = (slug: string) => href(serviceRoute(slug));

export const services = {
  tag: "[ leistungen ]",
  items: [
    {
      slug: "steildach",
      number: "01",
      figure: "02",
      title: "Steildach",
      text: "Neueindeckung und Sanierung mit Ton- oder Betonziegeln, inklusive Dämmung nach aktuellem Gebäudeenergiegesetz.",
      lead: "Ein Steildach hält fünfzig Jahre und länger, wenn Eindeckung, Lattung und Dämmung zusammenpassen. Wir sanieren und decken neu ein, mit Ton- oder Betonziegeln und einer Dämmung nach aktuellem Gebäudeenergiegesetz.",
      drawing: "eaves",
      scope: [
        "Alte Eindeckung abnehmen und entsorgen",
        "Sparren prüfen und wo nötig ausbessern",
        "Unterdeckbahn, Konter- und Traglattung erneuern",
        "Zwischen- oder Aufsparrendämmung nach GEG",
        "Eindeckung mit Ton- oder Betondachziegeln",
        "Anschlüsse an Schornstein, Gauben und Dachfenster",
      ],
      specs: [
        { label: "Material", value: "Ton- oder Betondachziegel" },
        { label: "Dachneigung", value: "ab 22°" },
        { label: "Dämmung", value: "U-Wert ≤ 0,24 W/(m²K)" },
        { label: "Förderung", value: "Zuschuss über die BEG möglich" },
        { label: "Dauer", value: "Einfamilienhaus etwa 2 bis 3 Wochen" },
      ],
      placeholder: "Zum Beispiel: Einfamilienhaus von 1965, die Ziegel sind porös, der Dachboden soll gedämmt werden",
    },
    {
      slug: "flachdach",
      number: "02",
      figure: "03",
      title: "Flachdach",
      text: "Bitumen- und Kunststoffabdichtung für Wohnhäuser, Garagen und Gewerbehallen. Auf Wunsch begrünt.",
      lead: "Flachdächer verzeihen keine Fehler im Detail. Wir dichten mit Bitumen oder Kunststoff ab, bauen Attika und Abläufe sauber ein und begrünen auf Wunsch.",
      drawing: "parapet",
      scope: [
        "Bestandsaufnahme mit Feuchtemessung",
        "Gefälledämmung, damit kein Wasser stehen bleibt",
        "Abdichtung mit Bitumen- oder Kunststoffbahnen",
        "Attika, Abläufe und Notüberläufe",
        "Extensive Dachbegrünung auf Wunsch",
      ],
      specs: [
        { label: "Abdichtung", value: "Bitumen zweilagig oder FPO einlagig" },
        { label: "Gefälle", value: "mindestens 2 %" },
        { label: "Für", value: "Wohnhaus, Garage und Gewerbehalle" },
        { label: "Begrünung", value: "extensiv, ab 8 cm Substrat" },
        { label: "Gewährleistung", value: "5 Jahre auf die Abdichtung" },
      ],
      placeholder: "Zum Beispiel: Garagendach mit 40 m², nach Starkregen steht Wasser drauf",
    },
    {
      slug: "dachfenster-und-gauben",
      number: "03",
      figure: "04",
      title: "Dachfenster und Gauben",
      text: "Mehr Licht im Dachgeschoss, vom Einbau eines Wohndachfensters bis zur neuen Schleppgaube.",
      lead: "Mehr Licht und mehr Kopfhöhe im Dachgeschoss. Wir bauen Wohndachfenster ein und setzen neue Gauben, von der Statik bis zum letzten Anschlussblech aus einer Hand.",
      drawing: "dormer",
      scope: [
        "Wohndachfenster einbauen oder tauschen",
        "Schlepp-, Flachdach- und Fledermausgauben",
        "Abstimmung mit Statik und Bauamt",
        "Dämmung und Anschluss nach innen",
        "Eindeckung und Bleche rund um die Öffnung",
      ],
      specs: [
        { label: "Dachfenster", value: "an einem Tag eingebaut" },
        { label: "Gaube", value: "etwa 3 bis 4 Wochen" },
        { label: "Genehmigung", value: "für Gauben meist nötig, wir kümmern uns" },
        { label: "Breite", value: "Gauben bis etwa 4 m" },
      ],
      placeholder: "Zum Beispiel: Das Dachgeschoss soll ausgebaut werden, wir wünschen uns eine Gaube zur Straße",
    },
    {
      slug: "klempnerarbeiten",
      number: "04",
      figure: "05",
      title: "Klempnerarbeiten",
      text: "Dachrinnen, Fallrohre und Anschlüsse aus Kupfer, Zink oder Aluminium, gefertigt in der eigenen Werkstatt.",
      lead: "Rinnen, Fallrohre und Bleche entscheiden, wohin das Wasser läuft. Wir fertigen sie in der eigenen Werkstatt aus Kupfer, Zink oder Aluminium und montieren sie passgenau.",
      drawing: "gutter",
      scope: [
        "Dachrinnen und Fallrohre erneuern",
        "Kehlen, Kamin- und Wandanschlüsse",
        "Attika- und Mauerabdeckungen",
        "Gaubenverkleidung in Zink oder Kupfer",
        "Undichte Stellen finden und reparieren",
      ],
      specs: [
        { label: "Material", value: "Kupfer, Titanzink oder Aluminium" },
        { label: "Rinnen", value: "halbrund oder kastenförmig" },
        { label: "Fertigung", value: "in der eigenen Werkstatt" },
        { label: "Haltbarkeit", value: "Kupfer über 50 Jahre" },
      ],
      placeholder: "Zum Beispiel: Die Dachrinne läuft über und das Fallrohr ist undicht, Reihenmittelhaus",
    },
  ] satisfies Service[],
};

export const servicePage = {
  tag: (number: string) => `[ leistung ${number} ]`,
  pageTitle: (title: string) => `${title} in Hamburg – Firstlinie Dach und Fassade`,
  cta: "[ Anfrage stellen ]",
  more: "[ details ]",
  scopeTitle: "[ leistungsumfang ]",
  specsTitle: "[ kenndaten ]",
  projectTitle: "[ referenz ]",
  moreTitle: "[ weitere leistungen ]",
};

export const drawings = {
  eaves: {
    title: "Schnitt durch eine Traufe mit Ziegeln, Lattung, Sparren und Rinne",
    caption: "Fig. 02 · Traufe im Schnitt",
    tiles: "Tondachziegel",
    rafter: "Sparren",
    wall: "Mauerwerk",
    gutter: "Rinne",
  },
  parapet: {
    title: "Schnitt durch eine Attika mit Abdichtung und Attikablech",
    caption: "Fig. 03 · Attika mit Abdichtung",
    coping: "Attikablech",
    sealing: "Abdichtung",
    insulation: "Dämmung",
    slab: "Stahlbetondecke",
  },
  dormer: {
    title: "Ansicht einer Schleppgaube im Steildach",
    caption: "Fig. 04 · Gaube in der Ansicht",
    dormer: "Schleppgaube",
    width: "2,40 m",
  },
  gutter: {
    title: "Detail einer halbrunden Dachrinne im Rinnenhalter",
    caption: "Fig. 05 · Rinnenhalter im Detail",
    bracket: "Rinnenhalter",
    bead: "Wulst",
    board: "Traufbohle",
    size: "Ø 125 mm",
  },
};
