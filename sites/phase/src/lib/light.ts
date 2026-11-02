const channels = (hex: string) => [1, 3, 5].map((index) => parseInt(hex.slice(index, index + 2), 16));

export const mixHex = (from: string, to: string, amount: number) => {
  const start = channels(from);
  const end = channels(to);
  return `#${start
    .map((value, index) => Math.round(value + (end[index] - value) * amount).toString(16).padStart(2, "0"))
    .join("")}`;
};

export const lightColor = (kelvin: number) =>
  kelvin <= 4000 ? mixHex("#ffb35c", "#fff1dc", (kelvin - 2700) / 1300) : mixHex("#fff1dc", "#d6e4ff", (kelvin - 4000) / 2500);
