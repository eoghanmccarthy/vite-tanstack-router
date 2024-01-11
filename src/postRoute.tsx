import React from "react";
import {ErrorComponent, ErrorRouteProps, Route} from "@tanstack/react-router";

import { fetchPost } from "./api.ts";

import { postsRoute } from "./postsRoute.tsx";

class NotFoundError extends Error {}

export const postRoute = new Route({
    getParentRoute: () => postsRoute,
    path: '$postId',
    errorComponent: PostErrorComponent,
    loader: ({ params }) => fetchPost(params.postId),
    component: PostComponent,
})

function PostErrorComponent({ error }: ErrorRouteProps) {
    if (error instanceof NotFoundError) {
        return <div>{error.message}</div>
    }

    return <ErrorComponent error={error} />
}

function PostComponent() {
    const post = postRoute.useLoaderData()

    return (
        <div className="space-y-2">
            <h4 className="text-xl font-bold">{post.title}</h4>
            <hr className="opacity-20" />
            <div className="text-sm">{post.body}</div>
        </div>
    )
}
