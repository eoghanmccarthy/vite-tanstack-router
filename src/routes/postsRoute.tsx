import { ErrorComponent, ErrorRouteProps, Link, Outlet, Route } from "@tanstack/react-router";

import { fetchPost, fetchPosts } from "../api.ts";

import { rootRoute } from "./rootRoute.tsx";

class NotFoundError extends Error {}

export const postsRoute = new Route({
  component: PostsComponent,
  getParentRoute: () => rootRoute,
  loader: () => fetchPosts(),
  path: "posts",
});

function PostsComponent() {
  const posts = postsRoute.useLoaderData();

  return (
    <div className="p-2 flex gap-2">
      <div className="list-disc bg-gray-800/70 rounded-lg divide-y divide-green-500/30">
        {[
          ...posts,
          {
            id: "i-do-not-exist",
            title: "Non-existent Post",
          },
        ]?.map((post) => {
          return (
            <div className="whitespace-nowrap" key={post.id}>
              <Link
                activeProps={{
                  className: "!text-white font-bold",
                }}
                className="block py-1 px-2 text-green-300 hover:text-green-200"
                params={{
                  postId: post.id,
                }}
                to={postRoute.to}
              >
                <div>{post.title.slice(0, 20)}</div>
              </Link>
            </div>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
}

export const postsIndexRoute = new Route({
  component: PostsIndexComponent,
  getParentRoute: () => postsRoute,
  path: "/",
});

function PostsIndexComponent() {
  return <div>Select a post.</div>;
}

export const postRoute = new Route({
  component: PostComponent,
  errorComponent: PostErrorComponent,
  getParentRoute: () => postsRoute,
  loader: ({ params }) => fetchPost(params.postId),
  path: "$postId",
});

function PostErrorComponent({ error }: ErrorRouteProps) {
  if (error instanceof NotFoundError) {
    return <div>{error.message}</div>;
  }

  return <ErrorComponent error={error} />;
}

function PostComponent() {
  const post = postRoute.useLoaderData();

  return (
    <div className="space-y-2">
      <h4 className="text-xl font-bold">{post.title}</h4>
      <hr className="opacity-20" />
      <div className="text-sm">{post.body}</div>
    </div>
  );
}
