import React from 'react'
import { Route } from '@tanstack/react-router'

import { rootRoute } from "./rootRoute.tsx";

export const indexRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/',
    component: IndexComponent,
})

function IndexComponent() {
    return (
        <div className="p-2">
            <h3>Welcome Home!</h3>
        </div>
    )
}
