export type DrawingId = "eaves" | "parapet" | "dormer" | "gutter";

export const services = {
  tag: "[ leistungen ]",
  items: [
    {
      number: "01",
      figure: "02",
      title: "Steildach",
      text: "Neueindeckung und Sanierung mit Ton- oder Betonziegeln, inklusive Dämmung nach aktuellem Gebäudeenergiegesetz.",
      drawing: "eaves" as DrawingId,
    },
    {
      number: "02",
      figure: "03",
      title: "Flachdach",
      text: "Bitumen- und Kunststoffabdichtung für Wohnhäuser, Garagen und Gewerbehallen. Auf Wunsch begrünt.",
      drawing: "parapet" as DrawingId,
    },
    {
      number: "03",
      figure: "04",
      title: "Dachfenster und Gauben",
      text: "Mehr Licht im Dachgeschoss, vom Einbau eines Wohndachfensters bis zur neuen Schleppgaube.",
      drawing: "dormer" as DrawingId,
    },
    {
      number: "04",
      figure: "05",
      title: "Klempnerarbeiten",
      text: "Dachrinnen, Fallrohre und Anschlüsse aus Kupfer, Zink oder Aluminium, gefertigt in der eigenen Werkstatt.",
      drawing: "gutter" as DrawingId,
    },
  ],
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
