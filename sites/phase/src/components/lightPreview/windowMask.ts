const panes = [
  "0,150 147,172 147,757 0,782",
  "162,178 301,197 301,688 280,690 250,695 220,701 200,706 190,712 187,725 187,758 162,760",
];

const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 1200' preserveAspectRatio='none'>${panes
  .map((points) => `<polygon points='${points}'/>`)
  .join("")}</svg>`;

export const windowMask = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
