import { Navigate } from 'react-router-dom';
import { useAuth } from '@/features/auth';

interface IProtectedRoute {
    isRequireAuth?: boolean;
    isRequireNoAuth?: boolean;
    children: React.ReactNode;
}

export default function ProtectedRoute({
    children,
    isRequireAuth = false,
    isRequireNoAuth = false,
}: IProtectedRoute) {
    const { isAuth } = useAuth();

    const isRedirectToHome = isRequireNoAuth && isAuth;
    const isRedirectToSignIn = isRequireAuth && !isAuth;

    return isRedirectToHome ? (
        <Navigate to="/" />
    ) : isRedirectToSignIn ? (
        <Navigate to="/sign-in" />
    ) : (
        <>{children}</>
    );
}
