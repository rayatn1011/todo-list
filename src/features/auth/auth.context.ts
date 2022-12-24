import { createContext } from 'react';

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
