import { href } from "@pixelgeselle/core";

export const process = {
  label: "Ablauf",
  steps: [
    { number: "01", title: "Aufmaß", text: "Wir kommen vorbei, messen den Raum und hören zu, wie du ihn nutzt." },
    { number: "02", title: "Entwurf", text: "Du bekommst Zeichnungen, Holzmuster und einen Festpreis, bevor gebaut wird." },
    { number: "03", title: "Werkstatt", text: "Gefertigt in Giesing, aus Holz von Händlern, die wir persönlich kennen." },
    { number: "04", title: "Montage", text: "Die Hände, die gebaut haben, bauen auch ein. Sauber und an einem festen Termin." },
  ],
};

export const careers = {
  route: "/karriere",
  applyHref: href("/karriere#bewerbung"),
  pageTitle: "Karriere: Schreiner gesucht – Werkstatt Ahrens",
  crumb: "Karriere",
  kicker: "KARRIERE",
  title: "Schreinerin oder Schreiner gesucht.",
  text: "Vollzeit und unbefristet, in unserer Werkstatt in Giesing. Bei uns begleitest du ein Möbel vom ersten Zuschnitt bis zur Montage beim Kunden.",
  facts: ["38 Stunden, freitags um 14 Uhr Feierabend", "Eigene Hobelbank und moderne Maschinen", "Auch direkt nach der Ausbildung"],
  offerTitle: "Was dich erwartet",
  offer: [
    "38 Stunden, freitags um 14 Uhr Feierabend",
    "Eigene Hobelbank und moderne Maschinen",
    "Möbel vom Zuschnitt bis zur Montage in einer Hand",
    "Weiterbildung zur Meisterin oder zum Meister, wir zahlen mit",
  ],
  bringTitle: "Was du mitbringst",
  bring: [
    "Abgeschlossene Ausbildung als Schreinerin oder Schreiner, gern auch frisch",
    "Freude an Massivholz und sauberen Details",
    "Führerschein Klasse B für die Montage",
  ],
  cta: "In zwei Minuten bewerben",
  note: "Ohne Anschreiben, direkt vom Handy.",
  photoAlt: "Aufgeräumte Schreinerwerkstatt mit Hobelbänken und Werkzeug an der Wand",
  applyKicker: "SCHNELLBEWERBUNG",
  applyTitle: "Ohne Anschreiben. Direkt vom Handy.",
  applyText: "Name und Nummer reichen. Wir melden uns innerhalb von zwei Tagen und laden dich auf einen Kaffee in die Werkstatt ein.",
};

export const contact = {
  title: "Erzähl uns von deinem Raum. Wir kommen zum Aufmaß vorbei.",
  messagePlaceholder: "Zum Beispiel: Einbauschrank in der Dachschräge, etwa drei Meter breit",
  location: "Werkstatt in Giesing, München",
};
