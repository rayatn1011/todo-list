import useSWR from 'swr';
import { useAuth } from '@/features/auth';
import { fetcher } from '@/features/fetch';
import type { IErrorMessage } from '@/features/fetch';

export interface ISiginIn {
  user: {
    email: string;
    password: string;
  };
}

export function useFetchPostSiginIn(postBody: ISiginIn) {
  const { authToken } = useAuth();

  const apiUrl = '/users/sigin_in';
  const { data, error } = useSWR<string, IErrorMessage>(
    {
      url: apiUrl,
      config: {
        headers: {
          authorization: authToken,
        },
        method: 'POST',
        body: JSON.stringify(postBody),
      },
    },
    fetcher,
    {
      shouldRetryOnError: false,
    }
  );
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
