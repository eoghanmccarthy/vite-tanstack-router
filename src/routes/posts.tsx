import * as React from "react";
import { FileRoute, Link, Outlet } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";

import { postsQueryOptions } from "../api.ts";

export const Route = new FileRoute('/posts').createRoute({
  component: PostsComponent,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(postsQueryOptions),
});

function PostsComponent() {
  const postsQuery = useSuspenseQuery(postsQueryOptions);
  const posts = postsQuery.data;

  return (
    <div>
      <ul>
        {posts?.map((post) => {
          return (
            <li key={post.id}>
              <Link
                params={{
                  postId: post.id,
                }}
                to="/posts/$postId"
              >
                <div>{post.title.slice(0, 20)}</div>
              </Link>
            </li>
          );
        })}
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}
