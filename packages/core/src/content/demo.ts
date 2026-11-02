import { brand } from "../config/brand";

export const demoContent = {
  skipLink: "Zum Inhalt springen",
  bar: {
    label: "Hinweis zur Beispielseite",
    text: `Beispielseite der ${brand.name}`,
    size: (size: string) => `Größe ${size}`,
    link: "So eine Seite für deinen Betrieb",
  },
  dialog: {
    title: "Das ist eine Beispielseite",
    text: (business: string, size: string) =>
      `${business} gibt es nicht. Die ${brand.name} haben diese Seite gebaut, um zu zeigen, wie eine Website in Größe ${size} aussehen kann.`,
    hint: "Formulare, Telefon und E-Mail sind hier deshalb nicht aktiv. Wenn dir die Seite gefällt, sprich mit uns über deine eigene.",
    primary: "Kennenlerngespräch buchen",
    secondary: "Weiter ansehen",
  },
  legal: {
    imprint: "Impressum",
    privacy: "Datenschutz",
    notice: (business: string) => `${business} ist ein fiktiver Betrieb. Beispielseite der ${brand.name}.`,
  },
  form: {
    name: "Name",
    contact: "Telefon oder E-Mail",
    message: "Worum geht es?",
    photos: "Fotos anhängen",
    photosSelected: (count: number) => (count === 1 ? "1 Foto ausgewählt" : `${count} Fotos ausgewählt`),
    submit: "Anfrage senden",
  },
  photo: {
    missing: "Foto folgt",
  },
  application: {
    name: "Name",
    phone: "Handynummer",
    stage: "Wo stehst du gerade?",
    stages: ["In der Ausbildung", "Gesellin oder Geselle", "Meisterin oder Meister", "Quereinstieg"],
    file: "Lebenslauf anhängen, wenn du magst",
    fileSelected: (name: string) => `Angehängt: ${name}`,
    submit: "Bewerbung abschicken",
  },
  router: {
    breadcrumbs: "Du bist hier",
    notFound: {
      code: "404",
      title: "Diese Seite gibt es nicht.",
      text: "Vielleicht hat sich in der Adresse ein Tippfehler eingeschlichen. Auf der Startseite findest du alles Wichtige.",
      link: "Zur Startseite",
    },
  },
};
