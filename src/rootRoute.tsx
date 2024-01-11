import React from 'react'
import { Link, Outlet, RootRoute } from '@tanstack/react-router'

export const rootRoute = new RootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <div className="bg-gradient-to-r from-green-700 to-lime-600 text-white">
            <div className="p-2 flex gap-2 text-lg bg-black/40 shadow-xl">
                <Link
                    to="/"
                    activeProps={{
                        className: 'font-bold',
                    }}
                    activeOptions={{ exact: true }}
                >
                    Home
                </Link>{' '}
                <Link
                    to={'/posts'}
                    activeProps={{
                        className: 'font-bold',
                    }}
                >
                    Posts
                </Link>
            </div>
            <Outlet />
        </div>
    )
}
