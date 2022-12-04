import { RouterProvider } from 'react-router-dom'
import { router } from '@/features/router'
import '@/features/i18n'

export default function App() {
    return <RouterProvider router={router} />
}
