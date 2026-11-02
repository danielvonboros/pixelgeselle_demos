import { Fragment, useEffect } from "react";
import NotFound from "./NotFound";
import type { Route } from "./routerContext";
import { useRoute } from "./useRoute";

interface RoutesProps {
  routes: Route[];
  notFoundTitle: string;
}

const Routes = ({ routes, notFoundTitle }: RoutesProps) => {
  const { path } = useRoute();
  const route = routes.find((item) => item.path === path);
  const title = route?.title ?? notFoundTitle;

  useEffect(() => {
    document.title = title;
  }, [title]);

  return <Fragment key={path}>{route ? route.element : <NotFound />}</Fragment>;
};

export default Routes;
