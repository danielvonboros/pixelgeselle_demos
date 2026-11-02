export const photoWidths = [800, 1600];

export const photoUrl = (photo, width) => {
  const [ratioWidth, ratioHeight] = photo.ratio.split(":").map(Number);
  const params = new URLSearchParams({
    w: String(width),
    h: String(Math.round((width * ratioHeight) / ratioWidth)),
    fit: "crop",
    crop: photo.focus ? "focalpoint" : "entropy",
    q: "72",
    fm: "jpg",
  });
  if (photo.focus) {
    params.set("fp-x", String(photo.focus[0]));
    params.set("fp-y", String(photo.focus[1]));
  }
  return `https://images.unsplash.com/${photo.id}?${params}`;
};
