import React from 'react'
import { RouterProvider } from '@tanstack/react-router'

import './App.css'

import { router } from "./router.tsx";

// Register things for typesafety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

function App() {
    return <RouterProvider router={router} />
}

export default App
