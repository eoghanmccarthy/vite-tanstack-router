import * as React from "react";
import {
  ErrorComponent,
  FileRoute,
  ErrorRouteProps,
} from "@tanstack/react-router";

import { postQueryOptions } from "../api.ts";

class PostNotFoundError extends Error {}

export const Route = new FileRoute('/posts/$postId').createRoute({
  component: PostComponent,
  errorComponent: PostErrorComponent as any,
  loader: ({ context: { queryClient }, params: { postId } }) =>
    queryClient.ensureQueryData(postQueryOptions(postId)),
});

export function PostErrorComponent({ error }: ErrorRouteProps) {
  if (error instanceof PostNotFoundError) {
    return <div>{error.message}</div>;
  }

  return <ErrorComponent error={error} />;
}

function PostComponent() {
  const post = Route.useLoaderData();

  return (
    <div>
      <h4>{post.title}</h4>
      <div>{post.body}</div>
    </div>
  );
}
