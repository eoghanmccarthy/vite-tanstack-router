import { Link, Outlet, RootRoute } from "@tanstack/react-router";

export const rootRoute = new RootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="bg-gradient-to-r from-green-700 to-lime-600 text-white">
      <div className="p-2 flex gap-2 text-lg bg-black/40 shadow-xl">
        <Link
          activeOptions={{ exact: true }}
          activeProps={{ className: "font-bold" }}
          to="/"
        >
          Home
        </Link>{" "}
        <Link activeProps={{ className: "font-bold" }} to={"/posts"}>
          Posts
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
