export interface Scene {
  id: string;
  name: string;
  kelvin: number;
  brightness: number;
}

export const light = {
  title: "Licht für jede Tageszeit.",
  text: "Probier aus, wie dein Raum mit dimmbarem Licht in wechselnder Farbtemperatur wirkt. Genau so stellen wir es nach dem Einbau mit dir ein.",
  scenesLabel: "Lichtszene",
  kelvinLabel: (kelvin: number) => `Farbtemperatur: ${kelvin} K`,
  kelvinValue: (kelvin: number) => `${kelvin} Kelvin`,
  brightnessLabel: (brightness: number) => `Helligkeit: ${brightness} %`,
  brightnessValue: (brightness: number) => `${brightness} Prozent`,
  custom: "Eigene Einstellung",
  room: "Wohnzimmer, Lindenthal",
  photoAlt: "Modernes Wohnzimmer mit grauem Sofa und großem Fenster",
  scenes: [
    { id: "ambiente", name: "Ambiente", kelvin: 2700, brightness: 45 },
    { id: "arbeit", name: "Arbeitslicht", kelvin: 4500, brightness: 95 },
    { id: "nacht", name: "Nachtlicht", kelvin: 2700, brightness: 10 },
  ] satisfies Scene[],
};
