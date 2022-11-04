import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/features/router'

export function App() {
    return <RouterProvider router={router} />
}
