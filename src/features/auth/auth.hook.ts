import { useContext } from 'react';
import { AuthContext } from './auth.context';

export function useAuth() {
    const { authToken, setAuthToken, removeAuthToken } = useContext(AuthContext);
    const isAuth = !!authToken;

    return { isAuth, authToken, setAuthToken, removeAuthToken };
}
