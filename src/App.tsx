import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/features/router'
import '@/features/i18n'

export function App() {
    return <RouterProvider router={router} />
}
