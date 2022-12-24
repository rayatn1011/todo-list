import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './protected-route';

/**
 * Page Component
 */
import NotFound from '@/pages/not-found';
/**
 * lazy Page Component
 */
const HomePage = lazy(() => import('@/pages/home'));
const SignInPage = lazy(() => import('@/pages/sign-in'));
const SignUpPage = lazy(() => import('@/pages/sign-up'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute isRequireAuth={true}>
        <Suspense>
          <HomePage />
        </Suspense>
      </ProtectedRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: 'sign-up',
    element: (
      <ProtectedRoute isRequireNoAuth={true}>
        <Suspense>
          <SignUpPage />
        </Suspense>
      </ProtectedRoute>
    ),
  },
  {
    path: 'sign-in',
    element: (
      <ProtectedRoute isRequireNoAuth={true}>
        <Suspense>
          <SignInPage />
        </Suspense>
      </ProtectedRoute>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
