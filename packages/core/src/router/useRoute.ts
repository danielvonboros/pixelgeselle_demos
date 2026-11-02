import { useContext } from "react";
import { toRoutePath } from "./href";
import { RouterContext } from "./routerContext";

export const useRoute = () => {
  const location = useContext(RouterContext);
  if (!location) {
    throw new Error("useRoute needs a RouterProvider");
  }
  const isCurrent = (target: string) => {
    const url = new URL(target, window.location.href);
    return !url.hash && toRoutePath(url.pathname) === location.path;
  };
  return { path: location.path, isCurrent };
};
