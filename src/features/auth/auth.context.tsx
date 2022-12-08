import { createContext, useCallback, useEffect } from 'react';
import { useFetchGetCheck } from '@/features/fetch';
import { useLocalStorage } from '@/features/storage';

interface IAuth {
    authToken: null | string;
    setAuthToken: (token: string) => void;
    removeAuthToken: () => void;
}

export const AuthContext = createContext<IAuth>({
    authToken: null,
    setAuthToken: () => undefined,
    removeAuthToken: () => undefined,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [authToken, setAuthToken] = useLocalStorage('authToken');
    const removeAuthToken = useCallback(() => {
        setAuthToken(null);
    }, [setAuthToken]);

    const { isError } = useFetchGetCheck();
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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
