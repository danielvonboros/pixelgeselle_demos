export interface Tone {
  id: string;
  name: string;
  hex: string;
  text: string;
}

export const tones: Tone[] = [
  { id: "kalk", name: "Kalkweiß", hex: "#ebe7de", text: "#151515" },
  { id: "salbei", name: "Salbei", hex: "#9aa58e", text: "#151515" },
  { id: "ocker", name: "Ocker", hex: "#c08a3e", text: "#151515" },
  { id: "taube", name: "Taubenblau", hex: "#7d8fa0", text: "#151515" },
  { id: "umbra", name: "Umbra", hex: "#5b4a3c", text: "#f3f1ec" },
];

export const defaultToneId = "salbei";

export const hero = {
  title: "Wände, die man nicht bemerkt. Weil einfach alles stimmt.",
  text: "Innenräume, Fassaden, Lacke und Kalkputze in Berlin und Umgebung. Sauber abgeklebt, pünktlich fertig, zum Festpreis.",
  pickerLabel: "Farbton wählen",
  pickerGroup: "Farbton",
  photoAlt: (tone: string) => `Ruhiges Altbauzimmer mit einem Sessel vor einer Wand in ${tone}`,
  caption: "Altbau in Schöneberg",
  sectionLabel: "Farbtöne",
};
