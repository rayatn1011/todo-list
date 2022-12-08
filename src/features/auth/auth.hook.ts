import { useContext } from 'react';
import { AuthContext } from '@/features/auth/auth.context';

export function useAuth() {
    const { authToken, setAuthToken, removeAuthToken } = useContext(AuthContext);
    const isAuth = !!authToken;

    return { isAuth, authToken, setAuthToken, removeAuthToken };
}
