import { useCallback, useEffect } from 'react';
import { useFetchGetCheck } from '@/features/apis';
import { useLocalStorage } from '@/features/storage';
import { AuthContext } from './auth.context';

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
