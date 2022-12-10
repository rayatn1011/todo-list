import { useCallback, useEffect } from 'react';
import { AuthContext } from '@/features/auth/auth.context';
import { useFetchGetCheck } from '@/features/fetch';
import { useLocalStorage } from '@/features/storage';

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [authToken, setAuthToken] = useLocalStorage('authToken');
    const removeAuthToken = useCallback(() => {
        setAuthToken(null);
    }, [setAuthToken]);

    const { isError } = useFetchGetCheck();

    // If check is Error, remove authorization token
    useEffect(() => {
        if (isError?.status === 401) {
            removeAuthToken();
        }
    }, [isError, removeAuthToken]);

    return (
        <AuthContext.Provider value={{ authToken, setAuthToken, removeAuthToken }}>
            {children}
        </AuthContext.Provider>
    );
}
