import { RouterProvider } from 'react-router-dom';
import { router } from '@/features/router';
import { FetchProvider } from '@/features/fetch';
import { AuthProvider } from '@/features/auth';

export default function App() {
  return (
    <FetchProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </FetchProvider>
  );
}
