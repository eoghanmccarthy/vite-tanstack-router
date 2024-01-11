import React from 'react'
import { Router, NotFoundRoute } from '@tanstack/react-router'

import { rootRoute } from "./rootRoute.tsx";
import { indexRoute } from "./indexRoute.tsx";
import { postRoute } from "./postRoute.tsx";
import { postsRoute, postsIndexRoute } from "./postsRoute.tsx";

const notFoundRoute = new NotFoundRoute({
    getParentRoute: () => rootRoute,
    component: NotFound,
})

function NotFound() {
    return (
        <div className="p-2">
            <h3>404 - Not Found</h3>
        </div>
    )
}

const routeTree = rootRoute.addChildren([
    postsRoute.addChildren([postRoute, postsIndexRoute]),
    indexRoute,
])

export const router = new Router({
    routeTree,
    notFoundRoute,
    defaultPreload: 'intent',
    defaultStaleTime: 5000,
})
