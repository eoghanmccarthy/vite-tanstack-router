import * as React from "react";
import { Link, Outlet, rootRouteWithContext } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";

export const Route = rootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div>
        <Link activeOptions={{ exact: true }} to="/">
          Home
        </Link>{" "}
        <Link to={"/posts"}>Posts</Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
}
