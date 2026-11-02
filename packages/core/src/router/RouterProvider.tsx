import { useEffect, useLayoutEffect, useState, type ReactNode } from "react";
import { isInternal, toRoutePath } from "./href";
import { RouterContext, type RouteLocation } from "./routerContext";

interface RouterProviderProps {
  children: ReactNode;
}

const readLocation = (type: RouteLocation["type"]): RouteLocation => ({
  path: toRoutePath(window.location.pathname),
  hash: window.location.hash,
  type,
});

const RouterProvider = ({ children }: RouterProviderProps) => {
  const [location, setLocation] = useState(() => readLocation("initial"));

  useEffect(() => {
    const onPop = () => setLocation(readLocation("pop"));
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }
      const anchor = event.target instanceof Element ? event.target.closest("a") : null;
      if (!(anchor instanceof HTMLAnchorElement) || (anchor.target && anchor.target !== "_self") || anchor.hasAttribute("download")) {
        return;
      }
      const url = new URL(anchor.href);
      if (!isInternal(url) || (url.pathname === window.location.pathname && url.hash)) {
        return;
      }
      event.preventDefault();
      window.history.pushState(null, "", `${url.pathname}${url.search}${url.hash}`);
      setLocation(readLocation("push"));
    };

    window.addEventListener("popstate", onPop);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("popstate", onPop);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useLayoutEffect(() => {
    if (location.type === "pop") {
      return;
    }
    const target = location.hash ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null;
    if (target) {
      target.scrollIntoView({ behavior: "instant" });
      return;
    }
    if (location.type === "push") {
      window.scrollTo({ top: 0, behavior: "instant" });
      document.getElementById("main")?.focus({ preventScroll: true });
    }
  }, [location]);

  return <RouterContext.Provider value={location}>{children}</RouterContext.Provider>;
};

export default RouterProvider;
