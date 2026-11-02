const base = import.meta.env.BASE_URL;

export const href = (path: string) => `${base}${path.replace(/^\//, "")}`;

export const toRoutePath = (pathname: string) => {
  const rest = pathname.startsWith(base) ? pathname.slice(base.length) : pathname.replace(/^\//, "");
  return `/${rest.replace(/\/+$/, "")}`;
};

export const isInternal = (url: URL) => url.origin === window.location.origin && url.pathname.startsWith(base);
