import { useState, useEffect, useCallback, useRef } from 'react';
import type { Dispatch, SetStateAction } from 'react';

export function useLocalStorage(
  key: string
): [string | null, Dispatch<SetStateAction<string | null>>] {
  const defaultValue = window.localStorage.getItem(key);
  const [state, setState] = useState<null | string>(defaultValue);
  const isFirstEffect = useRef(true);

  /** cache storage event callback */
  const handleStorageEvent = useCallback(
    (event: StorageEvent) => {
      if (event.key !== key) return;
      setState(event.newValue);
    },
    [key]
  );

  /** handle storage event */
  useEffect(() => {
    window.addEventListener('storage', handleStorageEvent);
    return () => {
      window.removeEventListener('storage', handleStorageEvent);
    };
  }, [handleStorageEvent]);

  /** if state update,localstorage also update. */
  useEffect(() => {
    // no need update localstorage when first rendering.
    if (isFirstEffect.current) {
      isFirstEffect.current = false;
      return;
    }
    window.localStorage.setItem(key, state || '');
  }, [key, state]);

  return [state, setState];
}
