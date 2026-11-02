export interface PhotoSource {
  src: string;
  srcSet: string;
  small: string;
}

interface PhotoVariant {
  width: number;
  url: string;
}

const fileName = /([^/]+)-(\d+)\.jpg$/;

export const createPhotoLibrary = (files: Record<string, string>) => {
  const library = new Map<string, PhotoVariant[]>();

  Object.entries(files).forEach(([path, url]) => {
    const match = path.match(fileName);
    if (!match) return;
    const [, name, width] = match;
    library.set(name, [...(library.get(name) ?? []), { width: Number(width), url }]);
  });

  return (name: string): PhotoSource | undefined => {
    const variants = [...(library.get(name) ?? [])].sort((a, b) => a.width - b.width);
    if (!variants.length) return undefined;
    return {
      src: variants[variants.length - 1].url,
      srcSet: variants.map((variant) => `${variant.url} ${variant.width}w`).join(", "),
      small: variants[0].url,
    };
  };
};
