import { rootRoute } from "./rootRoute.tsx";
import { indexRoute } from "./indexRoute.tsx";
import { postsRoute, postsIndexRoute, postRoute } from "./postsRoute.tsx";

export const routeTree = rootRoute.addChildren([
  postsRoute.addChildren([postRoute, postsIndexRoute]),
  indexRoute,
]);
