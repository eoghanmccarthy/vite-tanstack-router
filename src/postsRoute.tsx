import React from "react";
import { Link, Outlet, Route } from "@tanstack/react-router";

import {fetchPosts} from "./api.ts";

import { rootRoute } from "./rootRoute.tsx";
import { postRoute } from "./postRoute.tsx";

export const postsRoute = new Route({
    getParentRoute: () => rootRoute,
    path: 'posts',
    loader: () => fetchPosts(),
    component: PostsComponent,
})

function PostsComponent() {
    const posts = postsRoute.useLoaderData()

    return (
        <div className="p-2 flex gap-2">
            <div className="list-disc bg-gray-800/70 rounded-lg divide-y divide-green-500/30">
                {[...posts, { id: 'i-do-not-exist', title: 'Non-existent Post' }]?.map(
                    (post) => {
                        return (
                            <div key={post.id} className="whitespace-nowrap">
                                <Link
                                    to={postRoute.to}
                                    params={{
                                        postId: post.id,
                                    }}
                                    className="block py-1 px-2 text-green-300 hover:text-green-200"
                                    activeProps={{ className: '!text-white font-bold' }}
                                >
                                    <div>{post.title.substring(0, 20)}</div>
                                </Link>
                            </div>
                        )
                    },
                )}
            </div>
            <Outlet />
        </div>
    )
}

export const postsIndexRoute = new Route({
    getParentRoute: () => postsRoute,
    path: '/',
    component: PostsIndexComponent,
})

function PostsIndexComponent() {
    return <div>Select a post.</div>
}
